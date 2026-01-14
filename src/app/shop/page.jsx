"use client";
import { products } from "@/utils/data";
import { Star, ShoppingCart } from "lucide-react";
// 1. Import Redux hooks and the add action
import { useDispatch, useSelector } from "react-redux";
import Contact from "../contact/page";
import { addToCart, selectCartItems } from "@/features/cart/cartSlice";

export default function ShopPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleProductClick = (product) => {
    dispatch(addToCart(product));

  };

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-pink-500 font-medium text-sm mb-2 block">
          See Our Collection
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Recent Products
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {product.onSale && (
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-bold w-12 h-12 flex items-center justify-center rounded-full uppercase tracking-tighter z-10">
                  Sale!
                </div>
              )}

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <button className="bg-white text-black w-full py-2 flex items-center justify-center gap-2 font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <ShoppingCart size={16} />
                  ORDER NOW
                </button>
              </div>
            </div>

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

      {/* 5. Cleaned up Contact section: No more props needed! */}
      {cartItems.length > 0 && (
        <div id='contact' className="mt-16">
          <Contact />
        </div>
      )}
    </section>
  );
}