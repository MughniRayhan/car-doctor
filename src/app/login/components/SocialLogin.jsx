import { signIn } from 'next-auth/react'
import React from 'react'
import {  FaGoogle } from 'react-icons/fa'

export default function SocialLogin() {
    const handleSocialLogin = async (providerName) =>{
    const res = await signIn(providerName, {redirect: false})
    console.log(res)
    }
  return (
    <div className='flex items-center justify-center gap-4 mt-4'>
        <div onClick={()=>handleSocialLogin("google")} className="  bg-gray-200 p-4 rounded-full"><FaGoogle/></div>
    </div>
  )
}
