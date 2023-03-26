import React from 'react'

const Projects = () => {
  return (
    <div id='projects' class='flex flex-col min-h-screen pt-36'>
      <h1 class='text-center text-6xl mb-10 w-screen'>Projects</h1>
      <div class='grid grid-cols-3 h-96 px-32'>
        <div class='flex justify-center px-10'>
          <div class='relative h-full w-full bg-green-500 rounded-2xl'>
            <h1 class='flex absolute inset-x-0 top-5 justify-center text-xl'>Project Name</h1>
            <div class='flex absolute inset-x-0 bottom-5 justify-center'>
              <img class='h-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />  
            </div>
          </div>
        </div>
        <div class='flex justify-center px-10'>
          <div class='relative h-full w-full bg-green-500 rounded-2xl'>
            <h1 class='flex absolute inset-x-0 top-5 justify-center text-xl'>Project Name</h1>
            <div class='flex absolute inset-x-0 bottom-5 justify-center'>
              <img class='h-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />  
            </div>
          </div>
        </div>
        <div class='flex justify-center px-10'>
          <div class='relative h-full w-full bg-green-500 rounded-2xl'>
            <h1 class='flex absolute inset-x-0 top-5 justify-center text-xl'>Project Name</h1>
            <div class='flex absolute inset-x-0 bottom-5 justify-center'>
              <img class='h-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects