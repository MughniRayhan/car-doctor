"use client";
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import {  FaGoogle } from 'react-icons/fa'

export default function SocialLogin() {
    const router = useRouter();
    const session = useSession();

    const handleSocialLogin = async (providerName) =>{
    const res = await signIn(providerName);
    }

    useEffect(()=>{
      if(session?.status == "authenticated"){
        router.push("/");
      }
    },[session?.status]);

  return (
    <div className='flex items-center justify-center gap-4 mt-4'>
        <div onClick={()=>handleSocialLogin("google")} className="  bg-gray-200 p-4 rounded-full"><FaGoogle/></div>
    </div>
  )
}
