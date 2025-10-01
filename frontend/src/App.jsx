import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import ListingPage from "./pages/ListingPage";
import Auth from "./pages/Auth";

const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/auth"; // ✅ check current route

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar />} {/* ✅ hide Navbar on /auth */}

      <main className="flex-1">
        <div className={`px-4 py-8 ${!hideLayout ? "container mx-auto" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/listing/:id" element={<ListingPage />} />
          </Routes>
        </div>
      </main>

      {!hideLayout && <Footer />} {/* ✅ hide Footer on /auth */}
    </div>
  );
};

export default App;
