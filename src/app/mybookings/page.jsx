"use client";
import MyAllBooking from '@/components/table/MyAllBooking';
import React, { useEffect, useState } from 'react'

export default function MyBookingsPage() {
    const [data, setData] = useState([]);

    useEffect(()=>{
     const fetchMyBookings = async() =>{
        const res = await fetch("http://localhost:3000/api/service");
        const d = await res.json();
        setData(d)
     }
     fetchMyBookings();
    },[])
  return (
    <MyAllBooking data={data}/>
  )
}
