import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/ImageSlide.css'

import Gorra from '../assets/images/woman/gorra-morada.png'
import Short from '../assets/images/men/short-cafe.png'
import Chaqueta from '../assets/images/woman/chaqueta-mujer.png'
import GorraK from '../assets/images/men/gorra-kaki.png'
import Camiseta from '../assets/images/woman/camiseta-mujer.png'
import Vestido from '../assets/images/woman/vestido-mujer.png'

import { Link } from 'react-router-dom';


export default function ImageSlider() {
    const slides = [
        {src: Gorra, title: "Gorra Morada"},
        {src: Short , title: "Short Cafe"},
        {src: Chaqueta, title: "Camiseta Verde"},
        {src: GorraK , title: "Gorra Hombre"},
        {src: Camiseta, title: "Camiseta Mujer"},
        {src: Vestido, title: "Vestido Mujer"}
    ]

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <div className='image-container'>
            <Slider {...settings}>
                {slides.map((item, index) => (
                <div className='card' key={index}>
                    <div className='card-top'>
                        <Link><img src={item.src} alt={item.title} className='product-img'/></Link>
                    </div>
                </div>
            ))}
            </Slider>
            
        </div>
    )
}

