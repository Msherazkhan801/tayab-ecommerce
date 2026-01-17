"use client";
import { useState } from 'react';
import { menProducts } from "@/utils/data";
import { Star, ShoppingCart, X, Eye } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "@/features/cart/cartSlice";

export default function ShopPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // --- Modal & Image States ---
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  const openModal = (product) => {
    setSelectedProduct(product);
    // Sets the first image of the variant array or the main image
    setActiveImage(product.images?.[0] || product.image);
  };

  const closeModal = () => {
    setSelectedProduct(null);
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
        {menProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 cursor-pointer" onClick={() => openModal(product)}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {product.onSale && (
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-bold w-12 h-12 flex items-center justify-center rounded-full uppercase z-10">
                  Sale!
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                 <button 
                  onClick={(e) => { e.stopPropagation(); openModal(product); }}
                  className="bg-white text-black p-3 rounded-full hover:bg-pink-500 hover:text-white transition-all shadow-lg"
                 >
                   <Eye size={20} />
                 </button>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-gray-900 text-lg hover:text-pink-500 transition-colors">
                {product.name}
              </h3>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                  <span className="text-gray-900 font-bold">${product.salePrice}</span>
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

      {/* --- QUICK VIEW MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl relative flex flex-col md:flex-row shadow-2xl">
            
            <button onClick={closeModal} className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full shadow-lg hover:text-pink-500 transition-colors">
              <X size={24} color='black'/>
            </button>

            {/* Modal Left: Images */}
            <div className="md:w-1/2 p-6 bg-gray-50 flex flex-col items-center">
              <div className="w-full aspect-[3/4] bg-white rounded-2xl overflow-hidden mb-6">
                <img src={activeImage} className="w-full h-full object-cover" alt="Main View" />
              </div>
              
              {/* Variant Selectors (Click to change Big Image) */}
              <div className="flex gap-4">
                {(selectedProduct.images || [selectedProduct.image, selectedProduct.image, selectedProduct.image]).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === img ? "border-pink-500 scale-105" : "border-transparent opacity-60"
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Right: Details */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-pink-500">${selectedProduct.salePrice}</span>
                <span className="text-gray-400 line-through">${selectedProduct.originalPrice}</span>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Premium quality garment featuring unique designs. Choose your preferred color variant above to preview.
              </p>

              <button 
                onClick={() => {
                  dispatch(addToCart({ ...selectedProduct, image: activeImage }));
                  closeModal();
                }}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-pink-500 transition-all flex items-center justify-center gap-3"
              >
                <ShoppingCart size={20} />
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}