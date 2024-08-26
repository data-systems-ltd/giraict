"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import electronic2 from "../../assets/electronic1.jpg";
import electronic1 from '../../assets/conditioner1.jpg';
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
    description: "4K Digital Camera, 12-32mm and 45-150mm Lens Bundle, 16 Megapixel Kit, 5 Axis In-Body Dual Image Stabilization, Black",
    images: {
      default: "/assets/gadget1.jpg",
      hover: "/assets/gargets3.jpg"
    },
    category: "Air Conditioners",
    currentPrice: 799.00
  },
  {
    name: "Product 2",
    description: "5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey",
    images: {
      default: "/assets/electroni.png",
      hover: "/assets/gargets3.jpg"
    },
    category: "Category 2",
    sale: "Sale!",
    oldPrice: 1099.00,
    currentPrice: 999.00
  },
  {
    name: "Product 3",
    description: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    images: {
      default: "/assets/electpurle.png",
      hover: "/assets/gargets3.jpg"
    },
    category: "Category 3",
    sale: "Sale!",
    oldPrice: 1299.00,
    currentPrice: 1199.00
  },
  {
    name: "Product 4",
    description: "Android Tablet 10.5” LCD Screen 64GB Storage Long-Lasting Battery Kids Content Smart Switch Expandable Memory",
    images: {
      default: "/assets/gargets3.jpg",
      hover: "/assets/electronic3.jpg"
    },
    category: "Category 4",
    currentPrice: 599.00
  },
  {
    name: "Product 5",
    description: "Mirrorless Vlogging Camera Polaroid Kit with EF-M 15-45mm Lens, Black",
    images: {
      default: "/assets/electroni.png",
      hover: "/assets/gargets3.jpg"
    },
    category: "Category 5",
    currentPrice: 599.00
  },
  {
    name: "Product 6",
    description: "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
    images: {
      default: "/assets/electpurle.png",
      hover: "/assets/gargets3.jpg"
    },
    category: "Category 6",
    sale: "Sale!",
    oldPrice: 1299.00,
    currentPrice: 659.00
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
      <h1 className="text-4xl font-bold">Gadgets</h1>
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
          key={index}
            className="relative flex flex-col w-[300px] cursor-pointer overflow-hidden group"
            
          >
            <div 
            className="bg-blsck justify-center items-center p-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            key={index}
            >
            <Link href={'/product'} className="block w-full h-full">
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
                    <h3 className='absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded-full cursor-pointer'>
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
