import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    image: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg",
    subtitle: "Don't Miss Today",
    title: "50% OFF",
    bgColor: "bg-[#c59d5f]", // Golden/Tan
  },
  {
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    subtitle: "New Collection",
    title: "Need Now",
    bgColor: "bg-[#e5e7eb]", // Light Gray
  },
  {
    image: "https://templates.hibootstrap.com/xton/default/assets/img/categories/img3.jpg",
    subtitle: "Your Looks",
    title: "Must Haves",
    bgColor: "bg-[#93e2f5]", // Light Blue
  },
  {
    image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
    subtitle: "Take 20% OFF",
    title: "Winter Spring!",
    bgColor: "bg-[#d9a066]", // Earthy Orange
  },
];

export default function PromoCards() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-md h-[280px] group cursor-pointer ${card.bgColor}`}
          >
            {/* Background Image with Hover Effect */}
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
              
              {/* Invisible link that covers the card */}
              <Link href="/shop" className="absolute inset-0">
                <span className="sr-only">View {card.title}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}