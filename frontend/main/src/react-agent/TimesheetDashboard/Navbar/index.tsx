
import React from 'react';
import {} from '@react-agent/shadcn-ui'

export interface NavBarProps {
  logo: string;
};

const NavBar = (props: NavBarProps) => {
  return (
    <div className="flex justify-between p-6 bg-blue-500">
      <div className="flex items-center space-x-4">
        <img src={props.logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-2xl text-white">Company Name</h1>
      </div>
      <div className="flex items-center space-x-6">
        <a href="/" className="text-xl text-white hover:text-gray-200">Home</a>
        <a href="/products" className="text-xl text-white hover:text-gray-200">Products</a>
        <a href="/about" className="text-xl text-white hover:text-gray-200">About Us</a>
        <a href="/contact" className="text-xl text-white hover:text-gray-200">Contact Us</a>
      </div>
    </div>
  );
};

export default NavBar;
