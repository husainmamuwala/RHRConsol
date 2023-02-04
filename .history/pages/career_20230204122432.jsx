import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Link from 'next/link'

const career = () => {
  return (
    <div>
        <Navbar/>
        <div className='py-10 px-5'>
    <div className='bg-secondary rounded-2xl px-5 py-5 text-white'>
        <p className='text-primary uppercase font-bold
        text-lg py-2'>Careers</p>
        Career Openings coming soon on the webpage !
        to know more write us a mail on info@rhrconsol.in
        <br/>
        <Link href="/contact">
        <button className='bg-primary px-3 py-2 rounded-2xl
        font- text-secondary'>
            Contact Us
        </button>
        </Link>
        </div>
    </div>
        <footer>
            <Footer/>
        </footer>
        </div>
  )
}

export default career