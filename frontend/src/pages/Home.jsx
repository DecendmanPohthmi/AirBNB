import React from "react";
import { FaHeart } from "react-icons/fa"; // ✅ Added
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";

const listings = [
  {
    id: 1,
    title: "Apartment in Shillong",
    price: "₹7,589 for 2 nights",
    rating: "★ 5.0",
    image: image1,
    badge: "Guest favourite",
  },
  {
    id: 2,
    title: "Room in Shillong",
    price: "₹4,934 for 2 nights",
    rating: "★ 4.94",
    image: image2,
    badge: "Guest favourite",
  },
  {
    id: 3,
    title: "Flat in Shillong",
    price: "₹7,772 for 2 nights",
    rating: "★ 4.94",
    image: image1,
    badge: "Guest favourite",
  },
];

export default function Home() {
  return (
    <div className="px-6 py-10">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-6">Available in DawKi</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {listings.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer group"
          >
            {/* Image Wrapper */}
            <div className="relative rounded-xl overflow-hidden shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover transition group-hover:scale-105 duration-300"
              />

              {/* Badge */}
              {item.badge && (
                <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {item.badge}
                </span>
              )}

              {/* Heart Icon */}
              <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition">
                <FaHeart className="text-gray-700" />
              </button>
            </div>

            {/* Text Section */}
            <div className="mt-3">
              <h3 className="text-gray-900 font-semibold text-base truncate">
                {item.title}
              </h3>

              {/* Price + Rating in one line */}
              <div className="flex justify-between items-center">
                <p className="text-gray-700 text-sm">{item.price}</p>
                <p className="text-gray-800 text-sm font-medium">
                  {item.rating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
