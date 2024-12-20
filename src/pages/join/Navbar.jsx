import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 lg:px-16 grid justify-between items-center py-4">
        <div className="bg-gray-50 py-16 mt-[70px]">
            <div className="container mx-auto px-6 lg:px-16 text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-6">
                Join RK Tutors as a Tutor
            </h2>
            <p className="text-lg text-gray-700 mb-10">
                Join our team of qualified tutors and help students achieve their academic goals.
                Fill out the form below to register with us and become a part of Hyderabad’s leading
                tutoring platform!
            </p>
        </div>
        </div>
        <div className="space-x-6 flex justify-center items-center">
          <Link to="/join-tutor/fillform" className="text-blue-600 hover:text-blue-700 font-semibold">
            Fill Form
          </Link>
          <Link to="/join-tutor/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
