"use client"; // Add this line to mark the component as a Client Component

import Image, { StaticImageData } from "next/image";
import { SetStateAction, useState } from "react";
import electronic1 from "../assets/electronic1.jpg";
import electronic2 from "../assets/electronic2.jpg";
import electronic3 from "../assets/electronic3.jpg";
import electronic4 from "../assets/electronic4.jpg";
import {
  FaEye,
  FaArrowLeft,
  FaArrowRight,
  FaSearchPlus,
  FaSearchMinus,
} from "react-icons/fa";

function Product() {
  const [mainImage, setMainImage] = useState(electronic1);
  const [showDescription, setShowDescription] = useState(true);

  return (
    <div className="bg-[#F7FBFC] min-h-screen">
      <div className="max-w-6xl mx-auto p-2  ">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side: Image */}
          <div className="md:w-1/2">
            <div className="relative">
              {/* Sale Badge */}
              <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded-full cursor-pointer">
                Sale!
              </span>

              {/* Main Image */}
              <Image
                src={mainImage}
                alt="Product Image"
                className="w-full rounded-lg"
              />
            </div>

            {/* Additional Images */}
            <div className="flex justify-between mt-4">
              {[electronic1, electronic2, electronic3, electronic4].map(
                (img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Product side ${index + 1}`}
                    className="w-1/5 cursor-pointer rounded-lg"
                    onClick={() => setMainImage(img)}
                  />
                )
              )}
            </div>
          </div>

          {/* Right side: Product Details */}
          <div className="md:w-1/2">
            {/* Breadcrumb */}
            <div className="text-black text-sm mb-2  cursor-pointer">
              Home / PCs & laptop / 13 Ultrabook Gaming Laptop: Intel Core
              i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p
              120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt
              4
            </div>
            {/* Product Title */}
            <h1 className="text-2xl font-semibold text-black">
              13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA
              GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD,
              CNC Aluminum, Chroma RGB, Thunderbolt 4
            </h1>
            {/* Price */}
            <div className="mt-4">
              <span className="text-red-600 text-xl line-through">
                $1,499.00
              </span>
              <span className="text-yellow-600 text-2xl font-bold ml-2">
                $1,399.00
              </span>
            </div>
            {/* Key Features */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-black">Key features</h2>
              <ul className="list-disc list-inside text-black mt-2">
                <li>Newest technology</li>
                <li>Best in class components</li>
                <li>Dimensions - 69.5 x 75.0 x 169.0</li>
                <li>Maintenance free</li>
                <li>12 years warranty</li>
              </ul>
            </div>
            {/* Quantity Selector */}
            <div className="mt-6 flex items-center">
              <button className="bg-gray-200 text-gray-700 px-4 py-2">-</button>
              <input
                type="text"
                value="1"
                className="w-12 text-center border-2 border-gray-300 mx-2"
                readOnly
              />
              <button className="bg-gray-200 text-gray-700 px-4 py-2">+</button>
              {/* Add to Cart Button */}
              <button className="bg-red-600 text-white ml-4 py-2 px-2 hover:bg-red-700">
                Add to cart
              </button>
            </div>

            {/* Category */}
            <div className="mt-4 text-black text-sm border-t border-gray-300 pt-4">
              Category: <span className="text-gray-700">PCs & laptop</span>
            </div>
          </div>
        </div>

        {/* More about the product and reviews */}
        <div className="mt-8">
          {/* Description and Reviews Section */}
          <div className="mt-6 flex items-center gap-4 text-black text-sm border-t-2 border-gray-300 pt-4">
            <span
              className={`text-gray-600 cursor-pointer hover:text-red-600 transition-colors duration-200 ${
                showDescription ? "font-bold text-black" : ""
              }`}
              onClick={() => setShowDescription(true)}
            >
              Description
            </span>
            <span
              className={`text-gray-600 cursor-pointer hover:text-red-600 transition-colors duration-200 ${
                !showDescription ? "font-bold text-black" : ""
              }`}
              onClick={() => setShowDescription(false)}
            >
              Reviews (0)
            </span>
          </div>

          {/* Toggle between Description and Reviews */}
          {showDescription ? (
            <div>{/* Image with gray background */}</div>
          ) : (
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-black">
                Be the first to review “13 Ultrabook Gaming Laptop: Intel Core
                i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p
                120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB,
                Thunderbolt 4”
              </h2>
              <p className="text-gray-600">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form className="mt-4">
                <div>
                  <label className="block text-black font-medium">
                    Your rating *
                  </label>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-black font-medium">
                    Your review *
                  </label>
                  <textarea
                    className="w-full border border-gray-300 p-2 rounded-md"
                    rows={4}
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-black font-medium">Name *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-black font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
                  />
                </div>
                <div className="mt-4 flex items-center">
                  <input type="checkbox" id="save-info" className="mr-2" />
                  <label htmlFor="save-info" className="text-gray-700">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 text-white py-2 px-4 mt-4 rounded-md hover:bg-red-700"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-black mb-6">
            Related products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="p-4 rounded-lg cursor-pointer">
              <Image
                src={electronic1}
                alt="14'' FHD Ultrabook"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-black">
                14'' FHD Ultrabook
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                10th Gen Intel i7-10510U, 16GB RAM, 1TB PCIe SSD, Windows 11 Pro
              </p>
              <p className="text-red-600 text-xl font-bold">$1,099.00</p>
            </div>

            {/* Product 2 */}
            <div className=" p-4 rounded-lg cursor-pointer">
              <Image
                src={electronic2}
                alt="15.6'' Rugged Ultrabook"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-black">
                15.6'' Rugged Ultrabook
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                4K UHD - 3840 x 2160 - Intel Core i7 11th Gen, 32GB RAM, 1TB SSD
                - Carbon Gray
              </p>
              <p className="text-red-600 text-xl font-bold">$799.00</p>
            </div>

            {/* Product 3 */}
            <div className=" p-4 rounded-lg relative cursor-pointer">
              <Image
                src={electronic3}
                alt="15.6'' FHD Display Laptop"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded-full">
                Sale!
              </span>
              <h3 className="text-lg font-semibold text-black">
                15.6'' FHD Display Laptop
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Intel i7, Intel HD Graphics 6000, Webcam, WiFi, Bluetooth, HDMI,
                Windows 11, Grey
              </p>
              <p className="text-red-600 text-xl font-bold">$999.00</p>
              <p className="text-gray-500 text-sm line-through">$1,029.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
