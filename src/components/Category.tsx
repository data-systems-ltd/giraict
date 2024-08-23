import React from 'react';
import Link from 'next/link'



const categories = [
  {
    title: 'Air Conditioner',
    products: 4,
    image: '/electronic-store-category-image-06.jpg',
  },
  {
    title: 'Audio & Video',
    products: 5,
    image: '/electronic-store-category-image-08.jpg',
  },
  {
    title: 'Gadgets',
    products: 2,
    image: '/electronic-store-category-image-02.jpg',
  },
  {
    title: 'Home Appliance',
    products: 5,
    image: '/electronic-store-category-image-07.jpg',
  },
  {
    title: 'Kitchen Appliance',
    products: 6,
    image: '/electronic-store-category-image-05.jpg',
  },
  {
    title: 'PC & Laptop',
    products: 4,
    image: '/electronic-store-category-image-03.jpg',
  },
  {
    title: 'Refrigerator',
    products: 4,
    image: '/electronic-store-category-image-04.jpg',
  },
  {
    title: 'Smart Home',
    products: 5,
    image: '/electronic-store-category-image-01.jpg',
  },
];

const Category = () => {
  return (
    <div className="container mx-auto px-12 mt-24 border border-gray-200 rounded-lg">
      <div className="flex flex-wrap -mx-4">
        {categories.map((category, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full">
              <Link href="/Category">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4 flex flex-col h-full">
                <div className="flex flex-col ml-[80px] mt-[-60px]">
                  <Link href="/Category">
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </Link>
                  <Link href="/Category">
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
