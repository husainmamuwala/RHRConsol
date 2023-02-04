import React from 'react'
import ContactForm from '../Components/Contactform'

const contact = () => {
  return (
    <div>
        <div
                        className="w-full py-8 flex items-center justify-center 
                        font-paprika text-2xl text-center px-4
                        md:gap-x-6 md:py-12 lg:py-16 xl:py-24"
                    >
                        <svg
                            width="121"
                            height="3"
                            viewBox="0 0 121 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="0.5"
                                y1="1.5"
                                x2="120.5"
                                y2="1.5"
                                stroke="#E5E5E5"
                                strokeWidth="3"
                            />
                        </svg>
                        <p className="w-max">Send us a Message</p>
                        <svg
                            width="121"
                            height="3"
                            viewBox="0 0 121 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="0.5"
                                y1="1.5"
                                x2="120.5"
                                y2="1.5"
                                stroke="#E5E5E5"
                                strokeWidth="3"
                            />
                        </svg>
                    </div>
            <ContactForm/>

    </div>
  )
  
}

export default contact