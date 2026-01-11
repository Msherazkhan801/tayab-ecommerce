"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FaInstagram } from "react-icons/fa";

const feedImages = [
  { id: 1, src: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg" },
  { id: 2, src: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" },
  { id: 3, src: "https://images.pexels.com/photos/953266/pexels-photo-953266.jpeg" },
  { id: 4, src: "https://images.pexels.com/photos/3756030/pexels-photo-3756030.jpeg" },
  { id: 5, src: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg" },
  { id: 6, src: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg" },
  { id: 7, src: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg" },
];

export default function InstagramFeed() {
  // Configured to show 6 images on desktop and 2 on mobile
  const [emblaRef] = useEmblaCarousel({ 
    dragFree: true, 
    containScroll: "trimSnaps",
    loop: true 
  });

  return (
    <section className="w-full bg-white py-10">
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex">
          {feedImages.map((image) => (
            <div 
              key={image.id} 
              className="relative flex-[0_0_50%] sm:flex-[0_0_33.33%] lg:flex-[0_0_16.66%] aspect-square group overflow-hidden"
            >
              {/* Image */}
              <img
                src={image.src}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white p-3 rounded-full text-pink-500 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <FaInstagram size={24} />
                </div>
              </div>
              
              {/* Instagram Link */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">View on Instagram</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}