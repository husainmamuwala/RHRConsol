import React from 'react'

const ServiceCards = () => {
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
    <div>
        <div className='items-center'>
                <div className='grid grid-cols-2 md:grid-cols-3 md:px-10 gap-y-10 lg:gap-x-14 place-items-center py-10'>
                    {
                        Data.map((d) => (
                            <div>
                                </div>
                            <div className='lg:h-32 lg:w-48 w-32 pr-2 self-center rounded-lg flex' key={d.title}>
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

export default ServiceCards