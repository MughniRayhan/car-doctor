"use client";

import { signIn } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from "next/navigation";
import React from 'react'
import SocialLogin from "./SocialLogin";



export default function LoginForm() {
    const router = useRouter();

const handleSubmit = async(event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   try {
    const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false
    });

    if(res.ok){
      router.push("/");
      form.reset()
    }
    else{
        alert("authentication failed")
    }
   } catch (error) {
    console.log(error);
    alert("authentication failed")
   }
  };
    
  return (
    <form onSubmit={handleSubmit}  className="card-body  w-96 mx-auto">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password'/>
          <button type='submit' className="btn bg-[#FF3811] text-white mt-4 w-80">Log In</button>
          <p className='text-center mt-4'>Or Sign In with</p>
          <SocialLogin/>
        </fieldset>
      </form>
  )
}
