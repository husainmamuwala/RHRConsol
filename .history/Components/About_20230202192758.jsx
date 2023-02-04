import React from 'react'

const About = () => {
    const Data = [
        {
            src: "img/nvocc.jpg",
            title: "NVOCC",
        },
        {
            src: "door-to-door.jpg",
            title: "Door To Door",
        },
        {
            src: 'img/impexp.jpg',
            title: "Import/Export"

        },
        {
            src: 'img/customs1.png',
            title: "Customs Broker",

        },
        {
            src: 'img/ODC.png',
            title: "ODC Shipment"

        },
        {
            src: 'img/agency.png',
            title: "Custom House Agency"

        },
        {
            src: 'img/frieght.jpg',
            title: "Air Cargo"

        },


    ]
    return (
        <div className='px-10 flex lg:flex-row flex-col mt-20 pb-10'>
            <div className='lg:w-3/5'>
                <p className='font-semibold text-4xl tracking-wide text-[]'>Why Choose</p>
                <p className='font-semibold text-4xl tracking-wide'>RHR Consol ??</p>
                <img
                    src='img/whychoosesvg.svg'
                    alt=''
                    className='md:mt-[-4rem]' />
                <div className='mt-1'>
                    <p className='text-lg text-left leading-7 break'>
                        RHR Consol Leads the various segment of Logistics which are Sea Cargo Consolidation for export and Import.
                        RHR Consol is a young and dynamic outfit headed by a vibrant and an ambitious management team with good experience
                        of many years in the field of shipping & logistics. RHR Consol formed with the intention to provide value added solutions
                        to the industry stuck in the labyrinth of international trade and logistics. We understand the need of the industry and through
                        our consolidation services strive to ensure direct connectivity to major ports in the world thus ensuring minimum transit times,
                        minimum re-handling at transhipment points and obviously provide the cheapest rates in the process. We believe strongly in quality
                        initiatives to constantly enhance our service levels and achieve customer delight. Team Leader with its professionalism and
                        deep-rooted command in the logistics
                        business strives every day, every minute to provide not just quality service but something exceptional altogether.
                    </p>
                    <div className='py-5'>
                    <button className="bg-[#FFCA05] rounded-xl px-5 py-[0.3rem] text-[#1C2C5E] font-semibold lg:w-48 text-md
                        drop-shadow-lg hover:scale-105">Know More</button>
                    </div>
                </div>
            </div>
            <div className='lg:w-2/3 items-center'>
                <div className='grid grid-cols-2 md:grid-cols-3 md:px-10 gap-y-10 lg:gap-x-14 place-items-center py-10'>
                    {
                        Data.map((d) => (
                            <div className='lg:h-32 lg:w-48 w-32 pr-2 self-center rounded-lg'>
                                <img
                                    src={d.src}
                                    className='object-cover h-32 rounded-lg' />
                                <p className='text-lg font-semibold'>{d.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About