'use client';

import { useEffect, useState } from 'react';
import { FaShippingFast, FaAmazonPay } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import { BiMessageRoundedDetail } from 'react-icons/bi';

const images = [
  '/electronic-store-hero-image.jpg',
  '/electronic-store-hero-image.jpg',
  '/electronic-store-hero-image.jpg',
  '/electronic-store-hero-image.jpg',
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsSliding(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Image Slider */}
      <div className="relative overflow-hidden w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-in-out ${
            isSliding ? 'translate-x-full' : ''
          }`}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        />
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-in-out ${
            isSliding ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{
            backgroundImage: `url(${images[(currentImageIndex + 1) % images.length]})`,
          }}
        />
      </div>

      {/* Categories Section */}
      <div className="relative z-10 mt-6 lg:mt-[-60px]">
        <div className="bg-white flex flex-col sm:flex-row items-center gap-4 py-4 lg:px-8 sm:px-8 px-4 lg:mx-[150px]">
          <div className="flex items-start gap-3 flex-1 sm:border-r border-[#F5F7FA]-300 pb-4 sm:pb-0">
            <FaShippingFast as="svg" size={26} className="text-[#d22127]" />
            <div className="pl-4">
              <span className="font-semibold text-black block text-sm">Free Shipping</span>
              <span className="text-gray-600 text-xs">When you spend $80 or more</span>
            </div>
          </div>
          <div className="flex items-start gap-3 flex-1 sm:border-r border-[#F5F7FA]-300 pb-4 sm:pb-0">
            <BiMessageRoundedDetail as="svg" size={26} className="text-[#d22127]" />
            <div className="pl-4">
              <span className="font-semibold text-black block text-sm">We are available 24/7</span>
              <span className="text-gray-600 text-xs">Need help? Contact us anytime</span>
            </div>
          </div>
          <div className="flex items-start gap-3 flex-1 sm:border-r border-[#F5F7FA]-300 pb-4 sm:pb-0">
            <MdRefresh as="svg" size={26} className="text-[#d22127]" />
            <div className="pl-4">
              <span className="font-semibold text-black block text-sm">Satisfaction or Return</span>
              <span className="text-gray-600 text-xs">Easy 30-day return policy</span>
            </div>
          </div>
          <div className="flex items-start gap-3 flex-1">
            <FaAmazonPay as="svg" size={26} className="text-[#d22127]" />
            <div className="pl-4">
              <span className="font-semibold text-black block text-sm">100% Secure Payments</span>
              <span className="text-gray-600 text-xs">Visa, Mastercard, Stripe, PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;