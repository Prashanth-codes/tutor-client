import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', 'edd4f6dc-5fb8-4d14-951c-9fe22f39b828');

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setResult('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form submitted successfully!');
        event.target.reset();
      } else {
        console.error('Form submission error:', data);
        setResult(data.message || 'An error occurred while submitting the form.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setResult('A network error occurred. Please try again later.');
    }
  };

  return (
    <div id="contact" className="bg-cyan-50 py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>I'm open to discussing MERN stack projects or freelancing opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-orange-400 mr-2" />
              <a href="mailto:prashanthnelluri2005@gmail.com" className="hover:underline">
                hometuitionrk@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaInstagram className="inline-block text-pink-400 mr-2" />
              <a
                href="https://www.instagram.com/rkhometutions/profilecard/?igsh=N29oNXZ2ODdyYmhj"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>9494823941</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-red-400 mr-2" />
              <span>Hyderabad</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 focus:bg-white focus:text-black text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 focus:bg-white focus:text-black text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 focus:bg-white focus:text-black text-white"
                  placeholder="Enter your message"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
            {result && <p className="text-center text-green-400 mt-4">{result}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
