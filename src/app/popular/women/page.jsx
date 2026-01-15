"use client";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from '@/features/cart/cartSlice';
import { womenProducts } from '@/utils/data';
import { Heart, ShoppingBag, Star, X } from 'lucide-react';

export default function PopularProductsPage() {
  const dispatch = useDispatch();
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  const openModal = (product) => {
    setSelectedProduct(product);
    // Set the initial big image to the first variant
    setActiveImage(product.images?.[0] || product.image);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Popular Products</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {womenProducts.map((product) => (
          <div 
            key={product.id} 
            className="group cursor-pointer"
            onClick={() => openModal(product)}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-pink-500 font-bold">${product.salePrice}</p>
          </div>
        ))}
      </div>

      {/* --- QUICK VIEW MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl relative flex flex-col md:flex-row shadow-2xl">
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full shadow-lg hover:text-pink-500 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Left: Image Display */}
            <div className="md:w-1/2 p-6 bg-gray-50 flex flex-col justify-center items-center">
              {/* BIG IMAGE - This changes when thumbnails are clicked */}
              <div className="w-full aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-inner mb-6">
                <img 
                  src={activeImage} 
                  alt="Selected Color View" 
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              
              {/* THE 3 VARIANT THUMBNAILS */}
              <div className="flex gap-4 justify-center">
                {(selectedProduct.images || [selectedProduct.image, selectedProduct.image, selectedProduct.image]).map((img, idx) => (
                  <button
                    key={idx}
                    // IMPORTANT: This changes the big image
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents modal interference
                      setActiveImage(img);
                    }}
                    className={`w-20 h-24 rounded-xl overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                      activeImage === img 
                        ? "border-pink-500 ring-4 ring-pink-100 shadow-md" 
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Color variant ${idx + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <span className="text-pink-500 font-bold text-sm uppercase tracking-widest mb-2">New Arrival</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{selectedProduct.name}</h2>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">${selectedProduct.salePrice}</span>
                <span className="text-xl text-gray-400 line-through">${selectedProduct.originalPrice}</span>
              </div>
              
              <p className="text-gray-500 leading-relaxed mb-8">
                Choose your favorite color variant from the options on the left. 
                Our {selectedProduct.name} is designed for maximum comfort and style.
              </p>

              <button 
                onClick={() => {
                  dispatch(addToCart({ ...selectedProduct, selectedImage: activeImage }));
                  closeModal();
                }}
                className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold hover:bg-pink-600 transform active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-gray-200"
              >
                <ShoppingBag size={22} />
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}