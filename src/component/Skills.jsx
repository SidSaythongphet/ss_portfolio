import React from 'react'

const Skills = () => {
  return (
    <div id='skills' class='min-h-screen pt-36'>
      <h1 class='text-center text-6xl mb-10'>Skills</h1>
      <div class='w-screen border-t-2 border-white'></div>
      <div class='flex justify-center'>
        <div class='grid grid-cols-3 gap-4 w-[60%] justify-items-center'>
          <div class='flex justify-center items-center h-36 w-60 bg-slate-50 m-2 rounded-2xl'>
            <img class='absolute h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />  
            <h1 class='absolute font-extrabold text-3xl text-transparent hover:text-black'>HTML</h1>
          </div>
          <div class='flex justify-center items-center h-36 w-60 bg-slate-50 m-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />  
            <h1 class='absolute font-extrabold text-3xl text-transparent hover:text-black'>CSS</h1>
          </div>
          <div class='flex justify-center items-center h-36 w-60 bg-slate-50 m-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />  
            <h1 class='absolute font-extrabold text-3xl text-transparent hover:text-black'>JavaScript</h1>
          </div>
          <div class='flex justify-center items-center h-36 w-60 bg-slate-50 m-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />  
            <h1 class='absolute font-extrabold text-3xl text-transparent hover:text-black'>PostgreSQL</h1>
          </div>
          <div class='flex justify-center items-center h-36 w-60 bg-slate-50 m-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />  
            <h1 class='absolute font-extrabold text-3xl text-transparent hover:text-black'>React</h1>
          </div>
          <div class='flex justify-center items-center h-36 w-60 bg-slate-50 m-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" />  
            <h1 class='absolute font-extrabold text-3xl text-transparent hover:text-black'>Ruby on Rails</h1>
          </div>
          <div class='flex justify-center items-center h-36 w-60 bg-slate-50 m-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />  
            <h1 class='absolute font-extrabold text-3xl text-transparent hover:text-black'>Ruby</h1>
          </div>
          <div class='flex justify-center items-center h-36 w-60 bg-slate-50 m-2 rounded-2xl'>
            <img class='h-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />  
            <h1 class='absolute font-extrabold text-3xl text-transparent hover:text-black'>Tailwindcss</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills