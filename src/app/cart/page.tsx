"use client"; // Add this at the very top
import React, { useState } from 'react'; // Import useState
import Link from "next/link";

const CartPage = () => {
  // Mock cart items data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      category: "Air Conditioners",
      description: "BTU 115V Window-Mounted Air Conditioner with Remote Control White",
      price: 12.99,
      quantity: 2,
      image: "assets/electronic1.jpg"
    },
    {
      id: 2,
      category: "Air Conditioners",
      description: "Air Conditioner 5000 BTU, Efficient Cooling for Smaller Areas Like Bedrooms and Guest Room",
      price: 25.99,
      quantity: 1,
      image: "assets/electronic2.jpg"
    }
  ]);

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Increment quantity function
  const incrementQuantity = (itemId: number) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  // Decrement quantity function
  const decrementQuantity = (itemId: number) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  // Remove item from cart
  const removeItem = (itemId: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  return (
    <div className="container p-8">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 p-4 border rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-20 h-20 object-cover"
                />
                <div className=''>
                  <h1 className="text-lg font-medium">{item.category}</h1>
                  <p className='text-gray-700 mt-2'>{item.description}</p>
                  <h2 className="text-gray-500 text-lg">Price: ${item.price}</h2>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded-l-lg"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
                <p className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-2">
              <p>Total Items</p>
              <p>{cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Total Price</p>
              <p>${calculateTotal()}</p>
            </div>
            {/* Proceed to Checkout Link */}
            <Link href="/checkout" className="block w-full bg-red-600 text-white py-2 rounded-lg text-center">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
