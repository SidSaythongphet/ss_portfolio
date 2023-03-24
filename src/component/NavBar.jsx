import React from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <div className='flex justify-center items-center gap-10 fixed top-0 h-20 w-screen bg-black'>
      <Link activeClass="active" to="hero" spy={true} smooth={true} duration={500}>
        <h1 class='font-bold hover:cursor-pointer hover:underline'>
          HOME  
        </h1>
      </Link>
      <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500}>
        <h1 class='font-bold hover:cursor-pointer hover:underline'>
          ABOUT ME
        </h1>
      </Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}>
        <h1 class='font-bold hover:cursor-pointer hover:underline'>
          SKILLS
        </h1>
      </Link>
      <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
        <h1 class='font-bold hover:cursor-pointer hover:underline'>
          PROJECTS
        </h1>
      </Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
        <h1 class='font-bold hover:cursor-pointer hover:underline'>
          CONTACT  
        </h1>
      </Link>
    </div>
  )
}

export default NavBar