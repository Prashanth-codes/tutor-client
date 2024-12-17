import React from "react";
import aboutus from "../assets/aboutus.jpg";
const AboutUs = () => {
  return (
    <section id="about" className="min-h-screen mt-40 flex items-center justify-center bg-cyan-50 md:mt-60 lg:mt-40">
      <div className="flex">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Us
        </h2>
        <p className="text-lg text-center text-gray-700 mb-5 font-bold">
          Empowering Students, Transforming Futures.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At <span className="font-bold">RK Home & Online Tutors</span>, we
              are passionate about transforming education by connecting
              experienced tutors with students who strive for excellence.
              Established in 2020, we have grown into Hyderabad’s{" "}
              <span className="font-bold">
                leading tutoring service
              </span>, trusted by thousands of parents and students for our
              personalized and result-oriented approach.
            </p>
        </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower students by providing{" "}
              <span className="font-bold">
                high-quality, customized learning experiences
              </span>{" "}
              that help them excel in their academics and build confidence for
              a brighter future.
            </p>
          </div>
        <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              What We Offer
            </h3>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
              <li>
                <span className="font-bold">Comprehensive Subject Coverage:</span>{" "}
                Expert tutors for all subjects and syllabi, including CBSE,
                ICSE, SSC, IGCSE, and more.
              </li>
              <li>
                <span className="font-bold">Qualified Tutors:</span> Tutors with
                a minimum of one year of experience in their respective fields.
              </li>
              <li>
                <span className="font-bold">Flexible Learning Modes:</span> Home
                and online tutoring options to suit your convenience.
              </li>
              <li>
                <span className="font-bold">Continuous Assessment:</span>{" "}
                Regular midweek and weekend tests to monitor and ensure
                progress.
              </li>
              <li>
                <span className="font-bold">Result-Driven Approach:</span> Proven
                track record of 100% success in improving students' academic
                performance.
              </li>
            </ul>
          </div>
        <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us
            </h3>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
              <li>
                <span className="font-bold">Transparent & Reliable:</span> No
                registration or commission fees for tutors or parents.
              </li>
              <li>
                <span className="font-bold">Personalized Attention:</span>{" "}
                Tailored teaching strategies to meet every student’s unique
                learning needs.
              </li>
              <li>
                <span className="font-bold">Holistic Development:</span> Focus
                on improving academic results and fostering confidence,
                discipline, and a love for learning.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-60">
        <img src={aboutus} alt="about" />
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
