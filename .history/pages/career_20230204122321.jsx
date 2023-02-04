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
        to know more write us a mail  info@rhrconsol.in

        <Link href="/contact">
        <button className=''>
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