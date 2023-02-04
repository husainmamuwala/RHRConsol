import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const about = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='py-20 px-10'>
        <div className='bg-secondary text-white px-10 py-10 rounded-2xl'>
          <h1 className='text-2xl font-bold text-primary'>About Us</h1>
          <p>RHR Consol Leads the various segment of Logistics which are Sea Cargo Consolidation for export and Import. RHR Consol is a young and dynamic outfit headed by a vibrant and an ambitious management team with good experience of many years in the field of shipping & logistics.
            RHR Consol formed with the intention to provide value added solutions to the industry stuck in the labyrinth of international trade and logistics. We understand the need of the industry and through our consolidation services strive to ensure direct connectivity to major ports in the world thus ensuring minimum transit times, minimum re-handling at transhipment points and obviously provide the cheapest rates in the process.
            We believe strongly in quality initiatives to constantly enhance our service levels and achieve customer delight. RHR Consol with its professionalism and deep-rooted command in the logistics business strives every day, every minute to provide not  just quality service but something exceptional altogether.</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default about