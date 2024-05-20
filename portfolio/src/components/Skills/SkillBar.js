import React from 'react'

const SkillBar = ({source, alt, title, children}) => {
  return (
    <div className="skillBar">
        <img src={source} alt={alt} className="skillBarImg" />
        <div className="skillBarText">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    </div>
  )
}

export default SkillBar
