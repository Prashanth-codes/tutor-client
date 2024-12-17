import React from "react";
import responsibilities from '../assets/responsibilities.jpg';

const Responsibilities = () => {
  return (
    <div id="responsibilities" className="bg-cyan-50 py-16">
      <div className="grid">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
            Our Responsibilities
          </h2>
          <p className="text-lg text-center text-gray-700 mb-10">
            At RK Home & Online Tutors, we take pride in going beyond teaching. Here's what we ensure for every student.
          </p>
        <div className="flex items-center justify-center">
          <img src={responsibilities} alt="responsibilities" />
        </div>
        <div className="container mx-auto px-6 lg:px-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-3xl font-bold">1.</span>
              <p className="text-lg text-gray-700">
                <strong>Personalized Learning Plans:</strong> We create customized study plans tailored to your child’s strengths, weaknesses, and learning pace to ensure maximum understanding and improvement.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-3xl font-bold">2.</span>
              <p className="text-lg text-gray-700">
                <strong>Thorough Tutor Screening:</strong> Before assigning a tutor, we take the time to understand your child’s academic needs, preferred teaching style, and learning goals. Every tutor undergoes a thorough interview and evaluation by our team to ensure they are highly qualified and aligned with your requirements.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-3xl font-bold">3.</span>
              <p className="text-lg text-gray-700">
                <strong>Expert Guidance:</strong> Our experienced tutors provide clear explanations, one-on-one support, and strategies to simplify even the toughest concepts.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-3xl font-bold">4.</span>
              <p className="text-lg text-gray-700">
                <strong>Regular Assessments:</strong> We conduct <em>midweek and weekend tests</em> to continuously evaluate your child’s progress and address areas needing improvement.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-3xl font-bold">5.</span>
              <p className="text-lg text-gray-700">
                <strong>Consistent Updates and Feedback:</strong> Every <em>15 days</em>, our team contacts you to gather feedback about the tutor and your child’s progress. Additionally, we send regular updates through <strong>WhatsApp or email</strong>, detailing what your child has studied and their progress in each subject.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-3xl font-bold">6.</span>
              <p className="text-lg text-gray-700">
                <strong>Exam Day Support:</strong> On exam days, with your permission, we provide additional support by waking your child up between <em>5 to 6 AM</em>, ensuring they are prepared and punctual.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-3xl font-bold">7.</span>
              <p className="text-lg text-gray-700">
                <strong>Confidence Building and Holistic Development:</strong> Beyond academics, we help build your child’s confidence, discipline, and problem-solving skills, preparing them for future challenges.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-3xl font-bold">8.</span>
              <p className="text-lg text-gray-700">
                <strong>Focus on Discipline and Routine:</strong> Our tutors instill disciplined study habits and a structured approach to learning to ensure consistent academic growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibilities;
