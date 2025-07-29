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
           <figure className='relative'>
             <Image src={"/assets/images/checkout/checkout.png"} alt={"checkout"} width={600} height={400} className='w-full h-96 object-cover' />
           
           <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center w-full h-full overlay-bg bg-opacity-50 px-16'>
                <h1 className='text-3xl font-bold text-white  mt-4'>Service Details</h1>
           </div>
           </figure>
        </section>
        <section>
            <div className='flex   gap-6 max-w-7xl mx-auto p-4 mt-8'>
                <Image src={data?.img} alt={data?.title} width={800} height={400} className='w-full rounded-2xl' />
                <div className='bg-gray-100 p-4 w-full rounded-2xl'>
                    <h2 className='text-xl font-bold text-white mt-4 bg-[#FF3811] p-4 rounded'>Services</h2>
                    <div>
                        {
                            data?.facility.map((item, index) => (
                                <p key={index} className='bg-white p-4 rounded mt-4'>{item.name}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
        <section className='max-w-7xl mx-auto p-4'>
            <h2 className='text-2xl font-bold  mt-8'>{data?.title}</h2>
                <p className='text-gray-700 mt-4 w-full'>{data?.description}</p>
        </section>
        <section className='max-w-7xl mx-auto p-4 my-8'>
            <h2 className='text-2xl font-bold'>Service Price: <span className='text-[#FF3811]'>${data?.price}</span></h2>
            <p className='text-gray-500 mt-2'>This price includes all the services listed above.</p>
        </section>
    </div>
  )
}
