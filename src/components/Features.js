"use client";

import React, { useState } from 'react';
import { PhoneCall, Truck, RotateCcw, MapPin, X } from "lucide-react";

const features = [
  {
    icon: <MapPin size={30} strokeWidth={1.5} />,
    title: "Track Your Package",
    description: "Enter your tracking number to see the real-time status of your order. Most orders arrive within 3-5 business days."
  },
  {
    icon: <PhoneCall size={30} strokeWidth={1.5} />,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available around the clock. You can reach us via WhatsApp at +92 340 9797271 or via our contact form."
  },
  {
    icon: <Truck size={30} strokeWidth={1.5} />,
    title: "Free Shipping Worldwide",
    description: "We offer free standard shipping on all international orders over $150. Delivery times vary by region."
  },
  {
    icon: <RotateCcw size={30} strokeWidth={1.5} />,
    title: "Easy Return Policy",
    description: "Not satisfied? Return your items within 30 days of purchase for a full refund or exchange. Items must be unworn."
  },
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section className="py-12 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedFeature(feature)}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Icon Container */}
              <div className="w-24 h-24 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#ff4d8d] group-hover:text-white group-hover:scale-110 text-gray-800 shadow-sm">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-[#ff4d8d] transition-colors">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* --- Simple Modal --- */}
      {selectedFeature && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative transform transition-all scale-100 animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedFeature(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-pink-50 text-[#ff4d8d] flex items-center justify-center mb-4">
                {selectedFeature.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {selectedFeature.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {selectedFeature.description}
              </p>
              
              <button 
                onClick={() => setSelectedFeature(null)}
                className="mt-8 w-full bg-black text-white py-3 font-bold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}