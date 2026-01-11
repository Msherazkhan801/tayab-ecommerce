import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Long Sleeve Leopard T-Shirt",
    originalPrice: 321,
    salePrice: 250,
    image: "https://templates.hibootstrap.com/xton/default/assets/img/products/img1.jpg", // Replace with actual image
    onSale: false,
    rating: 5,
  },
  {
    id: 2,
    name: "Causal V-Neck Soft Raglan",
    originalPrice: 210,
    salePrice: 200,
    image: "https://templates.hibootstrap.com/xton/default/assets/img/products/img2.jpg",
    onSale: true,
    rating: 5,
  },
  {
    id: 3,
    name: "Hanes Men's Pullover",
    originalPrice: 210,
    salePrice: 200,
    image: "https://templates.hibootstrap.com/xton/default/assets/img/products/img3.jpg",
    onSale: false,
    rating: 5,
  },
  {
    id: 4,
    name: "Hanes Men's Pullover",
    originalPrice: 210,
    salePrice: 200,
    image: "https://templates.hibootstrap.com/xton/default/assets/img/products/img6.jpg",
    onSale: false,
    rating: 5,
  },
 
  {
    id: 5,
    name: "Hanes Men's Pullover",
    originalPrice: 210,
    salePrice: 200,
    image: "https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg",
    onSale: false,
    rating: 5,
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-pink-500 font-medium text-sm mb-2 block">
          See Our Collection
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Recent Products
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Sale Badge */}
              {product.onSale && (
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-bold w-12 h-12 flex items-center justify-center rounded-full uppercase tracking-tighter">
                  Sale!
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-1">
              <h3 className="font-bold text-gray-900 text-lg hover:text-pink-500 transition-colors">
                {product.name}
              </h3>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through text-sm">
                    ${product.originalPrice}
                  </span>
                  <span className="text-gray-900 font-bold">
                    ${product.salePrice}
                  </span>
                </div>

                {/* Star Ratings */}
                <div className="flex text-orange-400">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}