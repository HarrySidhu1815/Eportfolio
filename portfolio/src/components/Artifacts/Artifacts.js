import React, { useState } from 'react'
import Artifact1 from '../../assests/Resume.png'
import Artifact2 from '../../assests/transcript.png'
import Artifact3 from '../../assests/certificate.jpeg'
import Artifact4 from '../../assests/ref1.jpg'
import Artifact5 from '../../assests/ref2.jpg.webp'
import Artifact6 from '../../assests/king.jpeg'
import Resume from '../../assests/Resume.pdf'
import Transcript from '../../assests/Transcript.pdf'
import Certificate from '../../assests/certificate.pdf'
import Ref1 from '../../assests/ref1.pdf'
import Ref2 from '../../assests/ref2.pdf'
import WorkCard from '../WorkCard/WorkCard'
import Carousel from 'react-multi-carousel';

import './artifacts.css'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Artifacts = () => {
    const [showProjects, setShowProjects] = useState(false);

    const handleSeeMore = () => {
        setShowProjects(true);
    };

    const handleGoBack = (e) => {
        setShowProjects(e);
    };
    return (
        <section id='artifacts'>
            {!showProjects ? (
                <>
                    <h2 className="artifactsTitle">My Artifacts</h2>
                    <span className="artifactssDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
                    <div className="artifactsImgs">
                    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive} infinite={true} className='carousel-artifacts'>
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
                        <div className="artifactsImgContainer">
                            <img src={Artifact4} alt="ReferenceLetter1" className="artifactsImg" />
                            <a href={Ref1} download="ReferenceLetter1.pdf">
                                <button className="downloadButton">Download</button>
                            </a>
                            <p>
                                Reference letter from Professor Chelsey at the UFV, highlighting my academic achievements and dedication to excellence
                            </p>
                        </div>
                        <div className="artifactsImgContainer">
                            <img src={Artifact5} alt="ReferenceLetter2" className="artifactsImg" />
                            <a href={Ref2} download="ReferenceLetter2.pdf">
                                <button className="downloadButton">Download</button>
                            </a>
                            <p>
                                Reference letter from the owner of Chevron, praising my exceptional work and dedication.
                            </p>
                        </div>
                        <div className="artifactsImgContainer">
                            <img src={Artifact6} alt="kingphoto" className="artifactsImg" />
                            <a href={Artifact6} download="photo.jpeg">
                                <button className="downloadButton">Download</button>
                            </a>
                            <p>
                                Got the King Title for playing the Cashier Olypics at Regional Level at Home Depot.
                            </p>
                        </div>
                        </Carousel>
                    </div>
                    <button className="worksBtn" onClick={handleSeeMore}>See Projects</button>
                </>
            ) : (<WorkCard goBack={handleGoBack} />)}
        </section>
    )
}

export default Artifacts
