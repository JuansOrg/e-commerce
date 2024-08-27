import React from 'react'

const Navbar = () => {
    const MenuLinks = [
        {
            id : 1,
            name : 'Home',
            link : '#'
        },

        {
            id : 2,
            name : 'Shop',
            link : '/#shop'
        },

        {
            id : 3,
            name : 'About',
            link : '/#About'
        },

        {
            id : 4,
            name : 'Blogs',
            link : '/#blogs'
        },
    ]
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='py-4'>
            <div className="container">
                <div>
                    <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
                </div>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex itens-center gap-4'>
                    {
                        MenuLinks.map((data,index) => (
                            <li key={index}>
                                <a href={data.link}>{data.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar
