import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full fixed mt-[80px] bg-cyan-50 shadow-md z-10 border-none">
      <div className="container mx-auto text-center">
      {!isScrolled && (
        <div>
        <h1 className="text-4xl font-bold mt-3 mb-2">
          Find the Perfect Tutor for Your Learning Journey!
        </h1>
        
          <p className="text-lg">
            Discover experienced and qualified tutors for home or online learning. Tailored for your needs, at your convenience!
          </p>
          </div>
        )}
      </div>
      <div className="container text-center space-x-4 mt-4 mb-2">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 font-bold">
          About
        </Link>
        <Link to="explore" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 font-bold">
          Explore
        </Link>
        <Link to="responsibilities" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 font-bold">
          Responsibilities
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 font-bold">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
