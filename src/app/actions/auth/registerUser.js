"use server";
import bcrypt from 'bcrypt'
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) =>{
 const userCollection =await dbConnect(collectionNamesObj.usersCollection);

 const {email,password} = payload;
 if(!email || !password) return null;
 const user = await userCollection.findOne({email: payload.email});
 if(!user){
    const hashedPass =await bcrypt.hash(password,10);
    payload.password = hashedPass;
     const res = await userCollection.insertOne(payload);
     const {acknowledged,insertedId} = res;
     return {acknowledged,insertedId};
 }
 return null;
}