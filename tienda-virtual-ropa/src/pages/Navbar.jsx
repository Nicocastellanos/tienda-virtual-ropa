import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <Link to='/'>Oddy</Link>
        <div>
            <Link to='hombre'>Hombre</Link>
            <Link to='mujer'>Mujer</Link>
            <Link to='otros'>Otros</Link>
            <Link to='carrito'><img src="" alt="carrito" /></Link>
        </div>
    </nav>
  )
}
