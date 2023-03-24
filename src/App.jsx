import React from "react"
import AboutMe from "./component/AboutMe"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import NavBar from "./component/NavBar"
import Projects from "./component/Projects"
import Skills from "./component/Skills"

function App() {
  return (
    <div class="flex flex-col">
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
