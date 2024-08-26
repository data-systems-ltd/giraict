"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import StarRating from '../aircondition/starReview';

interface Product {
  name: string;
  description: string;
  images: {
    default: string;
    hover: string;
  };
  category: string;
  oldPrice?: number;
  currentPrice: number;
}
const products: Product[] = [
  {
    name: "Product 1",
    description: "Air Conditioner 5000 BTU, Efficient Cooling for Smaller Areas Like Bedrooms and Guest Room",
    images: {
      default: "/assets/electronic-store-category-image-06.jpg",
      hover: "/assets/conditioner1.jpg"
    },
    category: "Air Conditioners",
    oldPrice: 159.00,
    currentPrice: 139.00
  },
  {
    name: "Product 2",
    description: "BTU 115V Window-Mounted Air Conditioner with Remote Control White",
    images: {
      default: "/assets/electronic-store-category-image-06.jpg",
      hover: "/assets/conditioner1.jpg"
    },
    category: "Category 2",
    currentPrice: 179.00
  },
  {
    name: "Product 3",
    description: "Dual Hose Portable Air Conditioner, Dehumidifier, Fan with Activated Carbon Filter in Platinum",
    images: {
      default: "/assets/electronic-store-category-image-06.jpg",
      hover: "/assets/conditioner1.jpg"
    },
    category: "Category 3",
    currentPrice: 149.00
  },
  {
    name: "Product 4",
    description: "Star 9,500 BTU 115V Dual Inverter Window Air Conditioner with Wi-Fi Control",
    images: {
      default: "/assets/electronic-store-category-image-06.jpg",
      hover: "/assets/conditioner1.jpg"
    },
    category: "Category 4",
    currentPrice: 199.00
  },
  
];


const AirConditioner: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.currentPrice - b.currentPrice;
      case 'price-desc':
        return b.currentPrice - a.currentPrice;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const productsToDisplay = showAll ? sortedProducts : sortedProducts.slice(0, 4);

  return (
    <div className="flex flex-col ml-8 mr-4">
      <h1 className="text-4xl font-bold">Refregirator</h1>
      <p className='py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis velit, iaculis vel risus non, convallis rhoncus ligula. Vestibulum ut lorem posuere, malesuada neque et, placerat quam. 
      In hac habitasse platea dictumst. Sed bibendum porttitor sem, at sollicitudin orci placerat nec.</p>
      <div className="flex justify-between items-center my-4">
        <button
          className="text-red-600 hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More Results'}
        </button>
        <div className='flex items-center'>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className='rounded-md p-1'
          >
            <option value="">Default Sorting</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>
      <div className="flex flex-cols flex-wrap gap-4">
        {productsToDisplay.map((product, index) => (
          
          <div
          key={index}
            className="flex flex-col w-[300px] cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href={'/product'} key={index}>
            <div className="relative group">
              <Image
                src={product.images.default}
                alt={product.name}
                width={300}
                height={250}
                className={`w-full h-[250px] object-cover ${hoveredIndex === index ? 'hidden' : 'block'}`}
              />
              <Image
                src={product.images.hover}
                alt={product.name}
                width={300}
                height={250}
                className={`w-full h-[250px] object-cover ${hoveredIndex === index ? 'block' : 'hidden'} group-hover:block`}
              />
              <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ShoppingCart className="text-yellow-500" />
              </div>
            </div>
            </Link>
            <div className="mx-6 my-4">
              <StarRating review={0} onReviewChange={function (review: number): void {
                  throw new Error('Function not implemented.');
                } } />
              {/* <h2 className="text-2xl font-bold mt-2">{product.name}</h2> */}
              <p className="text-gray-700 mt-2">{product.description}</p>
              <div className="mt-4">
                {product.oldPrice && (
                  <span className="text-red-600 text-xl line-through mr-2">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-yellow-600 text-xl font-bold">
                  ${product.currentPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
  
        ))}
      </div>
    </div>
  );
};

export default AirConditioner;
