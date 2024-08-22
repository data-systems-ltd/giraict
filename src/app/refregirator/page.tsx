"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import electronic2 from "../../assets/electronic1.jpg";
import electronic1 from '../../assets/conditioner1.jpg';

interface Product {
  _id: string;
  productName: string;
  price: number;
  description: string;
  category: string;
  image: {
    url: string;
  };
}

const AirConditioner: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://pizza-shop-app.onrender.com/products/productList");
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name-asc':
        return a.productName.localeCompare(b.productName);
      case 'name-desc':
        return b.productName.localeCompare(a.productName);
      default:
        return 0;
    }
  });

  // Determine the number of products to display based on showAll state
  const productsToDisplay = showAll ? sortedProducts : sortedProducts.slice(0, 4);

  return (
    <div className="flex flex-col ml-8 mr-4">
      <h1 className="text-4xl text-[#F5ED4D] font-bold">REFRIGERATOR</h1>
      <p className='py-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis velit, iaculis vel risus non, convallis rhoncus ligula. Vestibulum ut lorem posuere, malesuada neque et, placerat quam. 
        In hac habitasse platea dictumst. Sed bibendum porttitor sem, at sollicitudin orci placerat nec.
      </p>
      <div className="flex justify-between items-center my-4">
      <button
          className="text-blue-500 hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More Results'}
        </button>
        <div className='flex items-center'>
          <label htmlFor="sort" className='mr-2'>Sort By:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className='border border-gray-300 rounded-md p-1'
          >
            <option value="">Select</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>
      <div className="flex flex-cols flex-wrap gap-4">
        {products.map(product => (
            <Link href={'/components/Product'} key={product._id}>
          <div key={product._id} className="flex flex-wrap w-[300px] ">
            <div className="relative group">
              <Image
                src={electronic1}
                alt="electronic1"
                width={300}
                height={250}
                className="w-full h-[250px] object-cover group-hover:hidden"
              />
              <Image
                src={electronic2}
                alt="electronic2"
                width={300}
                height={250}
                className="w-full h-[250px] object-cover hidden group-hover:block"
              />
              <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                <ShoppingCart className="text-yellow-500" />
              </div>
            </div>
            <div className="mx-6 my-4">
              <h2 className="text-2xl font-bold mt-2">0.9 Cubic Feet Capacity 900 Watts Kitchen Essentials for the Countertop Stainless Steel</h2>
              <div className="mt-4">
                <span className="text-red-600 text-xl line-through">
                  $1,499.00
                </span>
                <span className="text-yellow-600 text-2xl font-bold ml-2">
                  $1,399.00
                </span>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AirConditioner;
