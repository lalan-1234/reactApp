import React from 'react'
import './Projects.css'
import eccomerce_image from '../Assetes/ecommerce.png'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>PROJECTS</h1>
      <hr/>
      <div className='ecommerce-project'>
        <h1>E-Commerce Shoping App</h1>
        <img src={eccomerce_image} alt=''/>   
        <button className='btn'>ProJect Details</button>
        <div className='source-project'>
          <div className='see-live'>
          <button>See Live</button>
          </div>
          <p>10-July-2024</p>
          <div className='see-live'>
            <button>source code</button>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Projects
