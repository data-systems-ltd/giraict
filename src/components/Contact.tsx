import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* Contact Icons Section */}
        <div className="flex flex-col items-start space-y-4 lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="border bg-[#f5ed4d] rounded-full p-2 hover:bg-gray-100">
              <FaFacebookF size={24} className="text-white" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="border bg-[#f5ed4d] rounded-full p-2 hover:bg-gray-100">
              <FaTwitter size={24} className="text-white" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="border   bg-[#f5ed4d]  rounded-full p-2 hover:bg-gray-100">
              <FaInstagram size={24} className="text-white" />
            </Link>
            <Link href="mailto:example@example.com" className="border  bg-[#f5ed4d]  rounded-full p-2 hover:bg-gray-100">
              <FaEnvelope size={24} className="text-white" />
            </Link>
            <Link href="tel:+1234567890" className="border  bg-[#f5ed4d]  rounded-full p-2 hover:bg-gray-100">
              <FaPhoneAlt size={24} className="text-white" />
            </Link>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="help" className="block text-sm font-medium text-gray-700 mb-1">Help</label>
              <select
                id="help"
                name="help"
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              >
                <option value="" disabled selected>Select a topic</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Question</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#f5ed4d] border text-white font-extrabold rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
