import React from 'react'
import './works.css'
import Port1 from '../../assests/port1.jpg'

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
        <div className="worksImgs">
            <img src={Port1} alt="" className="worksImg" />
            <img src={Port1} alt="" className="worksImg" />
            <img src={Port1} alt="" className="worksImg" />
            <img src={Port1} alt="" className="worksImg" />
            <img src={Port1} alt="" className="worksImg" />
            <img src={Port1} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works
