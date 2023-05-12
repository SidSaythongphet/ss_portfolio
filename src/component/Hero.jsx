import React from 'react'

const Hero = () => {
  return (
    <div id='hero' class='flex flex-col h-screen bg-secondary justify-start pt-28'>
      <h1 class='font-oxygen text-center text-4xl sm:text-4xl pt-24 sm:pt-28'>HELLO THERE! I'M <span class='font-caveat text-5xl sm:text-6xl pt-20'>Sid Saythongphet</span></h1>
      <h1 class='font-oxygen text-center text-2xl sm:text-2xl pt-10'>A Software Developer based out of New York City.</h1>
      <h1 class='font-oxygen text-center text-2xl sm:text-2xl pt-20'>Interested in working together?</h1>
      <button class='bg-cyan-800 w-40 rounded-lg px-3 py-1'>Contact Me!</button>
    </div>
  )
}

export default Hero