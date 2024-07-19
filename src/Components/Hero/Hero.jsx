import React from 'react'
import Home from '../Pages/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'

const Hero = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <Contact/>
    </div>
  )
}

export default Hero
