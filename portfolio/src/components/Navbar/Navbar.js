import React from 'react'
import './navbar.css'
import logo from '../../assests/logo.png'
import {Link} from 'react-scroll'
import contactImage from '../../assests/contact.png.webp'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <img className='logo' src={logo} alt='Logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuList'>Home</Link>
            <Link className='desktopMenuList'>About</Link>
            <Link className='desktopMenuList'>Portfolio</Link>
            <Link className='desktopMenuList'>Clients</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={contactImage} alt='' className='desktopMenuImg' />
            Contact Me
        </button>
      </nav>   
    </div>
  )
}

export default Navbar
