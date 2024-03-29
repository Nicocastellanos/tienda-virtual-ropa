import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='contacto'>
            <h3 className='title-footer'>Contacto</h3>
            <ul>
                <img src="" alt="" />
                <li className='li-contact'>301 234 14 23</li>
                <img src="" alt="" />
                <li className='li-contact'>34 234 543</li>
                <img src="" alt="" />
                <li className='li-contact'>servicionalcliente@obby.com.co</li>
            </ul>
        </div>
        <div className='who'>
            <h3 className='title-footer'>Quienes Somos</h3>
            <ul>
                <Link className='li-footer'><li className='li-contact'>Cultura</li></Link>
                <Link className='li-footer'><li className='li-contact'>Trabaja aqui</li></Link>
                <Link className='li-footer'><li className='li-contact'>Que buscamos</li></Link>
            </ul>
        </div>
        <div className='help'>
            <h3 className='title-footer'>Ayuda</h3>
            <ul>
                <Link className='li-footer'><li className='li-contact'>Envios</li></Link>
                <Link className='li-footer'><li className='li-contact'>Preguntas frecuentes</li></Link>
                <Link className='li-footer'><li className='li-contact'>Devoluciones y garantias</li></Link>
            </ul>
        </div>
        <div className='follow'>
            <h3 className='title-footer'>Siguenos</h3>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}
