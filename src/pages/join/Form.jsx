import React from "react";

const Form = () => {
  return (
    <div className="bg-cyan-50 py-16 mt-[70px]">
      <div className="container mx-auto px-6 lg:px-16">
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
          By filling out this form, you agree to our terms and conditions and
          provide consent for us to contact you for tutor-related
          opportunities.
        </p>
      </div>
    </div>
  );
};

export default Form;
