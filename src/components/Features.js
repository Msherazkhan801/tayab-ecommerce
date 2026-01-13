import { PhoneCall, Truck, RotateCcw, MapPin } from "lucide-react";

const features = [
  {
    icon: <MapPin size={30} strokeWidth={1.5} />,
    title: "Track Your Package",
  },
  {
    icon: <PhoneCall size={30} strokeWidth={1.5} />,
    title: "24/7 Customer Support",
  },
  {
    icon: <Truck size={30} strokeWidth={1.5} />,
    title: "Free Shipping Worldwide",
  },
  {
    icon: <RotateCcw size={30} strokeWidth={1.5} />,
    title: "Easy Return Policy",
  },
];

export default function Features() {
  return (
    <section className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center group cursor-default">
              {/* Circular Icon Container */}
              <div className="w-24 h-24 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#ff4d8d] group-hover:text-white text-gray-800">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}