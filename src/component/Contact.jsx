import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'


const Contact = () => {
  return (
    <div id='contact' class='min-h-screen  pt-36'>
      <h1 class='text-center text-6xl mb-10'>Contact</h1>
      <ContactForm />
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
      </div>
    </div>
  )
}

export default Contact