import React, { Component } from 'react';


const Services = () => {
  const Data = [
    {
      main:"AIR CARGO",
      sub:"Shipping",
      icon:"img/a2.png",
      desc:"Our cargo be it Airport to Airport or Door to Door, for prompt movement, we have dedicated team & active network to provide round the clock services as per priority implies",

    },
    {
      main:"SEA",
      sub:"Shipping",
      icon:"img/a2.png",
      desc:"Sea shipping is a crucial aspect of international trade and transportation, We provide a cost-effective and reliable way to transport goods over long distances",

    },
    {
      main:"GROUND",
      sub:"Shipping",
      icon:"img/a2.png",
      desc:"Road transport is a flexible and cost-effective solution for the delivery of goods and cargo. We specialize in the transportation of goods by road, offering services such as trucking, freight brokerage, and delivery management.",

    }
  ];

  return (
    <div className='md:px-10 px-5 pt-5'>
      <div className='bg-secondary w-full rounded-[2rem] md:py-10 py-5 md:px-10 px-5'>
        <div className='flex flex-row justify-between'>
          <div className=' text-white'>
            <span className='md:text-6xl text-xl font-bold'>Manage Your Package</span>
            <br />
            <span className='md:text-6xl text-xl font-bold '>From Local to <span className='text-primary'> THE WORLD.</span></span>
            <br />
            <span className='md:text-lg tracking-wide text-sm'>RHR Consol is a logistics provider of integrated freight solutions .RHR provides dedicated freight solution including:</span>
          </div>
          <div className=''>
            <img
              src='img/arrow 1.png'
              alt=' '
              className='w-24 md:w-auto' />
          </div>
        </div>


        <div className='py-5 flex md:flex-row flex-col md:mt-5'>
          <div className='md:w-1/2 h-[18rem]'>
            <img
              src='img/service1.png'
              className='' />
          </div>
          <div className='flex flex-col'>
          {
            Data.map((d)=>(
          <div className='md:pr-28 md:ml-5 'key={d.main}>
            <div className='w-full'>
            <svg width="auto" height="3" viewBox="0 0 900 3" fill="none" xmlns="http://www.w3.org/2000/svg"
            className='md:w-[53rem] w-[19rem]'>
              <line y1="1.5" x2="900" y2="1.5" stroke="#FFCA05" stroke-width="3" />
            </svg>
            </div>
            <div className='flex flex-row justify-between mt-3'>
              <p className='text-white font-semibold md:text-3xl text-xl'>
                <span className='text-primary'>{d.main}{" "}</span>{d.sub}</p>
              <img
                src={d.icon}
                className="w-10 md:w-auto" />
            </div>
            <p className='text-white pr-10 pb-2 text-sm'>{d.desc}</p>
          </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;

