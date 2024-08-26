import Image from 'next/image';
import React from 'react';

const Brand: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6">
        {/* First Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/electronic-store-promotional-banner-2.jpg"
            alt="Brand 1"
            layout="responsive"
            width={600} // Replace with the actual width of the image
            height={400} // Replace with the actual height of the image
            className="object-cover"
          />
        </div>

        {/* Second Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/electronic-store-promotional-banner-1.jpg"
            alt="Brand 2"
            layout="responsive"
            width={600} // Replace with the actual width of the image
            height={400} // Replace with the actual height of the image
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
