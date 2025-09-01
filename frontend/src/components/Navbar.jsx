import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <button className="text-gray-700 hover:text-blue-500 font-medium">
          HOME
        </button>
        <button className="text-gray-700 hover:text-blue-500 font-medium">
          GUIDE
        </button>
        <button className="text-gray-700 hover:text-blue-500 font-medium">
          HOME+GUIDE
        </button>
      </div>

      {/* Profile & Auth Links */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700">
          Profile
        </button>
        <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700">
          Help Center
        </button>
        <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
          Login/Sign In
        </button>
      </div>
    </nav>
  );
}
