import React from "react"
import AboutMe from "./component/AboutMe"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import NavBar from "./component/NavBar"

function App() {
  return (
    <div class="flex flex-col">
      <NavBar />
      <Hero />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App
