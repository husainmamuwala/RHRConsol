import React from "react"
import About from "../Components/About"
import Cards from "../Components/Cards"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Services from "../Components/Services"

export default function Home() {
  return (
    <div>
        <Navbar/>
      <main>
        <Hero/>
        <Cards/>
        <About/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
