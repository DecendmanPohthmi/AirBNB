import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      {/* Main Footer Content */}
      <div className="px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Brand / About */}
          <div>
            <h5 className="font-bold text-xl text-gray-900 mb-3">CampSpot</h5>
            <p className="text-gray-600 text-sm leading-relaxed">
              Explore Meghalaya's mystical landscapes 🏔️<br />
              Discover living root bridges, waterfalls, and caves. Experience the abode of clouds with authentic local guides.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-semibold text-gray-900 mb-3">Quick Links</h6>
            <div className="flex flex-col space-y-2">
              <button className="text-gray-600 hover:text-blue-500 text-sm transition-colors duration-200 text-left">
                About Us
              </button>
              <button className="text-gray-600 hover:text-blue-500 text-sm transition-colors duration-200 text-left">
                Destinations
              </button>
              <button className="text-gray-600 hover:text-blue-500 text-sm transition-colors duration-200 text-left">
                Privacy Policy
              </button>
              <button className="text-gray-600 hover:text-blue-500 text-sm transition-colors duration-200 text-left">
                Terms & Conditions
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="font-semibold text-gray-900 mb-3">Contact</h6>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">📍 Shillong, Meghalaya</p>
              <p className="text-gray-600 text-sm">✉️ explore@CampSpot.com</p>
              <p className="text-gray-600 text-sm">📞 +91 93660 42337</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="font-semibold text-gray-900 mb-3">Stay Updated</h6>
            <p className="text-gray-600 text-sm mb-3">
              Subscribe for exclusive Meghalaya travel tips & hidden gem discoveries 🌿
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 px-8 py-4">
        <div className="flex flex-col items-center space-y-3">
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.219-.438-.219-1.087c0-1.018.623-1.777 1.398-1.777.659 0 .978.497.978 1.092 0 .665-.423 1.658-.641 2.578-.183.773.39 1.404 1.158 1.404 1.391 0 2.466-1.469 2.466-3.591 0-1.878-1.349-3.191-3.275-3.191-2.233 0-3.544 1.675-3.544 3.407 0 .674.254 1.396.572 1.789.063.076.072.143.053.221-.058.239-.189.766-.215.873-.034.143-.111.173-.256.104-1.098-.511-1.785-2.113-1.785-3.406 0-2.473 1.798-4.742 5.182-4.742 2.724 0 4.843 1.941 4.843 4.535 0 2.706-1.706 4.88-4.077 4.88-.796 0-1.546-.414-1.804-.906l-.491 1.873c-.178.687-.658 1.549-.98 2.075.738.227 1.52.349 2.329.349 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </button>
            <button className="text-gray-400 hover:text-blue-700 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
</button>

          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 text-center">
            © 2025 <strong>CampSpot Pvt. Ltd.</strong> | Made with ❤️ for Meghalaya Explorers
          </p>
        </div>
      </div>
    </footer>
  );
}
