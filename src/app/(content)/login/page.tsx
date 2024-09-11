'use client';
import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login with:', { email, password });
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Login with Google');
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic here
    console.log('Login with Facebook');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-gray-50 shadow-none rounded-lg p-6">
        {/* Title and Subtitle */}
        <div className="text-center mb-14">
          <h1 className="text-3xl font-bold mb-2">Welcome to Giraict</h1>
          <p className="text-gray-600">We’re delighted to be with you here</p>
        </div>
        {/* <h2 className="text-2xl font-semibold text-left mb-6">Login</h2> */}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-6">
          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            Login
          </button>
        </div>
        <div className="text-center mb-6">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <Link href="/signup" className="text-gray-900">
              Sign up
            </Link>
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <hr className="w-full border-gray-300" />
          <span className="px-4 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg bg-transparent text-gray-800 hover:bg-red-100 transition duration-300"
          >
            <FaGoogle size={20} className='text-red-600' />
            Google
          </button>

          <button
            onClick={handleFacebookLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg bg-transparent text-gray-800 hover:bg-blue-100 transition duration-300"
          >
            <FaFacebook size={20} className='text-blue-600' />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
