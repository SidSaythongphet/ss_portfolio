import React from 'react'

const Projects = () => {
  return (
    <div id='skills' class='flex flex-col min-h-screen pt-24 md:pt-36'>
      <h1 class='text-center text-4xl md:text-6xl mb-10 w-screen'>Projects</h1>
      <div class='self-center w-4/5 border-t-2 border-text2 pb-5'></div>
      <div class='flex justify-center px-10 md:grid md:grid-cols-3'>
        <div class='relative h-full w-full md:col-start-2'>
          <video src="src/assets/Plannr App - Made with Clipchamp.mp4" autoPlay loop controls/>
          <div class='flex absolute inset-x-0 bottom-[-20] justify-around'>
            <h1 class='text-xl font-bold'>PLANNR APP</h1>
            <a href='https://plannr-app.onrender.com/' target='_blank' rel="noopener noreferrer">
              <h1 class='text-xl underline'> Website </h1>
            </a>  
            <a href='https://github.com/SidSaythongphet/phase-5-family-app' target='_blank' rel="noopener noreferrer">
              <h1 class='text-xl underline'>Github</h1>
            </a>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects