import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import Car from '../assets/images/car.png'

export default function Navbar() {
  return (
    <nav className='nav'>
        <Link to='/' className='oddy'>Oddy</Link>
        <div className='links-ropa'>
            <Link to='/hombre' className='links'>Hombre</Link>
            <Link to='/mujer' className='links'>Mujer</Link>
            <Link to='/otros' className='links'>Otros</Link>
            <Link to='/carrito' className='link-carrito'><img src={Car} alt="carrito" className='car'/></Link>
        </div>
    </nav>
  )
}
