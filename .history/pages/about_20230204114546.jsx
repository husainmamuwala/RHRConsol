import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const about = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className=''>
          <div>
            <h1>About Us</h1>
            <p></p>
          </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default about