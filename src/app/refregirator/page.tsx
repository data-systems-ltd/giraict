// components/AirConditioner.tsx
"use client";
import React, { useEffect, useState } from 'react';

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
        // Ensure error is of type Error and extract its message
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

  const productsToDisplay = showAll ? sortedProducts : sortedProducts.slice(0, 4);

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div className="flex flex-col ml-8 mr-4">
      <h1 className="text-4xl text-[#F5ED4D] font-bold">REFRIGIRATOR</h1>
      <p className='py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis velit, iaculis vel risus non, convallis rhoncus ligula. Vestibulum ut lorem posuere, malesuada neque et, placerat quam. 
        In hac habitasse platea dictumst. Sed bibendum porttitor sem, at sollicitudin orci placerat nec.</p>
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
          <div key={product._id} className="flex flex-wrap w-[300px] ">
            <img src={product.image.url} alt={product.productName} className="w-full h-[250px] object-cover" />
            <div className="mx-6 my-4">
            <h2 className="text-xl font-bold mt-2">{product.productName}</h2>
            <p className="text-sm text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis velit, iaculis vel risus non, convallis rhoncus ligula. Vestibulum ut lorem posuere, malesuada neque et, placerat quam. 
            In hac habitasse platea dictumst. Sed bibendum porttitor sem, at sollicitudin orci placerat nec{product.description}</p>
            <p className="text-lg text-gray-600">RWF {product.price}</p>
            {/* <p className="text-sm text-green-500 font-bold mt-2">Category: {product.category}</p> */}
            {/* <button
              className="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirConditioner;
