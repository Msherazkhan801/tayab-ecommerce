"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiShoppingBag, FiMenu, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Shop", href: "/shop" },
    { name: "Pages", href: "/pages" },
    { name: "Women's", href: "/womens" },
    { name: "Men's", href: "/mens" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-black p-1.5 rounded-md">
                {/* Simple SVG representation of the bag logo */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C21.1046 8 22 8.89543 22 10V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V10C2 8.89543 2.89543 8 4 8H6ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8ZM12 15C13.6569 15 15 13.6569 15 12H13C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12H9C9 13.6569 10.3431 15 12 15Z" fill="white"/>
                </svg>
            </div>
            <span className="text-3xl font-bold tracking-tight text-gray-900">Xton</span>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1 text-[15px] font-semibold transition-colors ${
                  link.active ? "text-pink-500" : "text-gray-900 hover:text-pink-500"
                }`}
              >
                {link.name}
                <FiChevronDown className="w-4 h-4 mt-0.5" />
              </Link>
            ))}
          </div>

          {/* Right Icons Section */}
          <div className="flex items-center space-x-5">
            <button className="text-gray-900 hover:text-pink-500 transition">
              <FiSearch size={22} />
            </button>
            
            <button className="relative text-gray-900 hover:text-pink-500 transition">
              <FiShoppingBag size={22} />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                3
              </span>
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-pink-500 transition"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;