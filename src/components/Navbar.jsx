import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {

  return (
    <div>
        <div className="nav-container" id='con2tainer'>
            <div className="Biswajit">
                <div className="text" id='name'>
                    Biswajit Roy
                </div>
                
            </div>
            <div className="navbar">
                <ul>
                    <NavLink to="/"><li >Home</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    {/* <NavLink to="/portfolio"><li>Portfolio</li></NavLink> */}
                    <NavLink to="/contact"><li>Contact</li></NavLink>
                    {/* <NavLink to="/blog"><li>Blog</li></NavLink> */}
                </ul>
            </div>
            <div className="navIcons">
            <a href="https://www.facebook.com/profile.php?id=100010009088991" className="fa fa-facebook"> </a>
            <a href="https://twitter.com/Biswajitr022Roy" className="fa fa-twitter"> </a>
            <a href="https://www.linkedin.com/in/biswajit-roy-86354624a/" className="fa fa-linkedin"> </a>
            <a href="https://github.com/Biswajit06082002" className="fa fa-github"> </a>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar
