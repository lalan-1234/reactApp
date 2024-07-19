import React from 'react'
import './Skills.css'
import git_image from '../Assetes/git.png'
import firebase_image from '../Assetes/firebase.png'
import mongodb_image from '../Assetes/mongodb.png'
import maryadb_image from '../Assetes/maryadb.png'
import material_image from '../Assetes/materialui.png'
import Bootstrap_image from '../Assetes/bootstrap.png'
import Tailwind_image from '../Assetes/tailwind.png'
import reactbootstrap_image from '../Assetes/reactbootstrap.png'
import netelfy_image from '../Assetes/netelify.png'
import github_image from '../Assetes/git hub.png'
import vercel_image from '../Assetes/varcel.png'
import Heroku_image from '../Assetes/heroku.png'
import html_image from '../Assetes/html.png'
import css_image from '../Assetes/css.png'
import javascript_image from '../Assetes/javascript.png'
import react_image from '../Assetes/react.png'
import redux_image from '../Assetes/redux.png'



const Skills = () => (
  <div className='skills'>
    <h1>Tech Skills</h1>
    <hr />
    <div className='skills-box'>
      <div className='database-version'>
    <div className='control-git'>
      <h1>Version Control</h1>
      <hr />
      <div className='git-section'>
        <img src={git_image} alt='' />                   
        <p>GIT</p>
      </div>
    </div>
    <div className='database-section'>
      <h1>Database</h1>
      <hr/>
      <div className='firebase'>
        <img src={firebase_image} alt='' />
        <p>firebase Database</p>
      </div>
      <div className='firebase'>
        <img src={firebase_image} alt='' />
        <p>Cloud FireStore</p>
      </div>
      <div className='firebase'>
        <img src={mongodb_image} alt='' />
        <p>MongoDB</p>
      </div>
      <div className='firebase'>
        <img src={maryadb_image} alt='' />
        <p>MaryaDB Database</p>
      </div>
    </div>
    </div> 
    <div className='database-section'>
      <h1>Frameworks</h1>
      <hr/>
      <div className='firebase'>
        <img src={material_image} alt='' />
        <p>Material Ui</p>
      </div>
      <div className='firebase'>
        <img src={Bootstrap_image} alt='' />
        <p>Bootstrap</p>
      </div>
      <div className='firebase'>
        <img src={Tailwind_image} alt='' />
        <p>Tailwind</p>
      </div>
      <div className='firebase'>
        <img src={reactbootstrap_image} alt='' />
        <p>Reactbootstrap</p>
      </div> 
    </div>
    <div className='database-section'>
      <h1>Hosting Plateforms</h1>
      <hr/>
      <div className='firebase'>
        <img src={netelfy_image} alt='' />
        <p>Netlify</p>
      </div>
      <div className='firebase'>
        <img src={github_image} alt='' />
        <p>Github Image</p>
      </div>
      <div className='firebase'>
        <img src={vercel_image} alt='' />
        <p>Vercel</p>
      </div>
      <div className='firebase'>
        <img src={Heroku_image} alt='' />
        <p>HeroKu</p>
      </div> 
    </div>

    <div className='database-section'>
      <h1>Scripting Language</h1>
      <hr/>
      <div className='firebase'>
        <img src={html_image} alt='' />
        <p>HTML5</p>
      </div>
      <div className='firebase'>
        <img src={css_image} alt='' />
        <p>CSS</p>
      </div>
      <div className='firebase'>
        <img src={javascript_image} alt='' />
        <p>Javascript </p>
      </div>
      <div className='firebase'>
        <img src={react_image} alt='' />
        <p>React JS</p>
      </div> 
 
      <div className='firebase'>
        <img src={redux_image} alt='' />
        <p>Redux</p>
      </div> 
    </div>
    </div>
  </div>
)

export default Skills
