import Image from 'next/image'
import React from 'react'

export default async function ServicesSection() {
  const data = [
    {
        "_id": "635a0c0b64a6d231228942ae",
        "service_id": "04",
        "title": "Engine Oil Change",
        "img": "https://i.ibb.co/T2cpBd5/888.jpg",
        "price": "20.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "_id": "635a0c0b64a6d231228942af",
        "service_id": "05",
        "title": "Battery Charge",
        "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
        "price": "20.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "_id": "635b591a1dafe382a9da8c96",
        "service_id": "01",
        "title": "Full car Repair",
        "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
        "price": "200.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "_id": "635b5afc1dafe382a9da8c98",
        "service_id": "02",
        "title": "Engine Repair",
        "img": "https://i.ibb.co/5MvmD2g/88.jpg",
        "price": "150.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "_id": "635b5b691dafe382a9da8c99",
        "service_id": "03",
        "title": "Automatic Services",
        "img": "https://i.ibb.co/wh7t3N3/555.jpg",
        "price": "30.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        
        "service_id": "06",
        "title": "Electrical System",
        "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
        "price": "20.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    }
]

  return (
    <div className='my-8 bg-amber-500'>
      <p className='text-center text-[#FF3811] font-bold'>Service</p>
      <h2 className='text-center text-3xl sm:text-5xl font-bold'>Our Service Area</h2>
      <p className='text-center text-gray-400 mb-8 mt-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

      <div className='grid grid-cols-12 mt-3 space-x-4'>
      {data.map(service => (
        <div key={service._id} className='col-span-12 md:col-span-6 lg:col-span-4  border border-gray-200 p-4 rounded-lg mt-4   gap-4 bg-base-100'>
          
           
              <Image width={314} height={208} src={service.img}  className='mx-auto w-full rounded-lg'/>
            
            <div className=''>
              <h2 className=' font-bold text-2xl text-[#444444]'>{service.title}</h2>
              <h3 className='text-[#FF3811] text-xl font-semibold'>Price: ${service.price}</h3>
             
           
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
