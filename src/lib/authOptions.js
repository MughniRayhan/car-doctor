
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect, { collectionNamesObj } from "./dbConnect";
import { loginUser } from "@/app/actions/auth/loginUser";

export const authOptions = {
  // Configure one or more authentication providers
 providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        console.log(credentials)
      // Add logic here to look up the user from the credentials supplied
      const user = await loginUser(credentials)

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
  
],
pages: {
  signIn: '/login'
},
callbacks: {
     async signIn({ user, account, profile, email, credentials }) {
        if(account){
            try {
                // console.log("From Callbacks", { user, account, profile, email, credentials });
             const {providerAccountId,provider} = account;
        const {name, email, image} = user;
        const payload = {role: "user", providerAccountId, provider, name, email, image};
        console.log("From Callbacks", payload);
        const existingUser = (await dbConnect(collectionNamesObj.usersCollection)).findOne({providerAccountId});

        if(!existingUser){
            await dbConnect(collectionNamesObj.usersCollection).insertOne(payload);
        }
            } catch (error) {
                console.log(error)
                return false; // Reject sign-in if there's an error
            }

        }
       
      return true
    },
       async session({ session, user, token }) {
      if(token){
        session.user.username = token.username
        session.user.role = token.role
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.username = user.username
        token.role = user.role
      }
      return token
    }
}
}