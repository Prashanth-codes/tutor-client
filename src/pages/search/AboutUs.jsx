import React from "react";
import aboutus from "../assets/about.jpg";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section
      id="about"
      className="min-h-screen mt-40 sm:mt-60 md:mt-20 lg:mt-20 flex items-center justify-center bg-cyan-50"
    >
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-center lg:text-left text-blue-600 mb-4">
            About Us
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Who We Are
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At <span className="font-bold">RK Home & Online Tutors</span>, we
                connect experienced tutors with students striving for excellence.
                Since 2020, we’ve become Hyderabad’s trusted tutoring service,
                delivering personalized, result-driven education.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We aim to empower students with{" "}
                <span className="font-bold">
                  customized learning experiences
                </span>{" "}
                to build confidence and excel academically.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                What We Offer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide expert tutors across all subjects and syllabi (CBSE,
                ICSE, SSC, IGCSE, and more), flexible home/online learning
                modes, continuous assessments, and a proven track record of
                academic success.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <div className="custom"></div>
          <img
            src={aboutus}
            alt="About Us"
            className="rounded-lg shadow-lg w-full max-w-[90%] lg:max-w-[600px] object-contain sm:object-cover sm:mt-40"
            style={{ height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
