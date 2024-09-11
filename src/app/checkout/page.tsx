"use client"; // Add this at the very top
import React, { useState } from 'react'; // Import useState

const CheckoutPage = () => {
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    country: ""
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Process checkout with shippingDetails
  };

  return (
    <div className="container p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Shipping Details */}
        <div className="p-6 border rounded-lg bg-white">
          <h2 className="text-xl font-medium mb-4">Shipping Details</h2>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={shippingDetails.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={shippingDetails.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">City</label>
              <input
                type="text"
                name="city"
                value={shippingDetails.city}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={shippingDetails.zip}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Country</label>
            <input
              type="text"
              name="country"
              value={shippingDetails.country}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Payment Section */}
        <div className="p-6 border rounded-lg bg-white">
          <h2 className="text-xl font-medium mb-4">Payment</h2>
          <div className="mb-4">
            <label className="block mb-2">Card Number</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Expiration Date</label>
              <input type="text" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block mb-2">CVV</label>
              <input type="text" className="w-full p-2 border rounded" required />
            </div>
          </div>
          <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg">
            Complete Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
