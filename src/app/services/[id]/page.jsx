import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServiceDetailsPage({params}) {
    const p = await params;
    const servicesCollection = await dbConnect(collectionNamesObj.servicesCollection);
    const data = await servicesCollection.findOne({_id: new ObjectId(p.id)})
  return (
    <div>
        <section>
            <Image src={"/assets/images/checkout/checkout.png"} alt={"checkout"} width={600} height={400} className='w-full h-96 object-cover' />
        </section>
      <h1>Service Details Page</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
