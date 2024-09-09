import React from 'react'

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5 ">
                    <div className='py-8 px-4'>
                        <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Jshop</a>
                        <p className='text-gray-600 lg:pr-24 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et deleniti ipsa non quis provident sit sunt aliquid explicabo incidunt quo suscipit, rem omnis sed repellat quaerat deserunt nesciunt culpa.</p>
                        <p className='text-gray-500'>Made with love by Juan Marques</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
