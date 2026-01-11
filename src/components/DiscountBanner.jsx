import Link from 'next/link';

export default function DiscountBanner() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg')", // Replace with your image
          backgroundColor: "#9b86d9" // Fallback purple color
        }}
      >
        {/* Subtle overlay to match the original's soft tone */}
        <div className="absolute inset-0 bg-purple-500/10"></div>
      </div>

      {/* Content Box */}
      <div className="relative z-10 bg-white p-8 md:p-12 shadow-xl max-w-lg w-[90%] text-center border border-white/50">
          {/* Decorative thin border inside the box */}
          <div className="absolute inset-2 border border-gray-100 pointer-events-none"></div>

          <span className="text-pink-500 font-bold text-sm tracking-widest uppercase mb-4 block">
            Limited Time Offer!
          </span>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter">
            -40% OFF
          </h2>
          
          <p className="text-gray-600 font-medium mb-8">
            Get The Best Deals Now
          </p>

          <Link 
            href="/shop" 
            className="inline-block bg-[#ff4d8d] text-white px-10 py-4 font-bold uppercase text-xs tracking-[0.2em] hover:bg-black transition-all duration-300"
          >
            Discover Now
          </Link>
      </div>
    </section>
  );
}