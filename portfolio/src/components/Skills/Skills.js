import React from 'react'
import './skills.css'
import SkillBar from './SkillBar'
import ReactImg from '../../assests/react.png'
import JSImg from '../../assests/JavaScript.png'
import MongoImg from '../../assests/mongodb.svg'
import Carousel from 'react-multi-carousel';
import JavaImg from '../../assests/java.png'
import NodeImg from '../../assests/node.png'
import PythonImg from '../../assests/python.png'
import CSSImg from '../../assests/css.png'
import PhpImg from '../../assests/php.png'
import MySqlImg from '../../assests/mysql.png'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
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

const Skills = () => {

    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I am skilled and passionate web developer interested in making MERN stack websites. I have strong understanding of web functionality and a keen eye for detail. I am proficient in HTML, CSS, JavaScript, React.js, Mongo DB, Node JS, as well as data analyst concepts such as machine learning, neural networks and deep learning.</span>
            <Carousel responsive={responsive} infinite={true} className='carousel-skills'>
                <div className="carousel-item-wrapper">
                    <div className="skillBars">
                        <SkillBar title={'React JS'} source={ReactImg} alt={'React JS'}>
                            Proficient in developing dynamic, responsive web applications using React, with experience in state management, component-based architecture, and integration with RESTful APIs.
                        </SkillBar>
                        <SkillBar title={'JavaScript'} source={JSImg} alt={'JavaScript'}>
                            JavaScript expertise includes developing dynamic and interactive web applications, utilizing modern frameworks and libraries to enhance user experience and functionality.
                        </SkillBar>
                        <SkillBar title={'Mongo DB'} source={MongoImg} alt={'Mongo DB'}>
                            MongoDB expertise includes designing and managing NoSQL databases, ensuring efficient data storage, retrieval, and scalability for dynamic applications.
                        </SkillBar>
                    </div>
                </div>
                <div className="carousel-item-wrapper">
                    <div className="skillBars">
                        <SkillBar title={'Node JS'} source={NodeImg} alt={'Node JS'}>
                            Node.js enables me to build scalable and efficient server-side applications, leveraging asynchronous programming and a rich ecosystem of libraries.
                        </SkillBar>
                        <SkillBar title={'Java'} source={JavaImg} alt={'Java'}>
                            Java proficiency includes designing and implementing scalable, high-performance applications with robust object-oriented programming principles.
                        </SkillBar>
                        <SkillBar title={'Python'} source={PythonImg} alt={'Python'}>
                            Skilled in using PyTorch for developing and deploying deep learning models, including image classification and natural language processing.
                        </SkillBar>
                    </div>
                </div>
                <div className="carousel-item-wrapper">
                    <div className="skillBars">
                        <SkillBar title={'PHP'} source={PhpImg} alt={'PHP'}>
                            PHP proficiency demonstrated through the development of dynamic and interactive web applications, showcasing strong problem-solving and coding skills.
                        </SkillBar>
                        <SkillBar title={'MySQL'} source={MySqlImg} alt={'MySQL'}>
                            MySQL proficiency demonstrated in designing efficient database schemas, optimizing queries, and ensuring data integrity within complex systems.
                        </SkillBar>
                        <SkillBar title={'CSS'} source={CSSImg} alt={'CSS'}>
                            CSS proficiency demonstrated through sleek, responsive design implementations enhancing user experience.
                        </SkillBar>
                    </div>
                </div>
            </Carousel>
        </section>
    )
}

export default Skills
