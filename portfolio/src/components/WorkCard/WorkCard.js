import React from 'react'
import UniFlip from '../../assests/Uniflip.jpeg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SidhuMarket from '../../assests/sidhu.jpeg'
import Project from './Project'
import './workCard.css'

// const projectData = [
//     { source: UniFlip, title: 'UniFlip', description: 'UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.' },
//     { source: UniFlip, title: 'UniFlip', description: 'UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.' },
//     { source: SidhuMarket, title: 'SidhuMarket', description: 'UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.' },
//     { source: SidhuMarket, title: 'SidhuMarket', description: 'UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.' },
//     { source: UniFlip, title: 'UniFlip', description: 'UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.' },
// ];
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const WorkCard = ({goBack}) => {
    return (
        <>
            <h1 className='project-heading'>My Projects</h1>
                <div className="project-container">
                    <Carousel responsive={responsive} infinite={true} className='carousel'> 
                        <Project source={SidhuMarket} title={'Sidhu Market'}>UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.</Project>
                        <Project source={UniFlip} title={'Sidhu Market'}>UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.</Project>
                        <Project source={SidhuMarket} title={'Sidhu Market'}>UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.</Project>
                        <Project source={UniFlip} title={'Sidhu Market'}>UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.</Project>
                    </Carousel>
                </div>
        </>
    )
}

export default WorkCard
