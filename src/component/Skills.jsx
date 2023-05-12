import React from 'react'

const Skills = () => {
  return (
    <div id='skills' class='flex flex-col min-h-screen pt-24 md:pt-36 bg-secondary'>
      <h1 class='text-center text-4xl md:text-6xl mb-10 w-screen'>Skills</h1>
      <div class='self-center w-4/5 border-t-2 border-text2 pb-5'></div>
      <div class='flex justify-center'>
        <div class='md:grid grid-cols-3 gap-4 w-[50%] md:w-[75%] justify-items-center'>
          <div class='flex justify-center items-center h-36 w-full bg-slate-50 mt-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />  
          </div>
          <div class='flex justify-center items-center h-36 w-full bg-slate-50 mt-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />  
          </div>
          <div class='flex justify-center items-center h-36 w-full bg-slate-50 mt-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />  
          </div>
          <div class='flex justify-center items-center h-36 w-full bg-slate-50 mt-2 rounded-2xl'>
            <img class='absolute h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />  
          </div>
          <div class='flex justify-center items-center h-36 w-full bg-slate-50 mt-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />  
          </div>
          <div class='flex justify-center items-center h-36 w-full bg-slate-50 mt-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />  
          </div>
          <div class='flex justify-center items-center h-36 w-full bg-slate-50 mt-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />  
          </div>
          <div class='flex justify-center items-center h-36 w-full bg-slate-50 mt-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" />  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills