import React from 'react'

const Banner = ({data}) => {
    return (
        <div className='min-h-[550px] flex justify-center items-center py-12 '>
            <div className='container '>
                <div style={{backgroundColor:data[0].bgColor}} className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
                    <div className='p-6 sm:p-8 '>
                        <p className='text-sm'>{data[0].discount}</p>
                        <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{" "}{data[0].title}</h1>
                        <p className='text-sm'>{data[0].date}</p>
                    </div>

                    <div className='h-full flex items-center'>
                        <img src={data[0].image} alt="" className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover'/>
                    </div>

                    <div className='flex flex-col justify-center gap-4 p-6 sm:p-8 '>
                        <p className='font-bold text-xl'>{data[0].title2}</p>
                        <p className='text-3xl sm:text-5xl font-bold'>{data[0].title3}</p>
                        <p className='text-sm tracking-wide leading-5'>{data[0].title4}</p>
                        <div>
                            <button style={{color:data[0].bgColor}} className='bg-white py-2 px-4 rounded-full '>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
