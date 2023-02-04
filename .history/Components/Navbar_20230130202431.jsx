import React from "react";

const Navbar = () => {
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Enquiry",
      link: "/enquiry",
    },
  ];
  return <div className="w-full">
    <div>
        <ul>
            {
                Links.map((link) => (
                    <li>
                        
                    </li>
                ))
            }
           
        </ul>
    </div>
  </div>;
};

export default Navbar;
