import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content area - this will expand to fill available space */}
      <main className="flex-1">
        {/* Your page content goes here */}
        <div className="container mx-auto px-4 py-8">
          {/* Your components/routes */}
          <h1></h1>
          {/* Add your page content here */}
        </div>
      </main>
      <Home />

      <Footer />
    </div>
  );
};

export default App;
