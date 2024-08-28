import React from 'react'
import Slider from 'react-slick'
const Hero = () => {
    const settings = {
        dots: false,
        arrows: false,
        Infinite: true,
        speed:800,
        slidesToScroll: 1,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
    return (
        <div>
            <div>
                <Slider {...settings}></Slider>
            </div>
        </div>
    )
}

export default Hero
