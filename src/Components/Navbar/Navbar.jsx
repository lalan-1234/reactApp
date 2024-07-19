import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assetes/code.png';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] =useState("Home")

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo}  alt=''/>
            <p>Full Stack Web Developer</p>
        </div>

        <ul className='nav-menu'>
  <li onClick={() => setMenu("Home")}>
    <Link  to="/" style={{textDecoration: 'none', color:'white'}}>Home</Link>
    {menu === "Home" ? <hr/> : <></>}
  </li>
  <li onClick={() => setMenu("About")}>
    <Link to="/About" style={{textDecoration: 'none', color:'white'}}>About</Link>
    {menu === "About" ? <hr/> : <></>}
  </li>
  <li onClick={() => setMenu("Skills")}>
    <Link to="/Skills" style={{textDecoration: 'none',color:'white'}}>Skills</Link>
    {menu === "Skills" ? <hr/> : <></>}
  </li>
  <li onClick={() => setMenu("Projects")}>
    <Link to="/Projects" style={{textDecoration: 'none', color:'white'}}>Projects</Link>
    {menu === "Projects" ? <hr/> : <></>}
  </li>
  <li onClick={() => setMenu("Blogs")}>
    <Link to="/Blogs" style={{textDecoration: 'none', color:'white'}}>Blogs</Link>
    {menu === "Blogs" ? <hr/> : <></>}
  </li>
  <li onClick={() => setMenu("Contact")}>
    <Link to="/Contact" style={{textDecoration: 'none',color:'white' }}>Contact</Link>
    {menu === "Contact" ? <hr/> : <></>}
  </li>
</ul>
      
    </div>
  )
}

export default Navbar
