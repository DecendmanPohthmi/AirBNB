import React from "react";
import { useParams } from "react-router-dom";

export default function ListingPage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Listing Details</h1>
      <p className="mt-2">You opened listing ID: {id}</p>
    </div>
  );
}
