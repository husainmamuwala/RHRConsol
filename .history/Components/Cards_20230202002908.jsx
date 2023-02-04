import React from "react";

const Cards = () => {
  const Data = [
    {
      id:'1',
      title: "Our Commitment",
      src: "parcel.svg",
      para: "We committed to providing customers value-added services. We strive to develop a long-term business relationship with our customer, which is founded on our ability to help identify and recomm-end the best solution for each customer's business environment.",
    },
    {
        id:"2",
        title:"Key To Success",
        src:"key.svg",
        para:"We strive for continuous improvement in our relationships with customers and our ability to provide quality products and solutions to our customers requirements without losing focus of our 'Right-on-Time' delivery system."

    },
    {
        id:"3",
        title:"Services",
        src:"service.svg",
        para:"Professional staff handles this department. Customer satisfaction has been defined as the ultimate goal. RHR Consol India Pvt. Ltd. acts as buyers’ consolidating agent for various big and medium size buying houses spread over Europe, Scandinavia & USA."
    }
  ];
  return (
    <div>
      <div className=" flex lg:flex-row flex-c px-10 mt-10 gap-5">
      {
      Data.map((d)=>(
        <div className="bg-[#1C2C5E] w-full rounded-xl p-5 lg:p-7" key={d.id}>
          <div className="flex flex-col">
            <div className="flex" >
              <div>
                <img
                src={d.src}/>
              </div>
              <div>
                <p className="text-white self-end text-xl lg:text-2xl font-semibold pl-5 mt-2">{d.title}</p>
              </div>
            </div>
          </div>
          <div>
            <svg
              className="w-[10rem] lg:w-[15rem] lg:ml-14"
              width="auto"
              height="24"
              viewBox="0 0 262 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0.988506"y1="3.50004"x2="261.988"y2="1.50004"stroke="#FFCA05"stroke-width="3"/>
            </svg>
          </div>
          <div>
            <p className="text-white">{d.para}</p>
          </div>
        </div>
        ))}
      </div>
      <div>
      </div>
    </div>
  );
};

export default Cards;
