import Image from 'next/image';
import Link from 'next/link';
import { IoIosBasket } from "react-icons/io";
import { ShoppingCart, Search } from 'lucide-react';
import LL from "../assets/Logo.jpeg";
const Landing = () => {
  return (
    <nav className="bg-[#00080F] text-white p-4 flex flex-col md:flex-row items-center justify-between lg:px-8">
      <div className="hidden md:flex flex-1 items-center justify-between mx-4">
        <div className="flex items-center pl-24">
          <Link href="/">
            <Image src={LL} alt="Logo" width={120} height={40} />
          </Link>
        </div>
        <div className="relative w-full max-w-md mx-4">
          <input
            type="text"
            placeholder="Search product..."
            className="w-full py-2 pl-10 pr-4 rounded-md bg-[#00080F] text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
            <Search size={20} />
          </div>
          
        </div>
        <div className="flex items-center pr-24 space-x-4">
          <Link href="/shop">
            <div className="flex items-center text-white hover:text-yellow-500">
              <IoIosBasket size={30} color="white" /> 
            </div>
          </Link>
          <Link href="/login">
            <div className="flex items-center text-white hover:text-yellow-500">
              <span className="ml-2">Login</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center w-full">
        <div className="flex justify-between w-full px-4 mb-4">
          <Link href="/">
            <Image src="/logo.jpeg" alt="Logo" width={120} height={40} />
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/shop">
              <div className="flex items-center text-white hover:text-yellow-500">
                <IoIosBasket size={30} />
              </div>
            </Link>
            <Link href="/login">
              <div className="flex items-center text-white hover:text-yellow-500">
                <span className="ml-2">Login</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-center px-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search product..."
              className="w-full py-2 pl-10 pr-4 rounded-md bg-[#00080F] text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
              <Search size={20} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Landing;
