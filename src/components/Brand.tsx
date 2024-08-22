import React from 'react';

const Brand = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6">
        {/* First Image */}
        <div className="relative w-full md:w-1/2">
          <img
            src="/electronic-store-promotional-banner-2.jpg"
            alt="Brand 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second Image */}
        <div className="relative w-full md:w-1/2">
          <img
            src="/electronic-store-promotional-banner-1.jpg"
            alt="Brand 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
