import React from 'react'
import ImgP from '../assets/images/imagen-p.png'
import { Link } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider';
import '../css/Home.css'

export default function Home() {

  return (
    <div>
        <div className='header'>
              <img src={ImgP} alt="imagen principal" className='img-principal'/>
            <div className='buttons'>
                <Link to='hombre'>Hombre</Link>
                <Link to='mujer'>Mujer</Link>
  
            </div>
        </div>
        <div className='image'>
            <ImageSlider/>
        </div>   
    </div>
  )
}
