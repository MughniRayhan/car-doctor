import CheckoutForm from '@/components/forms/CheckoutForm';
import React from 'react'

export default async function checkoutPage({params}) {
    const p = await params;
    const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
    const data = await res.json();
  return (
    <div>
      <CheckoutForm/>
    </div>
  )
}
