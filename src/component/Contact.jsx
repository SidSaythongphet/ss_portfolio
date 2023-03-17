import React from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div id='contact' class='min-h-screen  pt-28'>
      <h1 class='text-center text-6xl mb-10'>Contact</h1>
      <div class='flex justify-center'>
        <div class='flex justify-center items-center h-28 w-44 bg-slate-50 m-2 rounded-2xl hover:mt-1'>
          <a href='https://www.linkedin.com/in/sid-saythongphet/' target='_blank' rel="noopener noreferrer">
            <img class='h-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />  
          </a>
        </div>
        <div class='flex justify-center items-center h-28 w-44 bg-slate-50 m-2 rounded-2xl hover:mt-1'>
          <a href='https://github.com/SidSaythongphet' target='_blank' rel="noopener noreferrer">
            <img class='h-16' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />  
          </a>
        </div>
        <div class='flex justify-center items-center h-28 w-44 bg-slate-50 m-2 rounded-2xl hover:mt-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-16 h-16">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Contact