import React from 'react'
import UniFlip from '../../assests/Uniflip.jpeg'
import Project from './Project'
import './workCard.css'

const WorkCard = () => {
  return (
    <>
        <h1 className='project-heading'>My Projects</h1>
        <div className="project-container">
            <Project source={UniFlip} title={'UniFlip'}>UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.</Project>
            <Project source={UniFlip} title={'UniFlip'}>UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.</Project>
        </div>

    </>
  )
}

export default WorkCard
