import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCcPaypal, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { FaCcStripe, FaArrowRight } from 'react-icons/fa6'; 
import LL from "../assets/Logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <Link href="/">
              <Image src={LL} alt="Logo" width={120} height={40} className="mx-auto md:mx-0" />
            </Link>
          </div>

          {/* Shop Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Shop</h3>
            <ul className="flex flex-col items-center md:items-start">
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-[#f5ed4d]">Hot deals</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-[#f5ed4d]">Categories</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-[#f5ed4d]">Brands</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-[#f5ed4d]">Rebates</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-[#f5ed4d]">Weekly deals</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Need help?</h3>
            <ul className="flex flex-col items-center md:items-start">
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-[#f5ed4d]">Contact</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-[#f5ed4d]">Order tracking</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-[#f5ed4d]">FAQs</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-[#f5ed4d]">Return policy</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-[#f5ed4d]">Privacy policy</Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <p className="text-gray-400 mb-2">Makuza city plaza, Tower C 5TH Floor</p>
            <p className="text-gray-400 mb-2">contact@info.com</p>
            <p className="text-gray-400">929-242-6868</p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 text-white">Newsletters</h3>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 pr-12 text-black rounded-md focus:outline-none"
                />
                <button className="absolute top-0 right-0 h-full bg-[#f5ed4d] px-4 rounded-md text-white focus:outline-none">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-gray-700" />
      </div>
      <div className="py-4">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>© 2024 GiraICT. Powered by GiraICT</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaCcVisa size={26} />
            <FaCcMastercard size={26} />
            <FaCcStripe size={26} />
            <FaCcPaypal size={26} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
