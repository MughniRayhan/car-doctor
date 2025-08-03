import React from 'react'

export default function CheckoutForm() {
  return (
    <div className='mt-20'>
        <h2 className='font-semibold mb-5 text-3xl text-center'>Book Service</h2>
      <form className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Left Column */}
  <div className="space-y-4">
    <div>
      <label className="block text-gray-700 font-medium mb-1">Name</label>
      <input
        type="text"
        name="name"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Enter your name"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Email</label>
      <input
        type="email"
        name="email"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Enter your email"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Phone</label>
      <input
        type="tel"
        name="phone"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Enter your phone number"
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
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Due Amount</label>
      <input
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
