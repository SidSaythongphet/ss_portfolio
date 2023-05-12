import React, { useState } from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav class="fixed w-full z-20 top-0 left-0 bg-primary border-gray-200 dark:bg-gray-900 md:flex justify-center items-center">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button  
          type="button" 
          onClick={ () => setIsOpen(!isOpen) }
          class="inline-flex items-center p-2 ml-3 text-sm text-white-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" 
          aria-controls="navbar-default" 
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link activeClass="active" to="hero" spy={true} smooth={true} duration={500} onClick={ () => setIsOpen(!isOpen) }>
                <h1 class='font-bold hover:cursor-pointer hover:underline'>
                  HOME  
                </h1>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500} onClick={ () => setIsOpen(!isOpen) }>
                <h1 class='font-bold hover:cursor-pointer hover:underline'>
                  ABOUT ME
                </h1>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} onClick={ () => setIsOpen(!isOpen) }>
                <h1 class='font-bold hover:cursor-pointer hover:underline'>
                  SKILLS
                </h1>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} onClick={ () => setIsOpen(!isOpen) }>
                <h1 class='font-bold hover:cursor-pointer hover:underline'>
                  PROJECTS
                </h1>
              </Link>            
            </li>
            <li>
              <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} onClick={ () => setIsOpen(!isOpen) }>
                <h1 class='font-bold hover:cursor-pointer hover:underline'>
                  CONTACT  
                </h1>
              </Link>            
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar