import Image from 'next/image'
import React from 'react'
import RegisterForm from './components/RegisterForm'

export default function RegisterPage() {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-between my-10 gap-4 max-w-7xl mx-auto p-4'>
         <Image src="/assets/images/login/login.svg" alt="Register" width={400} height={300} className='w-full ' />
          <div className="card  w-full border border-gray-200  p-4 flex flex-col items-center justify-center ">
            <h2 className='font-bold text-2xl text-gray-700'>Sign Up</h2>
      <RegisterForm/>
    </div>
      </div>
    </div>
  )
}
