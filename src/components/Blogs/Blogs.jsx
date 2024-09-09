import React from 'react'
import Heading from '../Shared/Heading'
import img1 from '../../assets/blogs/blog-1.jpg'
import img2 from '../../assets/blogs/blog-2.jpg'
import img3 from '../../assets/blogs/blog-3.jpg'

const Blogs = () => {
    const BlogData = [
        {
            title:"How to choose perfect smartwatch",
            subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            published:"Jan 20, 2024 by Dilshad",
            image:img1,
        },

        {
            title:"How to choose the perfect gadget",
            subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            published:"Jan 20, 2024 by Satya",
            image:img2,
        },

        {
            title:"How to choose the VR set",
            subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            published:"Jan 20, 2024 by Sabyr",
            image:img3,
        }
    ]
    return (
        <div>
            <div className="container">
                <Heading title={'Recent News'} subtitle={'Explore Our Blogs'}/>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                    {
                        BlogData.map((data) => (
                            <div>
                                <div className='overflow-hidden rounded-2xl mb-2'>
                                    <img src={data.image} alt="" className='w-full h-64 object-cover rounded-2xl hover:scale-105 duration-500'/>
                                </div>

                                <div className='space-y-2'>
                                    <p className='text-xs text-gray-400 mt-2'>{data.published}</p>
                                    <h1 className='text-lg font-semibold mt-4 line-clamp-1'>{data.title}</h1>
                                    <p className='text-gray-600 mt-2 line-clamp-3 text-sm dark:text-gray-400'>{data.subtitle}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs
