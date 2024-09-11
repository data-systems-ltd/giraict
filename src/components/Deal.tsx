"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import StarRating from '@/components/StarReview';

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
    description: "Air Conditioner 5000 BTU, Efficient Cooling for Smaller Areas Like Bedrooms and Guest Room",
    images: {
      default: "/assets/conditioners2.png",
      hover: "/assets/conditioner1.jpg"
    },
    category: "Air Conditioners",
    sale: "Sale!",
    oldPrice: 159.00,
    currentPrice: 139.00
  },
  {
    name: "Product 2",
    description: "BTU 115V Window-Mounted Air Conditioner with Remote Control White",
    images: {
      default: "/assets/conditioners2.png",
      hover: "/assets/conditioner1.jpg"
    },
    category: "Category 2",
    sale: "Sale!",
    oldPrice: 159.00,
    currentPrice: 179.00
  },
  {
    name: "Product 3",
    description: "Dual Hose Portable Air Conditioner, Dehumidifier, Fan with Activated Carbon Filter in Platinum",
    images: {
      default: "/assets/conditioners2.png",
      hover: "/assets/conditioner1.jpg"
    },
    category: "Category 3",
    sale: "Sale!",
    oldPrice: 159.00,
    currentPrice: 149.00
  },
  {
    name: "Product 4",
    description: "Star 9,500 BTU 115V Dual Inverter Window Air Conditioner with Wi-Fi Control",
    images: {
      default: "/assets/conditioners2.png",
      hover: "/assets/conditioner1.jpg"
    },
    category: "Category 4",
    sale: "Sale!",
    oldPrice: 159.00,
    currentPrice: 199.00
  },
  {
    name: "Product 1",
    description: "Air Conditioner 5000 BTU, Efficient Cooling for Smaller Areas Like Bedrooms and Guest Room",
    images: {
      default: "/assets/conditioners2.png",
      hover: "/assets/conditioner1.jpg"
    },
    category: "Air Conditioners",
    sale: "Sale!",
    oldPrice: 159.00,
    currentPrice: 139.00
  },
  {
    name: "Product 2",
    description: "BTU 115V Window-Mounted Air Conditioner with Remote Control White",
    images: {
      default: "/assets/conditioners2.png",
      hover: "/assets/conditioner1.jpg"
    },
    category: "Category 2",
    sale: "Sale!",
    oldPrice: 159.00,
    currentPrice: 179.00
  },
  {
    name: "Product 3",
    description: "Dual Hose Portable Air Conditioner, Dehumidifier, Fan with Activated Carbon Filter in Platinum",
    images: {
      default: "/assets/conditioners2.png",
      hover: "/assets/conditioner1.jpg"
    },
    category: "Category 3",
    sale: "Sale!",
    oldPrice: 159.00,
    currentPrice: 149.00
  },
  {
    name: "Product 4",
    description: "Star 9,500 BTU 115V Dual Inverter Window Air Conditioner with Wi-Fi Control",
    images: {
      default: "/assets/conditioners2.png",
      hover: "/assets/conditioner1.jpg"
    },
    category: "Category 4",
    sale: "Sale!",
    oldPrice: 159.00,
    currentPrice: 199.00
  },
];

const Deal: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 mt-8 border-2 border-gray-200 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Today's Best Deal</h2>
      <div className="flex flex-wrap justify-between gap-4">
        {products.map((product, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 && (
              <div className="flex flex-col sm:flex-row w-full gap-4 lg:w-[49%]">
                <div
                  className="relative flex flex-col w-full cursor-pointer overflow-hidden group"
                >
                  <div
                    className="justify-center items-center p-2"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link href={'/product'} className="block w-full h-full">
                      <div className="relative w-full h-[300px] bg-[#f7f7f9] flex items-center justify-center overflow-hidden">
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
                          <h3 className="absolute top-2 left-2 bg-white text-gray-600 px-2 py-1 text-sm rounded-full cursor-pointer">
                            {product.sale}
                          </h3>
                        )}
                        <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ShoppingCart className="text-yellow-500" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="mx-2 my-2">
                    <StarRating review={0} onReviewChange={() => { /* handle rating change */ }} />
                    <p className="text-gray-700 mt-1">{product.description}</p>
                    <div className="mt-2">
                      {product.oldPrice && (
                        <span className="text-gray-600 text-xl line-through mr-2">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-yellow-600 text-xl font-bold">
                        ${product.currentPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {products[index + 1] && (
                  <div
                    className="relative flex flex-col w-full cursor-pointer overflow-hidden group"
                  >
                    <div
                      className="justify-center items-center p-2"
                      onMouseEnter={() => setHoveredIndex(index + 1)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Link href={'/product'} className="block w-full h-full">
                        <div className="relative w-full h-[300px] bg-[#f7f7f9] flex items-center justify-center overflow-hidden">
                          <Image
                            src={products[index + 1]?.images.default ?? ''}
                            alt={products[index + 1]?.name ?? 'Product'}
                            layout="fill"
                            objectFit="cover"
                            className={`transition-opacity duration-300 ${hoveredIndex === index + 1 ? 'opacity-0' : 'opacity-100'}`}
                          />
                          <Image
                            src={products[index + 1]?.images.hover ?? ''}
                            alt={products[index + 1]?.name ?? 'Product'}
                            layout="fill"
                            objectFit="cover"
                            className={`transition-opacity duration-300 ${hoveredIndex === index + 1 ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
                          />
                          {products[index + 1]?.sale && (
                            <h3 className="absolute top-2 left-2 bg-white text-gray-600 px-2 py-1 text-sm rounded-full cursor-pointer">
                              {products[index + 1]?.sale}
                            </h3>
                          )}
                          <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ShoppingCart className="text-yellow-500" />
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="mx-2 my-2">
                      <StarRating review={0} onReviewChange={() => { /* handle rating change */ }} />
                      <p className="text-gray-700 mt-1">{products[index + 1]?.description ?? 'No description available'}</p>
                      <div className="mt-2">
                        {products[index + 1]?.oldPrice && (
                          <span className="text-gray-600 text-xl line-through mr-2">
                            ${products[index + 1]?.oldPrice?.toFixed(2)}
                          </span>
                        )}
                        <span className="text-yellow-600 text-xl font-bold">
                          ${products[index + 1]?.currentPrice?.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Deal;
