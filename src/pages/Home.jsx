import React from "react";
import home from "./assets/home2.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="relative bg-cyan-50 min-h-screen flex flex-col items-center">
      <div className="mt-20"></div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={home}
          alt="home"
          className="w-full h-auto max-h-[400px] rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center text-center lg:text-left px-6 lg:px-16 py-10">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          Welcome to RK Home & Online Tutors!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your trusted platform for personalized and high-quality tutoring
          services. Whether you're looking for a tutor for home learning or
          online guidance, we've got you covered. Explore, connect, and embark
          on a journey to academic excellence with us!
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <Link to="/search-tutor">Search a Tutor</Link>
          </button>
          <button className="px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            <Link to="/join-tutor">Join as Tutor</Link>
          </button>
        </div>
      </div>
      <div className="w-full py-8 px-6 mt-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Important Information
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">🎉 Free Registration</h3>
          <p className="text-gray-600">
            Sign up today for free registration and take advantage of complimentary demo sessions! Start your child's learning journey with confidence.
          </p>

          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">📢 New Opportunities</h3>
            <p className="text-gray-600">
              We're looking for experienced tutors in Mathematics and Science.
              Apply now to join our team!
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🏆 Success Stories</h3>
            <p className="text-gray-600">
              Over 100+ students have improved their grades with us. Be a
              part of our growing family!
            </p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Home;
