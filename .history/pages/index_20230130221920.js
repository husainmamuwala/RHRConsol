import React from "react"
import Cards from "../Components/Cards"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"

export default function Home() {
  return (
    <div>
      <main>
        <Navbar/>
        <Hero/>
        <Cards/>
      </main>
    </div>
  )
}
