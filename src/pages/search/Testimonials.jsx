import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import video1 from "../assets/test.mp4";
import video2 from "../assets/test1.mp4";
import video3 from "../assets/test2.mp4";

const Testimonials = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [video1, video2, video3];

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    const videoElement = document.getElementById("video-player");
    videoElement.play();
    setIsPlaying(true);
  };

  return (
    <div id="testimonials" className="bg-cyan-50 py-12">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 sm:block">
          What Our Students Say
        </h2>
        <p className="text-lg text-gray-700 mb-8 sm:block">
          Hear from our students and parents about their experiences with our tutoring platform.
        </p>

        <div className="relative mx-auto max-w-4xl">
          <div className="relative">
            <video
              id="video-player"
              key={currentVideo}
              className="w-full h-64 md:h-96 rounded-lg shadow-lg"
              controls={isPlaying}
              onPause={() => setIsPlaying(false)}
            >
              <source src={videos[currentVideo]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg cursor-pointer"
                onClick={handlePlay}
              >
                <FaPlayCircle className="text-white text-6xl hover:scale-110 transition-transform" />
              </div>
            )}
          </div>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 hidden md:flex">
            <button
              onClick={handlePrevious}
              className="text-white bg-blue-600 rounded-full p-3 hover:bg-blue-700 shadow-lg text-2xl"
            >
              <BsArrowLeftCircle />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden md:flex">
            <button
              onClick={handleNext}
              className="text-white bg-blue-600 rounded-full p-3 hover:bg-blue-700 shadow-lg text-2xl"
            >
              <BsArrowRightCircle />
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4 md:hidden">
          Swipe or click the arrow below to view more videos.
        </p>

        <div className="flex justify-center mt-4 md:hidden">
          <button
            onClick={handlePrevious}
            className="text-blue-600 hover:text-blue-600 text-2xl mx-2"
          >
            <BsArrowLeftCircle />
          </button>
          <button
            onClick={handleNext}
            className="text-blue-600 hover:text-blue-600 text-2xl mx-2"
          >
            <BsArrowRightCircle />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:grid">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-gray-800 italic">
              "RK Tutors helped my child excel in math. The tutors are so patient and knowledgeable!"
            </p>
            <h4 className="mt-4 text-blue-600 font-bold">- Parent of Grade 8 Student</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-gray-800 italic">
              "The online classes are convenient and effective. Highly recommend RK Tutors!"
            </p>
            <h4 className="mt-4 text-blue-600 font-bold">- High School Student</h4>
          </div>
          {/* <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-gray-800 italic">
              "Great experience! The tutors understand the student's needs and tailor the teaching accordingly."
            </p>
            <h4 className="mt-4 text-blue-600 font-bold">- Parent of Grade 9 Student</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-gray-800 italic">
            "The tutors are extremely professional and create a learning environment that motivates my child to do better every day. Highly satisfied with the service!"
            </p>
            <h4 className="mt-4 text-blue-600 font-bold">- Parent of Grade 7 Student</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
