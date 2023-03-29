import React from 'react'

const AboutMe = () => {
  return (
    <div id='aboutMe' class='flex flex-col min-h-screen pt-36'>
      <h1 class='text-center text-6xl mb-10 w-screen'>About Me</h1>
      <div class='self-center w-4/5 border-t-2 border-white pb-5'></div>
      <div class='grid sm:grid-cols-3'>
        <div class='col-span-2 text-center px-40'>
          <h1 class='text-xl'>Hello</h1>
          <h1 class='pt-5'>My name is Sid</h1>
          <h1 class='pt-5'>Entry-level software engineer with experience working in full-stack development with proficiency in HTML, CSS, JavaScript, React, Ruby, Rails, and SQL. I possess years of creative, collaborative, and client-focused work via the health and wellness industry that I bring to an exciting new career in technology. I am passionate about learning new skills and taking pride in my work.</h1>
        </div>
        <div class="w-96 h-96">
          <img class="rounded-full shadow-sm" src="src/assets/IMG_4551.JPG" alt="user image" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe