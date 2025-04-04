import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import headphone from './assets/hero/headphone.png'
import Products from './components/Products/Products'
import watch from './assets/category/smartwatch2-removebg-preview.png'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Blogs from './components/Blogs/Blogs'

const App = () => {
  const BannerData = [
    {
        discount: '20% OFF',
        title:'Fine Smile',
        date:'10 Jan to 28 Jan',
        image:headphone,
        title2:'Air Solo Bass',
        title3:'Winter Sale',
        title4:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        bgColor:'#f42c37',
    }
  ]
  const BannerData2 = [
    {
        discount: '40% OFF',
        title:'Happy Hours',
        date:'10 Jan to 28 Jan',
        image:watch,
        title2:'Air Solo Bass',
        title3:'Winter Sale',
        title4:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        bgColor:'#2dcc6f',
    }
  ]
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Partners/>
      <Footer/>
      <Blogs />
    </div>
  )
}

export default App
