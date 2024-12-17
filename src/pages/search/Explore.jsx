import React, { useState } from "react";
import explore from '../assets/explore.jpg';

const Explore = () => {
  const [formData, setFormData] = useState({
    class: "",
    school: "",
    area: "",
    syllabus: "",
    subjects: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
    alert("Your details have been submitted!");
  };

  return (
    <div id="explore" className="py-16">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Explore Tutors
        </h2>
      <div className="flex justigy-between items-center">
        <div className="ml-10">
          <img src={explore} alt="explore" />
        </div>
        <div className="container mx-auto px-6 lg:px-16">
          <p className="text-lg text-center text-gray-700 mb-10">
            Provide your child’s details, and we’ll connect you with the best tutor!
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-8 space-y-6 max-w-lg mx-auto"
          >
            <div>
              <label
                htmlFor="class"
                className="block text-gray-700 font-semibold mb-2"
              >
                Class
              </label>
              <input
                type="text"
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                placeholder="Enter your child's class"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="school"
                className="block text-gray-700 font-semibold mb-2"
              >
                School
              </label>
              <input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                placeholder="Enter your child's school"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="area"
                className="block text-gray-700 font-semibold mb-2"
              >
                Area
              </label>
              <input
                type="text"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Enter your area/locality"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="syllabus"
                className="block text-gray-700 font-semibold mb-2"
              >
                Syllabus
              </label>
              <select
                id="syllabus"
                name="syllabus"
                value={formData.syllabus}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select syllabus
                </option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="SSC">SSC</option>
                <option value="IGCSE">IGCSE</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="subjects"
                className="block text-gray-700 font-semibold mb-2"
              >
                Subjects
              </label>
              <input
                type="text"
                id="subjects"
                name="subjects"
                value={formData.subjects}
                onChange={handleChange}
                placeholder="Enter subjects (e.g., Math, Science)"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Explore;