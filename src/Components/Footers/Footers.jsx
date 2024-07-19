import React from 'react'
import './Footers.css'
import footer_logo from '../Assetes/code.png'

const Footers = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>Portfolio</p>
        </div>
        <ul className='footer-link'>
          <li>Skills</li>
          <li>Projects</li>
          <li download={footer_logo}>Resume</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      <div className='footer-social-icon'>
        <div className='footer-icon-container'>
        <i class="fa-brands fa-whatsapp"></i>
        </div>
        <div className='footer-icon-container'>
        <i class="fa-brands fa-instagram"></i>
        </div>
        <div className='footer-icon-container'>
        <i class="fa-brands fa-facebook"></i>
        </div>
        <div className='footer-icon-container'>
        <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>copyright @ 2024 All right reserve</p>
      </div>
    </div>

  )
}

export default Footers
