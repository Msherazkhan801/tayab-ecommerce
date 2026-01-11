import { Star, Heart, Repeat, Search } from "lucide-react";

const popularProducts = [
  {
    id: 1,
    name: "Tbmpoy Men's Tapered",
    originalPrice: 321,
    salePrice: 250,
    image: "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg", 
    rating: 5,
  },
  {
    id: 2,
    name: "Sunnyme Women's Ponchos",
    originalPrice: 321,
    salePrice: 250,
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
    onSale: true,
    rating: 5,
  },
  {
    id: 3,
    name: "Open Front Knit Sweaters",
    originalPrice: 210,
    salePrice: 200,
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
    rating: 5,
  },
];

export default function PopularProducts() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-pink-500 font-medium text-sm mb-2 block">
          See Our Collection
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Popular Products
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popularProducts.map((product) => (
          <div key={product.id} className="group">
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Sale Badge */}
              {product.onSale && (
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-bold w-12 h-12 flex items-center justify-center rounded-full uppercase">
                  Sale!
                </div>
              )}

              {/* Hover Icons (Right Side) */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-white p-2.5 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition-colors">
                  <Heart size={18} />
                </button>
                <button className="bg-white p-2.5 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition-colors">
                  <Repeat size={18} />
                </button>
                <button className="bg-white p-2.5 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition-colors">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-1">
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-pink-500 transition-colors">
                {product.name}
              </h3>
              
              {/* Price and Stars Row */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through text-sm">
                    ${product.originalPrice}
                  </span>
                  <span className="text-gray-900 font-bold">
                    ${product.salePrice}
                  </span>
                </div>
                <div className="flex text-orange-400">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>

              {/* Add to Cart - Visible on Hover */}
              <button className="text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-pink-500 mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}