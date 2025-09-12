import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Full screen container with light background */}
      <div className="w-screen h-screen bg-gray-100 flex flex-col items-center overflow-x-hidden">
 
        {/* Sticky Navbar with top margin */}
        <div className="w-full pt-4">
          <Navbar />
        </div>

        {/* Page content centered and constrained */}
        <main className="w-full flex-1 px py-6 max-w-6xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
