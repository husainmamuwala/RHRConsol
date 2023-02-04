import React from 'react'
import Navbar from '../Components/Navbar'
import ServiceCards from '../Components/ServiceCards'
import Services from '../Components/Services'
import Footer from '../Components/Footer'

const services = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
          <Services/>
          <p>Services We Offer</p>
          <ServiceCards/>
          <Footer/>
        </div>
    </div>
  )
}

export default services