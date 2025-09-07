import React, { useState } from "react";
import { Heart, Star, MapPin, Users, Home as HomeIcon, Wifi, Car, Wind } from "lucide-react";
import image1 from "../assets/image1.jpeg";
import image9 from "../assets/image9.jpeg";
import image15 from "../assets/image15.jpeg";
import image13 from "../assets/image13.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";

const listings = [
  {
    id: 1,
    title: "Riverside Camping with Bonfire",
    location: "Shnongpdeng, Dawki",
    price: 1499,
    nights: 1,
    rating: 4.8,
    reviews: 132,
    image: image1, 
    badge: "Adventure spot",
    superhost: false,
    guests: 2,
    bedrooms: 1, 
    beds: 1,    
    amenities: ["Bonfire", "Boating", "Camping Gear", "Parking"],
    available: true
  },
{
  id: 2,
  title: "Riverside Camping & Kayaking Experience",
  location: "Shnongpdeng, Dawki",
  price: 1699,
  nights: 1,
  rating: 4.7,
  reviews: 98,
  image: image9,
  badge: "Nature escape",
  superhost: false,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  amenities: ["Kayaking", "Riverside View", "Camping Gear", "Parking"],
  available: true
},
  {
  id: 3,
  title: "Suspension Bridge Riverside Camping",
  location: "Shnongpdeng, Dawki",
  price: 1799,
  nights: 1,
  rating: 4.9,
  reviews: 154,
  image: image15, 
  badge: "Adventure lovers",
  superhost: true,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  amenities: ["Suspension Bridge View", "Kayaking", "Bonfire", "Parking"],
  available: true
},
  {
  id: 4,
  title: "Adventure Camping & Kayaking by Dawki River",
  location: "Shnongpdeng, Dawki",
  price: 1999,
  nights: 1,
  rating: 5.0,
  reviews: 210,
  image: image13,
  badge: "Top Adventure Stay",
  superhost: true,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  amenities: ["Crystal Clear River", "Kayaking", "Suspension Bridge View", "Bonfire", "Parking"],
  available: true
},
  {
    id: 5,
    title: "Luxury Villa with Pool",
    location: "Shillong Peak Road",
    price: 8500,
    nights: 2,
    rating: 4.98,
    reviews: 28,
    image: image5,
    badge: "Luxury",
    superhost: true,
    guests: 8,
    bedrooms: 4,
    beds: 5,
    amenities: ["Wifi", "Pool", "Parking", "AC"],
    available: false
  },
  {
    id: 6,
    title: "Traditional Khasi Home",
    location: "Mawlynnong",
    price: 2850,
    nights: 2,
    rating: 4.91,
    reviews: 104,
    image: image6,
    badge: "Unique stay",
    superhost: false,
    guests: 4,
    bedrooms: 2,
    beds: 2,
    amenities: ["Garden", "Kitchen"],
    available: true
  }
];

const amenityIcons = {
  Wifi: <Wifi className="w-4 h-4" />,
  Parking: <Car className="w-4 h-4" />,
  AC: <Wind className="w-4 h-4" />,
  Kitchen: <HomeIcon className="w-4 h-4" />,
  Garden: <HomeIcon className="w-4 h-4" />,
  Pool: <HomeIcon className="w-4 h-4" />
};

export default function Home() {
  const [savedListings, setSavedListings] = useState(new Set());
  const [filter, setFilter] = useState("all");

  const toggleSaved = (id) => {
    setSavedListings(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filteredListings = listings.filter(item => {
    if (filter === "all") return true;
    if (filter === "available") return item.available;
    if (filter === "superhost") return item.superhost;
    if (filter === "luxury") return item.price > 5000;
    return true;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Places to stay near Dawki
          </h1>
          <p className="text-gray-600">
            {filteredListings.length} stays available · Jan 15 – 17
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {["all", "available", "superhost", "luxury"].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-6 py-2 rounded-full border transition-all whitespace-nowrap ${filter === filterOption
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                }`}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              {filterOption === "all" && ` (${listings.length})`}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredListings.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge */}
                {item.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm ${item.badge === "Luxury"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : item.badge === "Superhost"
                        ? "bg-white/95 text-gray-900 border border-gray-200"
                        : "bg-white/95 text-gray-900"
                    }`}>
                    {item.badge}
                  </span>
                )}

                {/* Heart Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaved(item.id);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-200"
                  aria-label={savedListings.has(item.id) ? "Remove from saved" : "Save listing"}
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${savedListings.has(item.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-700 hover:text-red-500"
                      }`}
                  />
                </button>

                {/* Availability Overlay */}
                {!item.available && (
                  <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                    <span className="text-gray-900 font-semibold px-4 py-2 bg-white rounded-lg shadow">
                      Not Available
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="mt-3 space-y-1">
                {/* Location and Superhost */}
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                  <span className="text-gray-600">{item.location}</span>
                  {item.superhost && (
                    <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full font-medium">
                      Superhost
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 line-clamp-1">
                  {item.title}
                </h3>

                {/* Property Details */}
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {item.guests}
                  </span>
                  <span>·</span>
                  <span>{item.bedrooms} bedroom{item.bedrooms > 1 ? 's' : ''}</span>
                  <span>·</span>
                  <span>{item.beds} bed{item.beds > 1 ? 's' : ''}</span>
                </div>

                {/* Amenities */}
                <div className="flex gap-2 flex-wrap">
                  {item.amenities.slice(0, 3).map((amenity, index) => (
                    <span key={index} className="text-xs text-gray-500 flex items-center gap-1">
                      {amenityIcons[amenity]}
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Rating and Price */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-gray-900" />
                    <span className="font-medium text-gray-900">{item.rating}</span>
                    <span className="text-gray-600 text-sm">({item.reviews})</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-gray-900">
                      {formatPrice(item.price)}
                    </span>
                    <span className="text-gray-600 text-sm"> / {item.nights} nights</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredListings.length > 0 && (
          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              Show more places
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <HomeIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No places found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>
    </div>
  );
}