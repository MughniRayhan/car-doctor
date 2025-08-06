import BookingUpdateForm from '@/components/forms/BookingUpdateForm'
import { headers } from 'next/headers';
import React from 'react'

export default async function UpdateBookingPage({params}) {
    const p = await params;
    const res = await fetch(`http://localhost:3000/api/mybookings/${p.id}`,{
      headers: new Headers(await headers())
    });
   let data = null;
if (res.ok) {
  try {
    data = await res.json();
  } catch {
    data = null;
  }
}
  return (
    <div>
      <BookingUpdateForm data={data}/>
    </div>
  )
}
