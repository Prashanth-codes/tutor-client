import React from "react";
import img1 from "../assets/res11.jpg";
import img2 from "../assets/res12.jpg";
import img3 from "../assets/res13.jpg";
import img4 from "../assets/res21.jpg";
import img5 from "../assets/res22.jpg";
import img6 from "../assets/res23.jpg";

const Responsibilities = () => {
  return (
    <div id="responsibilities" className="bg-cyan-50 py-16">
      <div className="grid">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Our Responsibilities
        </h2>
        <p className="text-lg text-center text-gray-700 mb-10">
          At RK Home & Online Tutors, we take pride in going beyond teaching.
          Here's what we ensure for every student.
        </p>
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:ml-10">
            <img
              src={img1}
              alt="Responsibility 1"
              className="w-full h-[400px] rounded-lg shadow-md lg:w-[350px]"
            />
            <img
              src={img2}
              alt="Responsibility 2"
              className="w-full h-[400px] rounded-lg shadow-md lg:w-[350px]"
            />
            <img
              src={img3}
              alt="Responsibility 3"
              className="w-full h-[400px] rounded-lg shadow-md lg:w-[350px]"
            />
            <img
              src={img4}
              alt="Responsibility 4"
              className="w-full h-[400px] rounded-lg shadow-md lg:w-[350px]"
            />
            <img
              src={img5}
              alt="Responsibility 5"
              className="w-full h-[400px] rounded-lg shadow-md lg:w-[350px]"
            />
            <img
              src={img6}
              alt="Responsibility 6"
              className="w-full h-[400px] rounded-lg shadow-md lg:w-[350px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibilities;
