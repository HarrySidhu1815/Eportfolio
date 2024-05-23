import React from 'react'
import Artifact1 from '../../assests/Resume.png'
import Artifact2 from '../../assests/transcript.png'
import Artifact3 from '../../assests/certificate.jpeg'
import Resume from '../../assests/Resume.pdf'
import Transcript from '../../assests/Transcript.pdf'
import Certificate from '../../assests/certificate.pdf'


import './artifacts.css'

const Artifacts = () => {
    return (
        <section id='artifacts'>
            <h2 className="artifactsTitle">My Artifacts</h2>
            <span className="artifactssDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
            <div className="artifactsImgs">
                <div className="artifactsImgContainer">
                    <img src={Artifact1} alt="Resume" className="artifactsImg" />
                    <a href={Resume} download="Resume.pdf">
                        <button className="downloadButton">Download</button>
                    </a>
                    <p>
                        My resume showcasing my dedication to pixel-perfect detail and helping businesses achieve their goals.
                    </p>
                </div>
                <div className="artifactsImgContainer">
                    <img src={Artifact2} alt="Transcript" className="artifactsImg" />
                    <a href={Transcript} download="Transcript.pdf">
                        <button className="downloadButton">Download</button>
                    </a>
                    <p>
                        My transcript highlighting my academic achievements and commitment to excellence.
                    </p>
                </div>
                <div className="artifactsImgContainer">
                    <img src={Artifact3} alt="Certificate" className="artifactsImg" />
                    <a href={Certificate} download="Certificate.pdf">
                        <button className="downloadButton">Download</button>
                    </a>
                    <p>
                        My Full Stack Web Developer certificate, demonstrating my proficiency in building comprehensive web applications.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Artifacts
