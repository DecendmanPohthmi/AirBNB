import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <button 
          className="text-gray-700 hover:text-blue-500 font-medium cursor-pointer"
          onClick={() => navigate('/')}
        >
          HOME
        </button>
        <button className="text-gray-700 hover:text-blue-500 font-medium cursor-pointer">
          GUIDE
        </button>
        <button className="text-gray-700 hover:text-blue-500 font-medium cursor-pointer">
          HOME+GUIDE
        </button>
      </div>

      {/* Profile & Auth Links with Toggle */}
      <div className="relative">
        {/* Toggle Button */}
        <button
          onClick={toggleProfileMenu}
          className="flex items-center justify-center p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isProfileMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            <button 
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
              onClick={() => {
                navigate('/profile');
                setIsProfileMenuOpen(false);
              }}
            >
              Profile
            </button>
            <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150">
              Help Center
            </button>
            <hr className="my-2 border-gray-200" />
            <button className="w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-150">
              Login/Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}