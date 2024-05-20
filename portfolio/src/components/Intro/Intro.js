import React from 'react'
import './intro.css'
import {Link} from 'react-scroll'
import bg from '../../assests/profile.png'
import btn from '../../assests/hire.png'


const Intro = () => {
  return (
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Harjobanpreet</span><br/>Web Developer</span>
            <p className="introPara">I am a skilled web developer with experience in creating <br/> full stack website usign MERN languages</p>
            <Link><button className="btn"><img src={btn} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
      </section>
  )
}

export default Intro
