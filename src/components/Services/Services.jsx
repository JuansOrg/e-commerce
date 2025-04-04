import React from 'react'
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from 'react-icons/fa'

const Services = () => {
  const ServiceData = [
    {
      id:1,
      icon: <FaCarSide className='text-4xl md:text-5xl text-primary'/>,
      title: 'Free Shipping',
      description: 'Free Shipping on all order'
    },
    {
      id:2,
      icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
      title: 'Safe Money',
      description: '100% Money Back'
    },
    {
      id:3,
      icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary'/>,
      title: 'Secure Payment',
      description: 'All Payment Secure'
    },
    {
      id:4,
      icon: <FaWallet className='text-4xl md:text-5xl text-primary'/>,
      title: 'Quality Products',
      description: 'We ensure quality products'
    }
  ]
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div className='flex flex-col items-start sm:flex-row gap-4'>
              {data.icon}
              <div>
                <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                <h2 className='text-gray-400 text-sm'>{data.description}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
