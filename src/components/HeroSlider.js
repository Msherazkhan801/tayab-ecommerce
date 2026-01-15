"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { slides } from '@/utils/data';



export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative h-[85vh] w-full bg-[#f4f4f6] overflow-hidden group">
      {/* Slider Container */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full flex items-center justify-center">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Content Overlay */}
              <div className="relative z-10 text-center px-4 max-w-2xl">
                <p className="text-gray-900 font-medium tracking-wide mb-2 uppercase text-sm">
                  {slide.subtitle}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-gray-700 text-lg mb-8">
                  {slide.description}
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/womens" className="bg-[#ff4d8d] text-white px-8 py-3.5 font-bold uppercase text-xs tracking-widest hover:bg-black transition-colors duration-300">
                    Shop Women's
                  </Link>
                  <Link href="/mens" className="border-2 border-gray-900 text-gray-900 px-8 py-3.5 font-bold uppercase text-xs tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                    Shop Men's
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors opacity-0 group-hover:opacity-100 hidden md:block"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors opacity-0 group-hover:opacity-100 hidden md:block"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Pagination Dots (bottom center) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
         <div className="w-2.5 h-2.5 rounded-full border border-black bg-black"></div>
         <div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div>
         <div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div>
      </div>
    </section>
  );
}