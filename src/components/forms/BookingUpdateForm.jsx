"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

export default  function BookingUpdateForm({data}) {
  const router = useRouter();
  const handleServiceBooking = async(e) =>{
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const address = form.address.value;
    const date = form.date.value;
   
    const bookingPayload = {
      date,
      phone,
      address,
    }
   console.log(bookingPayload);
   const res =await fetch(`http://localhost:3000/api/mybookings/${data?._id}`,{
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingPayload)
   })
   let postedRes = null;
try {
  postedRes = await res.json();
} catch {
  postedRes = null;
}
   console.log("updated data: ", postedRes)
  router.push("/mybookings")
  }
  const {data: session} = useSession();
  return (
    <div className='mt-20'>
        <h2 className='font-semibold mb-5 text-3xl text-center'>Book Service: {data?.title}</h2>
      <form onSubmit={handleServiceBooking} className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Left Column */}
  <div className="space-y-4">
    <div>
      <label className="block text-gray-700 font-medium mb-1">Name</label>
      <input
      defaultValue={session?.user.name}
        type="text"
        name="name"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Enter your name"
        readOnly
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Email</label>
      <input
      defaultValue={session?.user.email}
        type="email"
        name="email"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Enter your email"
        readOnly
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Phone</label>
      <input
        type="tel"
        name="phone"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Enter your phone number"
        defaultValue={data?.phone}
      />
    </div>
  </div>

  {/* Right Column */}
  <div className="space-y-4">
    <div>
      <label className="block text-gray-700 font-medium mb-1">Date</label>
      <input
        type="date"
        name="date"
        defaultValue={data?.date}
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Due Amount</label>
      <input
      defaultValue={data?.service_price}
        type="number"
        name="amount"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Enter due amount"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Present Address</label>
      <input
        type="text"
        name="address"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Enter your address"
        defaultValue={data?.address}
      />
    </div>
  </div>

  {/* Full Width Button */}
  <div className="col-span-1 md:col-span-2">
    <button
      type="submit"
      className="w-full py-3 bg-[#FF3811] text-white font-semibold rounded hover:bg-orange-600 transition"
    >
      Order Confirm
    </button>
  </div>
</form>

    </div>
  )
}
