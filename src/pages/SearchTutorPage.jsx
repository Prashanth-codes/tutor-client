import React from "react";
import Navbar from "./search/Navbar";
import ContactUs from './search/ContactUs'
import AboutUs from './search/AboutUs';
import Explore from './search/Explore';
import Responsibilities from './search/Responsibilties'
import Testimonials from './search/Testimonials'

const SearchTutorPage = () => {
  return (
    <div className="bg-cyan-50">
      <Navbar />
      <div className="pt-16">
        <AboutUs />
        <Testimonials />
        <Explore />
        <Responsibilities />
        <ContactUs />
      </div>
    </div>
  );
};

export default SearchTutorPage;
