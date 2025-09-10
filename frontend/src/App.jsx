import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ListingPage from "./pages/ListingPage"; // renamed from Booking

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content area */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Dynamic route for a listing */}
            <Route path="/listing/:id" element={<ListingPage />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
