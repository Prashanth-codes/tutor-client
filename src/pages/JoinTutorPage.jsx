import React from "react";

const JoinTutorPage = () => {
  return (
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
        <div className="relative overflow-hidden shadow-md rounded-lg">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdAEuxa5ztPxlUHedDlZY7lYE7mrSXaGgo_qN-V65-llWII2w/viewform?embedded=true"
            title="Join as Tutor Form"
            width="100%"
            height="800px"
            frameBorder="0"
            className="border-none"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          By filling out this form, you agree to our terms and conditions and provide consent 
          for us to contact you for tutor-related opportunities.
        </p>
      </div>
    </div>
  );
};

export default JoinTutorPage;
