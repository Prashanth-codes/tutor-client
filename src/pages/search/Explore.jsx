import React, { useState } from "react";
import explore from "../assets/explore.jpg";

const Explore = () => {
  const [formData, setFormData] = useState({
    class: "",
    school: "",
    area: "",
    syllabus: "",
    subjects: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const { class: className, school, area, syllabus, subjects } = formData;

    if (!className || !school || !area || !syllabus || !subjects) {
      setResult("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "edd4f6dc-5fb8-4d14-951c-9fe22f39b828",
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully.");
        setFormData({
          class: "",
          school: "",
          area: "",
          syllabus: "",
          subjects: "",
        });
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="explore" className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6">
        Explore Tutors
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-12 px-4 md:px-10 lg:px-16">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={explore}
            alt="Explore"
            className="rounded-lg shadow-lg w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-full object-cover lg:h-150 lg:mt-10"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-md sm:text-lg text-center text-gray-700 mb-8 px-4 sm:px-8 lg:px-0">
            Provide your child’s details, and we’ll connect you with the best tutor!
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 sm:p-8 space-y-6 max-w-lg mx-auto lg:mx-0"
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
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
          {result && <p className="mt-4 text-center text-gray-700">{result}</p>}
        </div>
      </div>
    </div>
  );
};

export default Explore;
