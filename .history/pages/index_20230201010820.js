import React from "react"
import Cards from "../Components/Cards"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"

export default function Home() {
  return (
    <div>
        <Navbar/>
      <main>
        <Hero/>
        <Cards/>
      </main>
      <footer>
        
      </footer>
    </div>
  )
}
