"use client";
import { cards } from '@/utils/data';
import Link from 'next/link';
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function PromoCards() {
  return (
    <section className="py-8 px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2500, // Time in milliseconds (2.5 seconds)
          disableOnInteraction: false, // Keeps swapping even after user clicks
        }}
        loop={true} // Makes it infinite
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-12" // Space for pagination dots
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div 
              className={`relative overflow-hidden rounded-md h-[280px] group cursor-pointer ${card.bgColor}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-y-0 right-6 flex flex-col justify-center text-right z-10">
                <span className={`text-xs font-bold uppercase tracking-widest mb-2 ${index % 2 === 1 ? 'text-[#ff4d8d]' : 'text-white'}`}>
                  {card.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  {card.title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h3>
                
                <Link href="/shop" className="absolute inset-0">
                  <span className="sr-only">View {card.title}</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for Swiper dots to match your brand */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #ff4d8d !important;
        }
      `}</style>
    </section>
  );
}