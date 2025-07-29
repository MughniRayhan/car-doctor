"use client";
import { registerUser } from '@/app/actions/auth/registerUser';
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa'

export default function RegisterForm() {
  const handleSubmit = async(event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    registerUser({name,email,password});
  };

  return (
    <form  onSubmit={handleSubmit} className="card-body  w-96 mx-auto">
        <fieldset className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password'/>
          <button type='submit' className="btn bg-[#FF3811] text-white mt-4 w-80">Sign Up</button>
          <p className='text-center mt-4'>Or Sign Up with</p>
          <div className='flex items-center justify-center gap-4 mt-4'>
            <Link href={"https://www.facebook.com/"} className="bg-gray-200 p-4 rounded-full"><FaFacebook/></Link>
            <Link href={"https://www.google.com/"} className="  bg-gray-200 p-4 rounded-full"><FaGoogle/></Link>
            <Link href={"https://www.linkedin.com/"} className="bg-gray-200 p-4 rounded-full"><FaLinkedin/></Link>
          </div>
        </fieldset>
      </form>
  )
}
