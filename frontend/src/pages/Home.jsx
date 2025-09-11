import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import image1 from "../assets/image1Bed2.jpeg";
import image4 from "../assets/image1Bed3.jpeg";
import image2 from "../assets/image2Bed2.jpeg"; // extra
import image3 from "../assets/image3Bed2.jpeg"; // extra
import image5 from "../assets/image2Bed3.jpeg"; // extra
import image6 from "../assets/image3Bed3.jpeg"; // extra

const listings = [
  {
    id: 1,
    title: "Riverside Camping with Bonfire",
    location: "Shnongpdeng, Dawki",
    price: 1499,
    nights: 1,
    rating: 4.8,
    reviews: 132,
    images: [image1, image2, image3], // ✅ multiple images
    badge: "Adventure spot",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    amenities: ["Bonfire", "Boating", "Camping Gear", "Parking"],
    available: true,
  },
  {
    id: 2,
    title: "Riverside Camping & Kayaking Experience",
    location: "Shnongpdeng, Dawki",
    price: 1699,
    nights: 1,
    rating: 4.7,
    reviews: 98,
    images: [image4, image5, image6], // ✅ multiple images
    badge: "Nature escape",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    amenities: ["Kayaking", "Riverside View", "Camping Gear", "Parking"],
    available: true,
  },
];

export default function Home() {
  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Available in DawKi</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {listings.map((item) => (
          <Link 
            to={`/listing/${item.id}`} 
            key={item.id}
            className="cursor-pointer group"
          >
            <div className="relative rounded-xl overflow-hidden shadow-sm">
              <img
                src={item.images[0]} // ✅ show only the first image
                alt={item.title}
                className="w-full h-60 object-cover transition group-hover:scale-105 duration-300"
              />

              {item.badge && (
                <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {item.badge}
                </span>
              )}

              <button
                onClick={(e) => e.preventDefault()}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition"
              >
                <FaHeart className="text-gray-700" />
              </button>
            </div>

            <div className="mt-3">
              <h3 className="text-gray-900 font-semibold text-base truncate">
                {item.title}
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-700 text-sm">₹{item.price} for {item.nights} night</p>
                <p className="text-gray-800 text-sm font-medium">⭐ {item.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export { listings }; // ✅ export for reuse in ListingPage
