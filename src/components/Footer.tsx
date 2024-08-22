import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCcPaypal, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { FaCcStripe } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="text-white mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <Link href="/">
              <Image src="/logo.jpeg" alt="Logo" width={120} height={40} className="mx-auto md:mx-0" />
            </Link>
          </div>

          {/* Shop Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-[#d22127]">Shop</h3>
            <ul className="flex flex-col items-center md:items-start">
              <li className="mb-2">
                <a href="#" className="text-black hover:text-[#f5ed4d]">Hot deals</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-[#f5ed4d]">Categories</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-[#f5ed4d]">Brands</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-[#f5ed4d]">Rebates</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-[#f5ed4d]">Weekly deals</a>
              </li>
            </ul>
          </div>

          {/* Need Help Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-[#d22127]">Need help?</h3>
            <ul className="flex flex-col items-center md:items-start">
              <li className="mb-2">
                <a href="#" className="text-black hover:text-[#f5ed4d]">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-[#f5ed4d]">Order tracking</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-[#f5ed4d]">FAQs</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-[#f5ed4d]">Return policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-[#f5ed4d]">Privacy policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-[#d22127]">Contact</h3>
            <p className="text-black mb-2">Makuza city plaza, Tower C 5TH Floor</p>
            <p className="text-black mb-2">contact@info.com</p>
            <p className="text-black">929-242-6868</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black py-4">
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
