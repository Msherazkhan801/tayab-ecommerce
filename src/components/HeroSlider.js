"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { slides } from '@/utils/data';

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Update dots when slide changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <section className="relative h-[85vh] w-full bg-black-900 overflow-hidden group">
      {/* Slider Container */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full flex items-center justify-center">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Black Shadow Overlay (Gradient) */}
              <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
              
              {/* Content Overlay */}
              <div className="relative z-10 text-center px-4 max-w-3xl">
                <p className="text-white/90 font-medium tracking-[0.2em] mb-3 uppercase text-xs md:text-sm drop-shadow-md">
                  {slide.subtitle}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-gray-100 text-lg mb-10 max-w-xl mx-auto drop-shadow-md">
                  {slide.description}
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="/womens" 
                    className="w-full sm:w-auto bg-[#ff4d8d] text-white px-10 py-4 font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Shop Women's
                  </Link>
                  <Link 
                    href="/mens" 
                    className="w-full sm:w-auto border-2 border-white text-white px-10 py-4 font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                  >
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
        className="absolute left-6 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={56} strokeWidth={1} />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={56} strokeWidth={1} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full border border-white ${
              index === selectedIndex 
                ? "w-8 h-2.5 bg-white" 
                : "w-2.5 h-2.5 bg-transparent hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}