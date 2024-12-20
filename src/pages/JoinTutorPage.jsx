import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Form from "./join/Form";
import ContactUs from "./search/ContactUs";

const JoinTutorPage = () => {
  return (
    <div className="bg-cyan-50 py-16 mt-[70px]">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          Join RK Tutors as a Tutor
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Join our team of qualified tutors and help students achieve their academic goals. 
          Fill out the form below to register with us and become a part of Hyderabad’s leading 
          tutoring platform!
        </p>
        <div className="space-x-6 flex justify-center items-center mt-6">
          <Link
            to="/join-tutor/fillform"
            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Fill Form
          </Link>
          <Link
            to="/join-tutor/contact"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <Routes>
          <Route path="/" element={<Navigate to="/join-tutor/fillform" />} />
          <Route path="fillform" element={<Form />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  );
};

export default JoinTutorPage;
