import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Project from './Project'
import SidhuMarket from '../../assests/sidhu.jpeg'
import UniFlip from '../../assests/Uniflip.jpeg'
import Movie from '../../assests/movie.jpeg'
import chat from '../../assests/chat.jpeg'
import investment from '../../assests/investment.jpeg'
import amazon from '../../assests/amazon.jpeg'
import tictactoe from '../../assests/tictactoe.jpeg'
import countdown from '../../assests/countdown.jpeg'
import todo from '../../assests/todo.jpeg'

import './workCard.css'

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
                        <Project source={UniFlip} title={'UniFlip'}>UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.</Project>
                        <Project source={SidhuMarket} title={'Sidhu Market'}>Sidhu Market is an e-commerce website for electronic gadgets, built with HTML, CSS, JavaScript, and Node.js, featuring a REST API and a functional, animated front end using React.</Project>
                        <Project source={Movie} title={'Movie Center'}>Developed a full-stack MVC website for booking movies with CRUD functionality, secured with email verification and session-based authorization, using HTML, CSS, JavaScript, PHP, and MySQL, hosted on Cyclic.</Project>
                        <Project source={todo} title={'To Do App'}>Developed using JavaScript, HTML, and CSS, To Do is a website that utilizes DOM structure to manage user tasks, allowing users to add, remove, and mark tasks as done.</Project>
                        <Project source={tictactoe} title={'Tic-Tac-Toe'}>Developed using React, JavaScript, HTML, and CSS, this two-player Tic Tac Toe game employs useState, state lifting, props, and various components for an interactive experience.</Project>
                        <Project source={amazon} title={'Amazon Clone'}>Developed using HTML and CSS, the Amazon Clone utilizes flexbox, grid, and various CSS styling methods to practice and enhance CSS skills.</Project>
                        <Project source={countdown} title={'Countdown Game'}>UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.</Project>
                        <Project source={chat} title={'Chat Application'}>UniFlip is a React-based marketplace app for selling used school supplies, featuring real-time chat with Node.js and Socket.io. As group leader, I utilized software engineering principles, including data modeling and design patterns, to develop this project.</Project>
                        <Project source={investment} title={'Investment Calculator'}>Sidhu Market is an e-commerce website for electronic gadgets, built with HTML, CSS, JavaScript, and Node.js, featuring a REST API and a functional, animated front end using React.</Project>
                    </Carousel>
                </div>
                <button className="portfolioBtn" onClick={()=>goBack(false)}>See Artifacts</button>
        </>
    )
}

export default WorkCard
