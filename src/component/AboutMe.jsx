import React from 'react'

const AboutMe = () => {
  return (
    <div id='aboutMe' class='flex flex-col min-h-screen pt-36'>
      <h1 class='text-center text-6xl mb-10 w-screen'>About Me</h1>
      <div class='grid grid-cols-3'>
        <div class='col-span-2 text-center'>
          <h1 class='text-xl'>Hello</h1>
          <h1>My name is Sid</h1>
        </div>
        <div class="relative w-96 h-96">
          <img class="rounded-full shadow-sm" src="src/assets/IMG_4551.JPG" alt="user image" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe