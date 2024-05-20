import React from 'react'
import './skills.css'
import SkillBar from './SkillBar'
import ReactImg from '../../assests/react.png'
import JSImg from '../../assests/JavaScript.png'
import MongoImg from '../../assests/mongodb.svg'

const Skills = () => {
  return (
      <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">I am skilled and passionate web developer interested in making MERN stack websites. I have strong understanding of web functionality and a keen eye for detail. I am proficient in HTML, CSS, JavaScript, React.js, Mongo DB, Node JS, as well as data analyst concepts such as machine learning, neural networks and deep learning.</span>
        <div className="skillBars">
            <SkillBar title={'React JS'} source={ReactImg} alt={'React JS'}>
                React JS is jnekwjnqkjrnbkjnqerjnr Lorem !
            </SkillBar>
            <SkillBar title={'JavaScript'} source={JSImg} alt={'JavaScript'}>
                JavaScript is jnekwjnqkjrnbkjnqerjnr Lorem !
            </SkillBar>
            <SkillBar title={'Mongo DB'} source={MongoImg} alt={'Mongo DB'}>
                Mongo DB is jnekwjnqkjrnbkjnqerjnr Lorem !
            </SkillBar>
        </div>
      </section>
  )
}

export default Skills
