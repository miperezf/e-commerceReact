/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>Vo1dshop</h1></Link>
        <ul className='menu'>
            <li><Link href="menu-link" to='/'>Inicio</Link></li>
            <li><Link href="menu-link" to='/productos'>Productos</Link></li>
            <li><Link href="menu-link" to='/productos/medias'>Medias</Link></li>
            <li><Link href="menu-link" to='/productos/pantalones'>Pantalones</Link></li>
            <li><Link href="menu-link" to='/productos/remeras'>Poleras</Link></li>
            <li><Link href="menu-link" to='/productos/buzos'>Buzos</Link></li>
            <li><Link href="menu-link" to='/nosotros'>Nosotros</Link></li>
            <li><Link href="menu-link" to='/contacto'>Contacto</Link></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default Navbar