import React from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <div className='flex justify-center items-center gap-10 fixed top-0 h-20 w-screen bg-black'>
      <Link activeClass="active" to="hero" spy={true} smooth={true} duration={500}>
        <h1 >
          HOME  
        </h1>
      </Link>
      <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500}>
        ABOUT ME
      </Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}>
        SKILLS
      </Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
        CONTACT
      </Link>
    </div>
  )
}

export default NavBar