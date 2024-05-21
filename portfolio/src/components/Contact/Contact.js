import React from 'react'
import './contact.css'
import Thd from '../../assests/thd.png'
import Ufv from '../../assests/ufv.jpeg'
import Chevron from '../../assests/chevron.png'
import InstaLogo from '../../assests/insta.svg.png'
import GitHubLogo from '../../assests/github.webp'
import LinkedInLogo from '../../assests/linkedin.png'

const Contact = () => {
  return (
    <section id='contactPage'>
        <div className="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Thd} alt="" className="clientImg" />
                <img src={Ufv} alt="" className="clientImg" />
                <img src={Chevron} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunity.</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder='Your Name'/>
                <input type="email" className="email" placeholder='Your Email'/>
                <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
                <button className="submitBtn" type='submit' value='Send'>Submit</button>
                <div className="links">
                    <img src={InstaLogo} alt="Instagram" className="link" />
                    <img src={GitHubLogo} alt="GitHub" className="link" />
                    <img src={LinkedInLogo} alt="LinkedIn" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
