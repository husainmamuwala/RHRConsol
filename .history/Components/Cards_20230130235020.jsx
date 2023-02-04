import React from "react";

const Cards = () => {
  const Data = [
    {
        title:"Our Commitment",
        para:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
        lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum"
    }
];
  return (
    <div>
      <div className=" grid grid-cols-3 px-10 mt-10">
        <div className="bg-[#1C2C5E] w-full rounded-xl p-5">
          <div className="flex flex-col">
            <div className="flex">
              <div>right</div>
              <div>left</div>
            </div>
            <div>
              <svg
                width="auto"
                height="5"
                viewBox="0 0 262 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.988506"
                  y1="3.50004"
                  x2="261.988"
                  y2="1.50004"
                  stroke="#FFCA05"
                  stroke-width="3"
                />
              </svg>
            </div>
          </div>
          <div>
            <p>hello wolrd  </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
