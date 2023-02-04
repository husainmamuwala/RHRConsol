import React from 'react'

const ServiceCards = () => {
    const Data = [
        {
            src: "img/nvocc.jpg",
            title: "NVOCC",
            desc:"Professional staff handles this department. Customer satisfaction has been defined as the ultimate goal. Team Leader Logistics Pvt. Ltd. acts as buyers’ consolidating agent for various big and medium size buying houses spread over Europe, Scandinavia & USA. Buyers and their agents in India and overseas are always informed of the cargo readiness and stuffing is done as per buyer's instructions."
        },
        {
            src: "door-to-door.jpg",
            title: "Door To Door",
            desc:"This service combines road and/or rail transport with maritime transport to collect or deliver cargo from or to a final destination beyond load or discharge port. Deliveries are coordinated according to the consignee's designated schedule. This service also allows you for cargo arriving in programmed order, eliminating bottlenecks. We also arrange chassis to suit the shipper's cargo needs"
        },
        {
            src: 'img/impexp.jpg',
            title: "Import/Export",
            desc:"This department handles regular LCL consolidation from various seaports and inland terminals to different parts of the world. The regions mainly concentrated are USA; Europe based ports, United Kingdom and inland, Scandinavia, East Europe, Turkey, Mediterranean, Far East, South Africa, Mauritius, UAE and the Upper Gulf including Red Sea. Our 24x7 live ‘PhoneTrack’ and on line ‘Global Track & Trace’ system gives unique advantage to our clients to know about their shipments from any part of the world."

        },
        {
            src: 'img/customs1.png',
            title: "Customs Broker",
            desc:"This department provides services right from pre-shipment advice to our clients to facilitate smooth shipments/ Clearance from shipper's warehouse to/ from major ports/ ICD's. All required documentation is informed well in advance to shippers / consignees. We ensure that no detention or demurrage is paid by our consignees or shippers at load ports or at destination ports. Our officers are well versed with all custom procedures and are in constant touch with port and customs officials to clear shipments in time."

        },
        {
            src: 'img/ODC.png',
            title: "ODC Shipment",
            desc:"We undertake transportation of Over Dimension Consignments and Heavy cargo from one port to another or any point within India with special ODC equipment. Our 24x7 live ‘PhoneTrack’ and on line ‘Global Track & Trace’ system gives unique advantage to our clients to know about their shipments from any part of the world."

        },
        {
            src: 'img/agency.png',
            title: "Custom House Agency",
            desc:""

        },
        {
            src: 'img/frieght.jpg',
            title: "Air Cargo",

        },


    ]
    return (
        <div>
            <div className='items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:px-10 gap-y-10 lg:gap-x-14 place-items-center'>
                    {
                        Data.map((d) => (
                            <div className='bg-secondary rounded-2xl w-full'>
                                <div className='lg:h-auto self-center rounded-lg flex py-2 px-2' key={d.title}>
                                    <img
                                        src={d.src}
                                        className='object-cover md:w-48 rounded-xl' />
                                    <div className=' mt-1 px-5'>
                                        <p className='text-lg font-semibold text-primary uppercase '>{d.title}</p>
                                        <p className='text-white'>
                                            {d.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ServiceCards