import React from 'react'
import {Link} from 'react-scroll'

const Project = ({source, title, children}) => {
    return (
        <div className="project-card">
            <img src={source} alt="" className="projectImg" />
            <h2 className="project-title">
                {title}
            </h2>
            <div className="pro-detail">
                <p>{children}</p>
            </div>
            <div className="pro-btns">
                <Link className='btns'>
                    View
                </Link>
                <Link className='btns'>
                    Source
                </Link>
            </div>
        </div>
    )
}

export default Project
