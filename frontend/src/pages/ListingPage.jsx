import React from "react";
import { useParams } from "react-router-dom";
import { listings } from "./Home"; // ✅ import the same listings data

export default function ListingPage() {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === Number(id));

  if (!listing) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Listing not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 rounded-2xl overflow-hidden">
        {listing.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${listing.title} ${index + 1}`}
            className={`w-full object-cover rounded-2xl ${
              index === 0 ? "h-96 col-span-2" : "h-48"
            }`}
          />
        ))}
      </div>

      {/* Title & Location */}
      <h1 className="text-3xl font-bold mt-6">{listing.title}</h1>
      <p className="text-gray-600">{listing.location}</p>

      {/* Price & Rating */}
      <div className="flex justify-between items-center mt-3">
        <p className="text-lg font-semibold text-gray-800">
          ₹{listing.price} / night
        </p>
        <p className="text-gray-700">
          ⭐ {listing.rating} ({listing.reviews} reviews)
        </p>
      </div>

      {/* Details */}
      <div className="mt-4">
        <p className="text-gray-700">
          {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed
        </p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Amenities</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {listing.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
