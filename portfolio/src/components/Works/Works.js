import React from 'react'
import './works.css'
import Port1 from '../../assests/port1.jpg'
import Port2 from '../../assests/decision.jpeg'
import Port3 from '../../assests/team.jpeg'
import Port4 from '../../assests/comm.jpeg'
import Port5 from '../../assests/probelm.avif'
import Port6 from '../../assests/flexible.jpeg'

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
      <div className="worksImgs">
        <div className='imgwrapper'>
          <img src={Port1} alt="" className="worksImg" />
          <div className='softskillDesc'>
            <h2 className='softskillTitle'>Punctuality</h2>
            Demonstrated punctuality by consistently arriving on time for shifts and meeting all deadlines, contributing to efficient store operations.</div>
        </div>  
        <div className='imgwrapper'>
        <img src={Port2} alt="" className="worksImg" />
          <div className='softskillDesc'>
            <h2 className='softskillTitle'>Decision Making</h2>
            Demonstrated ability to make informed and effective decisions to optimize product placement and enhance sales performance.        </div>  
        </div>
        <div className='imgwrapper'>
        <img src={Port3} alt="" className="worksImg" />
          <div className='softskillDesc'>
            <h2 className='softskillTitle'>Teamwork</h2>
            Collaborated effectively with cross-functional teams to achieve store goals and enhance overall performance.
                    </div>  
        <div className='imgwrapper'>
        <img src={Port4} alt="" className="worksImg" />
          <div className='softskillDesc'>
            <h2 className='softskillTitle'>Communication</h2>
            Excellent verbal and written communication skills, effectively interacting with customers, colleagues, and management to enhance collaboration and customer satisfaction.        
          </div>  
        <div className='imgwrapper'>
        <img src={Port5} alt="" className="worksImg" />
          <div className='softskillDesc'>
            <h2 className='softskillTitle'>Problem Solving</h2>
            Effectively resolve inventory discrepancies and customer issues with proactive and creative solutions.        </div>  
        <div className='imgwrapper'>
        <img src={Port6} alt="" className="worksImg" />
          <div className='softskillDesc'>
            <h2 className='softskillTitle'>Flexible</h2>
            Adaptable and flexible, able to efficiently handle changing priorities and diverse tasks in a fast-paced retail environment.        </div>     
      </div>
    </section>
  )
}

export default Works
