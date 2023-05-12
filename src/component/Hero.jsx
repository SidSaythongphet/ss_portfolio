import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='hero' class='flex flex-col h-screen bg-secondary pt-28 px-12 md:px-48'>
      <h1 class='font-oxygen text-2xl sm:text-3xl pt-24 sm:pt-28'>HELLO THERE! I'M </h1>
      <h1 class='font-caveat text-5xl sm:text-6xl pt-5'>Sid Saythongphet</h1>
      <h1 class='font-oxygen text-lg sm:text-xl pt-5 pr-12'>A Software Developer based out of New York City. With a passion to solve problems and flex my creative mind, I am here to bring your ideas to life.</h1>
      <h1 class='font-oxygen text-lg sm:text-xl pt-20'>Interested in working together?</h1>
      <button class='bg-accent w-40 rounded-lg font-bold px-3 py-1'>              
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
          CONTACT  
        </Link> 
      </button>
    </div>
  )
}

export default Hero