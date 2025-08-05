
import DeleteBookingsButton from '@/app/mybookings/components/DeleteBookingsButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaRegEdit } from 'react-icons/fa';

export default function MyAllBooking({data}) {
  if (!Array.isArray(data)) {
    return <div>No bookings found.</div>;
  }
  return (
    <div>
      <h2 className='font-semibold mt-8 mb-5 text-3xl text-center'>My All Bookings</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Date</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
      
              {
              data.map((item)=>{
                 return (
                    <tr key={item._id}>
              <td>
                  <Image src={item?.service_img} alt={item.service_name} height={50} width={50}/>
              </td>
              <td>{item.service_name}</td>
              <td>{item.date}</td>
              <td>{item.service_price}</td>
              <td>
                <Link href={`/mybookings/${item._id}`}>
                <FaRegEdit className='font-bold text-xl'/>
                </Link>
              </td>
              <td>
                <DeleteBookingsButton id={item._id}/>
              </td>
            </tr>
                 )
              })
              }
            
            
          </tbody>
        </table>
      </div>
    </div>
  )
}
