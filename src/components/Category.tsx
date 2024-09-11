import React from 'react';
import Link from 'next/link'



const categories = [
  {
    title: 'Air Conditioner',
    products: 4,
    href: '/aircondition',
    image: '/electronic-store-category-image-06.jpg',
  },
  {
    title: 'Audio & Video',
    products: 5,
    href: '/audio&video',
    image: '/electronic-store-category-image-08.jpg',
  },
  {
    title: 'Gadgets',
    products: 2,
    href: '/gadgets',
    image: '/electronic-store-category-image-02.jpg',
  },
  {
    title: 'Home Appliance',
    products: 5,
    href: '/homeAppliances',
    image: '/electronic-store-category-image-07.jpg',
  },
  {
    title: 'Kitchen Appliance',
    products: 6,
    href: '/kitchen',
    image: '/electronic-store-category-image-05.jpg',
  },
  {
    title: 'PC & Laptop',
    products: 4,
    href: '/computer',
    image: '/electronic-store-category-image-03.jpg',
  },
  {
    title: 'Refrigerator',
    products: 4,
    href: '/refregirator',
    image: '/electronic-store-category-image-04.jpg',
  },
  {
    title: 'Smart Home',
    products: 5,
    href: '/phone',
    image: '/electronic-store-category-image-01.jpg',
  },
];

const Category = () => {
  return (
    <div className="container mx-auto px-12 mt-24 border border-gray-200 rounded-lg">
       <h2 className="text-2xl font-bold mb-4  mt-11 ml-4">Categories</h2>
      <div className="flex flex-wrap -mx-4 mt-14">
        {categories.map((category, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4">
            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full">
              <Link href={'./product'}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4 flex flex-col h-full">
                <div className="flex flex-col ml-[80px] mt-[-60px]">
                  <Link href={'./product'}>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </Link>
                  <Link href={'./product'}>
                    <span className="text-sm text-gray-600">{category.products} Products</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
