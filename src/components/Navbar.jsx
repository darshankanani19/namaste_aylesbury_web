import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Contact Us", path: "/contactUs" },
  { name: "Profile", path: "/profile" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on nav click (mobile)
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-4 z-50 w-full">
      <div className="mx-auto max-w-6xl bg-white shadow-md rounded-2xl px-6 py-3 flex items-center justify-between">
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Namaste Aylesbury Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-orange-600 font-bold text-lg whitespace-nowrap">
            Namaste Aylesbury
          </span>
        </div>

        {/* Center: Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-3 mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white shadow text-orange-600"
                    : "text-gray-700 hover:bg-orange-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right: Login Button (hidden on mobile) */}
        <div className="hidden md:block">
          <button
            className="px-4 py-2 rounded-full font-semibold transition"
            style={{
              backgroundColor: "#E48542",
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#d97435")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#E48542")}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                // X icon when open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-b-2xl max-w-6xl mx-auto px-6 py-4 space-y-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleLinkClick}
                className={`block px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white shadow text-orange-600"
                    : "text-gray-700 hover:bg-orange-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-full px-4 py-2 rounded-full font-semibold transition bg-[#E48542] text-white hover:bg-[#d97435]"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
