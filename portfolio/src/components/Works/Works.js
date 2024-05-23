import React, { useState } from 'react'
import './works.css'
import Port1 from '../../assests/port1.jpg'
import Port2 from '../../assests/decsion.jpeg'
import Port3 from '../../assests/team.jpeg'
import Port4 from '../../assests/comm.jpeg'
import Port5 from '../../assests/solve.jpeg'
import WorkCard from '../WorkCard/WorkCard'

const Works = () => {
  const [showProjects, setShowProjects] = useState(false);

  const handleSeeMore = () => {
    setShowProjects(true);
  };

  const handleGoBack = () => {
    setShowProjects(false);
  };
  return (
    <section id="works">
        {!showProjects ? (
        <>
          <h2 className="worksTitle">My Portfolio</h2>
          <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
          <div className="worksImgs">
            <img src={Port1} alt="" className="worksImg" />
            <img src={Port2} alt="" className="worksImg" />
            <img src={Port3} alt="" className="worksImg" />
            <img src={Port4} alt="" className="worksImg" />
            <img src={Port5} alt="" className="worksImg" />
            <img src={Port1} alt="" className="worksImg" />
          </div>
          <button className="worksBtn" onClick={handleSeeMore}>See Projects</button>
        </>
      ) : (<WorkCard/>)}
    </section>
  )
}

export default Works
