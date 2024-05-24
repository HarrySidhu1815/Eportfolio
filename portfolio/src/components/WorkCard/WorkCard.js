import React, { useState } from 'react'
import UniFlip from '../../assests/Uniflip.jpeg'
import SidhuMarket from '../../assests/sidhu.jpeg'
import Project from './Project'
import './workCard.css'

const projectData = [
    { source: UniFlip, title: 'UniFlip', description: 'UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.' },
    { source: UniFlip, title: 'UniFlip', description: 'UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.' },
    { source: SidhuMarket, title: 'SidhuMarket', description: 'UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.' },
    { source: SidhuMarket, title: 'SidhuMarket', description: 'UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.' },
    { source: UniFlip, title: 'UniFlip', description: 'UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.' },
];

const WorkCard = ({goBack}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % projectData.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + projectData.length) % projectData.length);
    };
    return (
        <>
            <h1 className='project-heading'>My Projects</h1>
            <div className="projects-carousel">
                {currentIndex > 0 && <button className="carousel-btn prev-btn" onClick={handlePrevious}>Back</button>}
                <div className="project-container">
                    {projectData.slice(currentIndex, currentIndex + 2).map((project, index) => (
                        <Project key={index} source={project.source} title={project.title}>
                            {project.description}
                        </Project>
                    ))}
                    {/* Handling case when slicing over the array length */}
                    {currentIndex + 2 > projectData.length && projectData.slice(0, (currentIndex + 2) % projectData.length).map((project, index) => (
                        <Project key={projectData.length + index} source={project.source} title={project.title}>
                            {project.description}
                        </Project>
                    ))}
                </div>
                {currentIndex < projectData.length - 2 && <button className="carousel-btn next-btn" onClick={handleNext}>Next</button>}
            </div>
            {/* <button className="worksBtn" onClick={goBack()}>See Portfolio</button> */}
        </>
    )
}

export default WorkCard
