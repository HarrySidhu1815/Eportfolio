import React, { useRef } from 'react'
import './contact.css'
import Thd from '../../assests/thd.jpeg'
import Ufv from '../../assests/ufv1.jpeg'
import Chevron from '../../assests/chevron.jpeg'
import InstaLogo from '../../assests/insta.svg.png'
import GitHubLogo from '../../assests/github.webp'
import LinkedInLogo from '../../assests/linkedin.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs.sendForm('service_dvaqmht', 'template_gkn2kre', form.current, 'XouEI4fmsXxsxf4ew')
        .then((result)=>{
            console.log(result.text)
            e.target.reset();
            alert('Email Sent !')
        }, (error)=>{
            console.log(error.text)
        })
    }
  return (
    <section id='contactPage'>
        <div id="clients">
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
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email'name='your_email'/>
                <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
                <button className="submitBtn" type='submit' value='Send'>Submit</button>
                <div className="links">
                    <a href='https://www.instagram.com/harry_._sidhu/'><img src={InstaLogo} alt="Instagram" className="link" /></a>
                    <a href='https://github.com/HarrySidhu1815'><img src={GitHubLogo} alt="GitHub" className="link" /></a>
                    <a href='https://www.linkedin.com/in/harjobanpreet-singh-sidhu-13b80525b/'><img src={LinkedInLogo} alt="LinkedIn" className="link" /></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
