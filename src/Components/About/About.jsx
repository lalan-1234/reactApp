import React from 'react'
import './About.css'
import image from '../Assetes/webdev.jpg'

const About = () => {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <hr/>
      <div className='about-section'>
      <img src={image} alt=''/>
      <div className='About-paragrapgh-section'>
      <div className='About-para'>
        <h2>Full Stack Developer</h2>
        <p> Proficient Full Stack Developer specializing in <span>MERN Stacks</span> dedicated to develivering high perfomance and respomsive web Application  </p>
        <p>I am enthusuiastic about taking on challenging project actively contrubuting to success to organization while</p>
        <p>Staying update with emergin Technology to ensure exceptional Wev Development</p>
      </div>
      <div className='About-para'>
        <p>I am passionate programmer and a learner, born and brought up in</p>
        <p>Bihar.Currently, I am enrolled in  Web Development certification Course.</p>
        <p>Program "Conducted by AlmaBetter.</p>
      </div>
      <div className='About-para'>
        <p>I love learning about new technologies, what problems are they</p>
        <p>solving and How can I use them to build better and scalable products.</p>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default About
