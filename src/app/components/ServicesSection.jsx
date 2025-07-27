// app/components/ServicesSection.jsx or .tsx
import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';

export default async function ServicesSection() {
  const servicesCollection = await dbConnect("test_services");
  const services = await servicesCollection.find({}).toArray();

  return (
    <div className='my-8'>
      <p className='text-center text-[#FF3811] font-bold'>Service</p>
      <h2 className='text-center text-3xl sm:text-5xl font-bold'>Our Service Area</h2>
      <p className='text-center text-gray-400 mb-8 mt-3'>
        the majority have suffered alteration in some form...
      </p>

      <div className='grid grid-cols-12 mt-3 space-x-4'>
        {services.map(service => (
          <div key={service._id} className='col-span-12 md:col-span-6 lg:col-span-4 border border-gray-200 p-4 rounded-lg mt-4 gap-4 bg-base-100'>
            <Image width={300} height={200} src={service.img} alt={service.title} className='mx-auto w-full rounded-lg' />
            <h2 className='font-bold text-2xl text-[#444444]'>{service.title}</h2>
            <h3 className='text-[#FF3811] text-xl font-semibold'>Price: ${service.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
