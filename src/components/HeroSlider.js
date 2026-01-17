"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // 1. Import Autoplay
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { slides } from '@/utils/data';

export default function HeroSlider() {
  // 2. Initialize Autoplay with 5 second delay
  const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false });

  // 3. Pass the plugin to the hook
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      autoplay.reset(); // Reset timer on manual click
    }
  }, [emblaApi, autoplay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      autoplay.reset(); // Reset timer on manual click
    }
  }, [emblaApi, autoplay]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      autoplay.reset(); // Reset timer on manual click
    }
  }, [emblaApi, autoplay]);

  return (
    <section className="relative h-[85vh] w-full bg-black-900 overflow-hidden group">
      {/* ... (Rest of your JSX remains exactly the same) ... */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
              <div className="relative z-10 text-center px-4 max-w-3xl">
                <p className="text-white/90 font-medium tracking-[0.2em] mb-3 uppercase text-xs md:text-sm">
                  {slide.subtitle}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                   <Link href="/popular/women" className="bg-[#ff4d8d] text-white px-10 py-4 font-bold uppercase text-[10px] tracking-widest">Shop Women's</Link>
                   <Link href="/men" className="border-2 border-white text-white px-10 py-4 font-bold uppercase text-[10px] tracking-widest">Shop Men's</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={scrollPrev} className="absolute left-6 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block z-20">
        <ChevronLeft size={56} strokeWidth={1} />
      </button>
      <button onClick={scrollNext} className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block z-20">
        <ChevronRight size={56} strokeWidth={1} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full border border-white ${index === selectedIndex ? "w-8 h-2.5 bg-white" : "w-2.5 h-2.5 bg-transparent"}`}
          />
        ))}
      </div>
    </section>
  );
}