import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 font-sans bg-white text-black-800">
      {/* Hero Section with Image on Right */}
      <section className="flex flex-col md:flex-row items-center gap-12 mb-16">
        
        {/* Left Side: Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            About behraaz Cloth House
          </h1>
          <div className="w-20 h-1  mb-8"></div>
          
          <p className="text-lg leading-relaxed mb-6 text-black">
            Founded over <strong>9 years ago</strong>, behraaz Cloth House has established 
            itself as a trusted name in the textile and fashion industry. Our journey 
            began with a simple mission: to provide our customers with premium fabrics 
            and elegant designs that blend traditional craftsmanship with modern trends.
          </p>

          <p className="text-lg leading-relaxed text-black">
            What started as a passion for fine textiles has grown into a destination for 
            those who seek quality without compromise. We understand that clothing is 
            more than just fabric—it is an expression of identity.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 w-full">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="/shop.jpg" // Put your image in the /public folder
              alt="behraaz Cloth House Interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Bottom Stats Section */}
      <section className="grid md:grid-cols-3 gap-8 text-center bg-gray-50 p-10 rounded-xl">
        <div>
          <h3 className="font-bold text-xl mb-2 text-black">9+ Years</h3>
          <p className="text-sm text-gray-600">Of excellence in understanding fabrics.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2 text-black">Curated Style</h3>
          <p className="text-sm text-gray-600">Hand-picked collections for every occasion.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2 text-black">Pure Trust</h3>
          <p className="text-sm text-gray-600">Building lasting customer relationships.</p>
        </div>
      </section>
    </main>
  );
}