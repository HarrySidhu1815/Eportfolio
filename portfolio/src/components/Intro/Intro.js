import React, { useState } from 'react'
import './intro.css'
import {Link} from 'react-scroll'
import bg from '../../assests/profile.png'
// import btn from '../../assests/hire.png'


const Intro = () => {
  const [showMission, setShowMission] = useState(false)
  return (
    <section id="intro">
      {!showMission ? (<><div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Harjobanpreet</span><br/>Web Developer</span>
            <p className="introPara">I am a skilled web developer with experience in creating <br/> full stack website usign MERN languages</p>
            {/* <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className="btn">View Mission</button></Link> */}
            <Link><button className='btn' onClick={() => {
              setShowMission(true)
            }}>View Mission</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" /></>) : <div className="missionContent">
            <span className="missionTitle">MISSION</span>
            <span className="mission">Empowering businesses by providing innovative digital solutions, ensuring accessibility and efficiency for everyone, so they can thrive in the digital age.</span>
            <p className="rationale">My mission statement focuses on fostering innovation and sustainable development, closely aligning with the United Nations Sustainable Development Goal 9 (Industry, Innovation, and Infrastructure). By providing cutting-edge web development solutions, I aim to enhance businesses' digital presence, making technology accessible and efficient for all. This mission supports sustainable industrialization and promotes innovation, helping businesses to adapt, grow, and succeed in the rapidly evolving digital landscape. In doing so, I contribute to building resilient infrastructure and fostering innovation, which are essential for long-term economic growth and societal advancement.</p>
            <Link><button className='btn' onClick={() => {
              setShowMission(false)
            }}>Hide Mission</button></Link>
        </div>}
      </section>
      
  )
}

export default Intro
