import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assests/logo.png'
import {Link} from 'react-scroll'
import contactImage from '../../assests/contact.png.webp'
import menu from '../../assests/menu.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
      <nav className='navbar'>
        <img className='logo' src={logo} alt='Logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuList'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuList'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-40} duration={500} className='desktopMenuList'>Portfolio</Link>
            <Link activeClass='active' to='artifacts' spy={true} smooth={true} offset={-30} duration={500} className='desktopMenuList'>Artifacts</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuList'>Clients</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImage} alt='' className='desktopMenuImg' />
            Contact Me
        </button>
        <img className='mobMenu' src={menu} alt='Menu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{'display': showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}   onClick={()=>setShowMenu(false)} className='listItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}   onClick={()=>setShowMenu(false)} className='listItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} duration={500}   onClick={()=>setShowMenu(false)} className='listItem'>Portfolio</Link>
            <Link activeClass='active' to='artifacts' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuList'>Artifacts</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)} className='listItem'>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)} className='listItem'>Contact</Link>
        </div>
      </nav>   
  )
}

export default Navbar
