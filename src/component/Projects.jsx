import React from 'react'

const Projects = () => {
  return (
    <div id='projects' class='flex flex-col min-h-screen pt-36'>
      <h1 class='text-center text-6xl mb-10 w-screen'>Projects</h1>
      <div class='grid grid-cols-3 h-96 px-32'>
        <div class='flex justify-center px-10'>
          <div class='h-full w-full bg-green-500'>
            <h1 class='text-center p-5'>Project Name</h1>
            <img class='h-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />  
          </div>
        </div>
        <div class='flex justify-center px-10'>
          <div class='h-full w-full bg-green-500'>
            <h1 class='text-center p-5'>Project Name</h1>
            <img class='h-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />  
          </div>
        </div>
        <div class='flex justify-center px-10'>
          <div class='h-full w-full bg-green-500'>
            <h1 class='text-center p-5'>Project Name</h1>
            <img class='h-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects