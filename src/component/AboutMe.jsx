import React from 'react'

const AboutMe = () => {
  return (
    <div id='aboutMe' class='flex flex-col min-h-screen pt-24 md:pt-36'>
      <h1 class='text-center text-4xl md:text-6xl mb-10 w-screen'>About Me</h1>
      <div class='self-center w-4/5 border-t-2 border-text2 pb-5'></div>
      <div class='px-8 md:px-40 text-md md:text-xl'>
        <h1 class='md:text-3xl font-oxygen'>From dancer to developer!</h1>
        <h1 class='font-oxygen pt-5'>
          With nearly a decade of experience as a dancer, wellness coach and massage therapist, I have recently transitioned into the exciting world of software development.
          <br/>
          <br/>
          My passion for movement and wellness led me to explore the intersection of technology and health. I completed a coding bootcamp with the Flatiron School and discovered a whole new world of creative expression through programming.
          <br/>
          <br/>
          As a software developer, I bring a unique perspective and creative approach to problem-solving. I believe that the principles of dance and wellness can be applied to coding as well, by focusing on flow, rhythm, and balance.
          <br/>
          <br/>
          I am skilled in Javascript and Ruby, with a focus on web development. I believe that technology can be a powerful tool for promoting health and well-being, and I am excited to contribute to projects that align with my values.
          <br/>
          <br/>
          When I'm not coding, you can find me dancing, swimming, or snuggling up with my beagle-hound mix, Theodore. I also love to read and play video games, finding inspiration and new ideas work along the way.
          <br/>
          <br/>
          I am thrilled to have found a new creative outlet in software development and can't wait to see where this new adventure takes me next!
        </h1>
      </div>
      {/* <div class="w-96 h-96">
        <img class="rounded-full shadow-sm" src="src/assets/IMG_4551.JPG" alt="user image" />
      </div> */}
    </div>
  )
}

export default AboutMe