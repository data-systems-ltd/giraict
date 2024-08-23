"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import electronic2 from "../../assets/electronic1.jpg";
import electronic1 from '../../assets/conditioner1.jpg';
import Product from '@/components/Product';
import StarRating from '../aircondition/starReview';

// interface Product {
//   _id: string;
//   productName: string;
//   price: number;
//   description: string;
//   category: string;
//   image: {
//     url: string;
//   };
// }

interface Product {
  name: string;
  description: string;
  images: {
    default: string;
    hover: string;
  };
  category: string;
  sale?: string;
  oldPrice?: number;
  currentPrice: number;
}
const products: Product[] = [
  {
    name: "Product 1",
    description: "13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",
    images: {
      default: "/assets/electronicre1.png",
      hover: "/assets/electronic3.jpg"
    },
    category: "Air Conditioners",
    sale: "Sale!",
    oldPrice: 1499.00,
    currentPrice: 1399.00
  },
  {
    name: "Product 2",
    description: "14 FHD Ultrabook (400 nits) with 10th Gen Intel i7-10510U Processor up to 4.90 GHz, 1 TB PCIe SSD, 16GB RAM, and Windows 11 Pro",
    images: {
      default: "/assets/ele.png",
      hover: "/assets/electronic3.jpg"
    },
    category: "Category 2",
    currentPrice: 1099.00
  },
  {
    name: "Product 3",
    description: "15.6 FHD Display Laptop – Intel i7 – Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey",
    images: {
      default: "/assets/electronic1.jpg",
      hover: "/assets/electronic3.jpg"
    },
    category: "Category 3",
    sale: "Sale!",
    oldPrice: 1029.00,
    currentPrice: 999.00
  },
  {
    name: "Product 4",
    description: "15.6 Rugged Ultrabook  4K UHD  3840 x 2160  Intel Core i7 11th Gen i7-1195G7 2.90 GHz  32 GB RAM  1 TB SSD  Carbon Gray",
    images: {
      default: "/assets/electronicr.png",
      hover: "/assets/electronic3.jpg"
    },
    category: "Category 4",
    currentPrice: 799.00
  },
  
];


const Computer: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("https://pizza-shop-app.onrender.com/products/productList");
  //       if (!res.ok) {
  //         throw new Error(`Error: ${res.statusText}`);
  //       }
  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         setError(error.message);
  //       } else {
  //         setError("An unknown error occurred");
  //       }
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

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
      <h1 className="text-4xl font-bold">PCS & LAPTOP</h1>
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
          {/* <label htmlFor="sort" className='mr-2'>Sort By:</label> */}
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className='rounded-md p-1'
          >
            <option value="">Defaul Sorting</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {productsToDisplay.map((product, index) => (
          <div
            className="relative flex flex-col w-[300px] cursor-pointer overflow-hidden group"
            
          >
            <div 
            className="bg-blsck justify-center items-center p-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            key={index}
            >
            <Link href={'/Product'} className="block w-full h-full">
              <div className="relative w-full h-[250px] bg-[#f7f7f9] flex items-center justify-center overflow-hidden">
                <Image
                  src={product.images.default}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className={`transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}
                />
                <Image
                  src={product.images.hover}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className={`transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
                />
                {product.sale && (
                    <h3 className='absolute top-2 text-sm left-2 px-2 py-1 bg-white rounded-full'>
                      {product.sale}
                    </h3>
                  )}
                <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ShoppingCart className="text-yellow-500" />
                </div>
              </div>
            </Link>
            </div>
            <div className="mx-6 my-4">
              <StarRating review={0} onReviewChange={() => { /* handle rating change */ }} />
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

export default Computer;
