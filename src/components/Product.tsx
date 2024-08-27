"use client";

import Image from "next/image";
import { useState } from "react";
import electronic1 from "../assets/electronic1.jpg";
import electronic2 from "../assets/electronic2.jpg";
import electronic3 from "../assets/electronic3.jpg";
import electronic4 from "../assets/electronic4.jpg";
import { IoCartSharp } from "react-icons/io5";
import Landing from "./Landing";
import Footer from "./Footer";
import Link from "next/link";

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
  const [isButtonVisible, setButtonVisible] = useState(false);

  // Toggle button visibility
  const handleIconClick = () => {
    setButtonVisible(!isButtonVisible);
  };

  return (
    <div>
      <Landing />

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-2">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 border-b border-gray-300 md:border-b-0 md:border-r p-4 md:p-8">
          <div>
            <h1 className="text-2xl font-semibold mb-4">Category</h1>
            <ul className="space-y-2">
              <li>
                <Link href="/aircondition">Air Conditioner</Link>
              </li>
              <li>
                <Link href="/audio&video">Audio & Video</Link>
              </li>
              <li>
                <Link href="/gadgets">Gadgets</Link>
              </li>
              <li>
                <Link href="/homeAppliances">Home Appliances</Link>
              </li>
              <li>
                <Link href="/kitchen">Kitchen Appliances</Link>
              </li>
              <li>
                <Link href="/computer">PCs & Laptop</Link>
              </li>
              <li>
                <Link href="/refrigerator">Refrigerator</Link>
              </li>
              <li>
                <Link href="/phone">Smart Home</Link>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-semibold mb-4">Filter by Price</h1>
            {/* Additional filter elements here */}
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">Average Rating</h1>
            {/* Additional rating elements here */}
          </div>
        </aside>

        {/* Product Content */}
        <div className="w-full md:w-3/4 p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side: Image */}
            <div className="md:w-1/2">
              <div className="relative">
                <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded-full">
                  Sale!
                </span>
                <Image
                  src={mainImage}
                  alt="Product Image"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between mt-4">
                {[electronic1, electronic2, electronic3, electronic4].map(
                  (img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Product side ${index + 1}`}
                      className="w-1/5 cursor-pointer rounded-lg hover:opacity-75 transition-opacity duration-200"
                      onClick={() => setMainImage(img)}
                    />
                  )
                )}
              </div>
            </div>

            {/* Right side: Product Details */}
            <div className="md:w-1/2">
              <div className="text-gray-600 text-sm mb-2">
                <Link href="/">Home</Link> /{" "}
                <Link href="/computer">PCs & Laptop</Link>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                13" Ultrabook Gaming Laptop: Intel Core i7-1165G7, NVIDIA
                GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB
                SSD
              </h1>
              <div className="mt-4">
                <span className="text-red-600 text-xl line-through">
                  $1,499.00
                </span>
                <span className="text-yellow-600 text-2xl font-bold ml-2">
                  $1,399.00
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  Key Features
                </h2>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Newest technology</li>
                  <li>Best in class components</li>
                  <li>Dimensions - 69.5 x 75.0 x 169.0</li>
                  <li>Maintenance free</li>
                  <li>12 years warranty</li>
                </ul>
              </div>
              <div className="mt-6 flex items-center">
                <button className="bg-gray-200 text-gray-700 px-4 py-2">
                  -
                </button>
                <input
                  type="text"
                  value="1"
                  className="w-12 text-center border-2 border-gray-300 mx-2"
                  readOnly
                />
                <button className="bg-gray-200 text-gray-700 px-4 py-2">
                  +
                </button>
                <button className="bg-red-600 text-white ml-4 py-2 px-6 rounded-md hover:bg-red-700 transition-colors">
                  Add to cart
                </button>
              </div>
              <div className="mt-4 text-gray-600 text-sm border-t border-gray-300 pt-4">
                Category: <span className="text-gray-900">PCs & Laptop</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-4 text-gray-600 text-sm border-t-2 border-gray-300 pt-4">
              <span
                className={`cursor-pointer hover:text-red-600 transition-colors duration-200 ${
                  showDescription ? "font-bold text-gray-900" : ""
                }`}
                onClick={() => setShowDescription(true)}
              >
                Description
              </span>
              <span
                className={`cursor-pointer hover:text-red-600 transition-colors duration-200 ${
                  !showDescription ? "font-bold text-gray-900" : ""
                }`}
                onClick={() => setShowDescription(false)}
              >
                Reviews (0)
              </span>
            </div>

            {showDescription ? (
              <div className="mt-4 text-gray-700">
                <p>
                  This 13" Ultrabook Gaming Laptop is a powerhouse of
                  performance. With the latest Intel Core i7-1165G7 and NVIDIA
                  GeForce GTX 1650 Ti Max-Q, this laptop delivers top-notch
                  gaming and productivity experiences. The 13.3" 1080p display
                  offers vibrant visuals at 120Hz, making every action feel
                  smooth and responsive. Designed with portability in mind, it’s
                  the perfect companion for gamers and professionals alike.
                </p>
              </div>
            ) : (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  Be the first to review “13 Ultrabook Gaming Laptop”
                </h2>
                <p className="text-gray-600">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form className="mt-4">
                  <div>
                    <label className="block text-gray-800 font-medium">
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
                    <label className="block text-gray-800 font-medium">
                      Your review *
                    </label>
                    <textarea
                      className="w-full border border-gray-300 p-2 rounded-md"
                      rows={4}
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-800 font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-800 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* related product */}
<div className="mt-12 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h2 className="text-2xl font-semibold text-black mb-6">
    Related products
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Product 1 */}
    <div className="p-4 rounded-lg cursor-pointer group relative">
      <Image
        src={electronic1}
        alt="15'' UHD Gaming Laptop"
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
      />
      <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded-full">
        Sale!
      </span>
      <div className="absolute top-2 right-2 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Add to Cart Button */}
        {isButtonVisible && (
          <button
            className="bg-yellow-600 text-white px-2 py-2 rounded-s-sm shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              /* Handle add to cart logic */
            }}
          >
            Add to Cart
          </button>
        )}
        <IoCartSharp
          className="text-3xl text-yellow-600 cursor-pointer"
          onClick={handleIconClick}
        />
      </div>
      <h3 className="text-lg font-medium text-black mb-2">
        15 UHD Gaming Laptop
      </h3>
      <p className="text-gray-700 text-base mb-2">
        10th Gen Intel i7-10510U, 16GB RAM, 1TB PCIe SSD, Windows 11 Pro
      </p>
      <p className="text-yellow-600 text-2xl font-bold">$1,399.00</p>
      <p className="text-red-600 text-sm line-through">$1,029.00</p>
    </div>

    {/* Product 2 */}
    <div className="p-4 rounded-lg cursor-pointer group relative">
      <Image
        src={electronic2}
        alt="15'' UHD Gaming Laptop"
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
      />
      <div className="absolute top-2 right-2 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
        {/* Add to Cart Button */}
        {isButtonVisible && (
          <button
            className="bg-yellow-600 text-white px-2 py-2 rounded-s-sm shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              /* Handle add to cart logic */
            }}
          >
            Add to Cart
          </button>
        )}
        <IoCartSharp
          className="text-3xl text-yellow-600 cursor-pointer"
          onClick={handleIconClick}
        />
      </div>
      <h3 className="text-lg font-medium text-black mb-2">
        15 UHD Gaming Laptop
      </h3>
      <p className="text-gray-700 text-base mb-2">
        10th Gen Intel i7-10510U, 16GB RAM, 1TB PCIe SSD, Windows 11 Pro
      </p>
      <p className="text-yellow-600 text-2xl font-bold">$1,399.00</p>
    </div>

    {/* Product 3 */}
    <div className="p-4 rounded-lg cursor-pointer group relative">
      <Image
        src={electronic3}
        alt="15'' UHD Gaming Laptop"
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
      />
      <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded-full">
        Sale!
      </span>
      <div className="absolute top-2 right-2 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <IoCartSharp className="text-3xl text-yellow-600" />
      </div>
      <h3 className="text-lg font-medium text-black mb-2">
        15 UHD Gaming Laptop
      </h3>
      <p className="text-gray-700 text-base mb-2">
        10th Gen Intel i7-10510U, 16GB RAM, 1TB PCIe SSD, Windows 11 Pro
      </p>
      <p className="text-yellow-600 text-2xl font-bold">$1,399.00</p>
      <p className="text-red-600 text-sm line-through">$1,029.00</p>
    </div>
    
    {/* Product 4 */}
    <div className="p-4 rounded-lg cursor-pointer group relative">
      <Image
        src={electronic3}
        alt="15'' UHD Gaming Laptop"
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
      />
      <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded-full">
        Sale!
      </span>
      <div className="absolute top-2 right-2 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <IoCartSharp className="text-3xl text-yellow-600" />
      </div>
      <h3 className="text-lg font-medium text-black mb-2">
        15 UHD Gaming Laptop
      </h3>
      <p className="text-gray-700 text-base mb-2">
        10th Gen Intel i7-10510U, 16GB RAM, 1TB PCIe SSD, Windows 11 Pro
      </p>
      <p className="text-yellow-600 text-2xl font-bold">$1,399.00</p>
      <p className="text-red-600 text-sm line-through">$1,029.00</p>
    </div>
    {/* Product 2 */}
    <div className="p-4 rounded-lg cursor-pointer group relative">
      <Image
        src={electronic2}
        alt="15'' UHD Gaming Laptop"
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
      />
      <div className="absolute top-2 right-2 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
        {/* Add to Cart Button */}
        {isButtonVisible && (
          <button
            className="bg-yellow-600 text-white px-2 py-2 rounded-s-sm shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              /* Handle add to cart logic */
            }}
          >
            Add to Cart
          </button>
        )}
        <IoCartSharp
          className="text-3xl text-yellow-600 cursor-pointer"
          onClick={handleIconClick}
        />
      </div>
      <h3 className="text-lg font-medium text-black mb-2">
        15 UHD Gaming Laptop
      </h3>
      <p className="text-gray-700 text-base mb-2">
        10th Gen Intel i7-10510U, 16GB RAM, 1TB PCIe SSD, Windows 11 Pro
      </p>
      <p className="text-yellow-600 text-2xl font-bold">$1,399.00</p>
    </div>
    {/* Product 2 */}
    <div className="p-4 rounded-lg cursor-pointer group relative">
      <Image
        src={electronic2}
        alt="15'' UHD Gaming Laptop"
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
      />
      <div className="absolute top-2 right-2 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
        {/* Add to Cart Button */}
        {isButtonVisible && (
          <button
            className="bg-yellow-600 text-white px-2 py-2 rounded-s-sm shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              /* Handle add to cart logic */
            }}
          >
            Add to Cart
          </button>
        )}
        <IoCartSharp
          className="text-3xl text-yellow-600 cursor-pointer"
          onClick={handleIconClick}
        />
      </div>
      <h3 className="text-lg font-medium text-black mb-2">
        15 UHD Gaming Laptop
      </h3>
      <p className="text-gray-700 text-base mb-2">
        10th Gen Intel i7-10510U, 16GB RAM, 1TB PCIe SSD, Windows 11 Pro
      </p>
      <p className="text-yellow-600 text-2xl font-bold">$1,399.00</p>
    </div>
    {/* Product 2 */}
    <div className="p-4 rounded-lg cursor-pointer group relative">
      <Image
        src={electronic2}
        alt="15'' UHD Gaming Laptop"
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
      />
      <div className="absolute top-2 right-2 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
        {/* Add to Cart Button */}
        {isButtonVisible && (
          <button
            className="bg-yellow-600 text-white px-2 py-2 rounded-s-sm shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              /* Handle add to cart logic */
            }}
          >
            Add to Cart
          </button>
        )}
        <IoCartSharp
          className="text-3xl text-yellow-600 cursor-pointer"
          onClick={handleIconClick}
        />
      </div>
      <h3 className="text-lg font-medium text-black mb-2">
        15 UHD Gaming Laptop
      </h3>
      <p className="text-gray-700 text-base mb-2">
        10th Gen Intel i7-10510U, 16GB RAM, 1TB PCIe SSD, Windows 11 Pro
      </p>
      <p className="text-yellow-600 text-2xl font-bold">$1,399.00</p>
    </div>
    {/* Product 2 */}
    <div className="p-4 rounded-lg cursor-pointer group relative">
      <Image
        src={electronic2}
        alt="15'' UHD Gaming Laptop"
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
      />
      <div className="absolute top-2 right-2 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
        {/* Add to Cart Button */}
        {isButtonVisible && (
          <button
            className="bg-yellow-600 text-white px-2 py-2 rounded-s-sm shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              /* Handle add to cart logic */
            }}
          >
            Add to Cart
          </button>
        )}
        <IoCartSharp
          className="text-3xl text-yellow-600 cursor-pointer"
          onClick={handleIconClick}
        />
      </div>
      <h3 className="text-lg font-medium text-black mb-2">
        15 UHD Gaming Laptop
      </h3>
      <p className="text-gray-700 text-base mb-2">
        10th Gen Intel i7-10510U, 16GB RAM, 1TB PCIe SSD, Windows 11 Pro
      </p>
      <p className="text-yellow-600 text-2xl font-bold">$1,399.00</p>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
}

export default Product;
