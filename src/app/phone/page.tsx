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

  return (
    <div className="flex flex-col ml-8 mr-4">
      <h1 className="text-4xl text-[#F5ED4D] font-bold">Smart Phone</h1>
      <p className='py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis velit, iaculis vel risus non, convallis rhoncus ligula. Vestibulum ut lorem posuere, malesuada neque et, placerat quam. 
        In hac habitasse platea dictumst. Sed bibendum porttitor sem, at sollicitudin orci placerat nec.</p>
      <div className="flex flex-cols flex-wrap gap-4">
        {products.map(product => (
          <div key={product._id} className="flex flex-wrap w-[300px] bg-white mb-4 rounded-lg shadow-lg">
            <img src={product.image.url} alt={product.productName} className="w-full h-[250px] object-cover rounded-lg" />
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
