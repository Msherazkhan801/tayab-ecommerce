"use client";

import React, { useState } from 'react';
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiChevronDown, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "Shop", href: "#shop" },
    { name: "Recent", href: "#recent" },
    { name: "Popular", href: "#popular" },
  ];

  // Function to handle smooth scroll within the same page
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={(e) => handleScroll(e, '#home')}>
            <div className="bg-black p-1.5 rounded-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C21.1046 8 22 8.89543 22 10V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V10C2 8.89543 2.89543 8 4 8H6ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8ZM12 15C13.6569 15 15 13.6569 15 12H13C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12H9C9 13.6569 10.3431 15 12 15Z" fill="white"/>
                </svg>
            </div>
            {/* <span className="text-3xl font-bold tracking-tight text-gray-900">Xton</span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`flex items-center gap-1 text-[15px] font-semibold transition-colors cursor-pointer ${
                  link.active ? "text-pink-500" : "text-gray-900 hover:text-pink-500"
                }`}
              >
                {link.name}
                <FiChevronDown className="w-4 h-4 mt-0.5" />
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
            {/* <button className="text-gray-900 hover:text-pink-500 transition hidden sm:block">
              <FiSearch size={22} />
            </button> */}
            
            <button className="relative text-gray-900 hover:text-pink-500 transition">
              <FiUser size={22} />
            </button>

            {/* Hamburger Button (Mobile Only) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-900 hover:text-pink-500 transition"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-lg font-semibold text-gray-900 hover:text-pink-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;