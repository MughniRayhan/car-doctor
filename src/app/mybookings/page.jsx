
import MyAllBooking from '@/components/table/MyAllBooking';
import { headers } from 'next/headers';

const fetchMyBookings = async() =>{
        const res = await fetch("http://localhost:3000/api/service",{
          headers: headers()
        });
        const d = await res.json();
        return d;
}
export default async function MyBookingsPage() {
    const data = await fetchMyBookings();

  return (
    <MyAllBooking data={data}/>
  )
}
