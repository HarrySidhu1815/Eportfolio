import React from 'react'
import {Link} from 'react-scroll'

const Project = ({source, title, children, view, gitHub}) => {
    let hideView = {'visibility': 'none'}
    if(!view){
        hideView = {
            'visibility': 'hidden'
        }
    }
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
                <Link className='btns' style={hideView}>
                    View
                </Link>
                <a href={gitHub}>
                <button className='btns'>
                    Source
                </button>
                </a>
            </div>
        </div>
    )
}

export default Project
