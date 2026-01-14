"use client";
import { removeFromCart, 
  updateQuantity, 
  selectCartItems, 
  selectCartTotal, 
  clearCart} from "@/features/cart/cartSlice";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaMinus, FaPlus, FaTrash } from "react-icons/fa";

// 1. Import Redux Hooks and Actions
import { useSelector, useDispatch } from "react-redux";

export default function Contact() {
  // 2. Initialize Redux
  const dispatch = useDispatch();
  const selectedProducts = useSelector(selectCartItems);
  const grandTotal = useSelector(selectCartTotal);

  const [state, handleSubmit] = useForm("xwvvkydg");
  const pathname = usePathname();

  // Handle Success & Clear Cart
  useEffect(() => {
    if (state.succeeded) {
      // Best Practice: Clear the cart in Redux once order is sent
      dispatch(clearCart());

      if (pathname === '/') {
        const timer = setTimeout(() => {
          window.location.reload();
          window.scrollTo(0, 0);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [state.succeeded, pathname, dispatch]);

  const whatsappNumber = "923441768784";
  
  const handleWhatsAppChat = () => {
    let message = "Hello behraaz Cloth House! I have an inquiry.";
    if (selectedProducts.length > 0) {
      const details = selectedProducts.map(p => `*${p.name}* (Qty: ${p.quantity})`).join("\n");
      message = `Hello! I am interested in:\n${details}\n*Total:* $${grandTotal}\nCan you provide more details?`;
    }
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  if (state.succeeded) {
    return (
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h3 className="text-pink-600 font-semibold text-2xl mb-4">
          ✅ Thank you for contacting behraaz Cloth House!
        </h3>
        <p className="text-gray-700 mb-6">Your order has been received. We will get back to you shortly.</p>
        <Link href="/">
          <button className="border border-black rounded-lg px-6 py-3 font-medium hover:bg-black hover:text-white transition">
            Back to Home
          </button>
        </Link>
      </section>
    );
  }

  return (
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto px-4 mt-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-black max-w-2xl mx-auto">
            Contact <b>behraaz Cloth House</b> via the form below or message us directly on WhatsApp.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-green-50 border border-green-200 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-500 p-3 rounded-full text-white"><FaWhatsapp size={24} /></div>
                <h2 className="text-xl font-bold text-green-800">Quick Chat</h2>
              </div>
              <button onClick={handleWhatsAppChat} className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2">
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {selectedProducts.length > 0 && (
                  <div className="space-y-4 mb-6">
                    <label className="block text-black font-bold mb-2">Selected Items:</label>
                    {selectedProducts.map((product) => (
                      <div key={product.id} className="bg-pink-50 p-4 rounded-xl border border-pink-100 flex flex-wrap justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                          <img src={product.image} alt="" className="w-12 h-12 object-cover rounded-md border border-pink-200" />
                          <div>
                            <h4 className="text-pink-800 font-bold text-sm">{product.name}</h4>
                            <p className="text-pink-600 text-xs">${product.salePrice} each</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center bg-white border border-pink-200 rounded-lg overflow-hidden">
                            {/* 3. Dispatch Actions Directly */}
                            <button 
                              type="button" 
                              onClick={() => dispatch(updateQuantity({ id: product.id, quantity: product.quantity - 1 }))} 
                              className="p-2 hover:bg-pink-50 text-pink-600"
                            >
                              <FaMinus size={10}/>
                            </button>
                            <span className="w-8 text-center font-bold text-sm">{product.quantity}</span>
                            <button 
                              type="button" 
                              onClick={() => dispatch(updateQuantity({ id: product.id, quantity: product.quantity + 1 }))} 
                              className="p-2 hover:bg-pink-50 text-pink-600"
                            >
                              <FaPlus size={10}/>
                            </button>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => dispatch(removeFromCart(product.id))} 
                            className="text-red-500 hover:text-red-700 transition"
                          >
                            <FaTrash size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="bg-gray-900 text-white p-4 rounded-lg flex justify-between items-center">
                      <span className="font-medium">Total Amount:</span>
                      <span className="text-xl font-bold">${grandTotal}</span>
                    </div>

                    <input type="hidden" name="order_details" value={selectedProducts.map(p => `${p.name} (Qty: ${p.quantity})`).join(" | ")} />
                    <input type="hidden" name="grand_total" value={`$${grandTotal}`} />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500" required />
                  <input type="tel" name="phone" placeholder="03XXXXXXXXX" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500" required />
                </div>
                <textarea name="message" rows="4" placeholder="Any specific requirements?" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500" required></textarea>

                <button type="submit" disabled={state.submitting || selectedProducts.length === 0} className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400">
                  {state.submitting ? "Sending Order..." : "Confirm Order"}
                </button>
              </form>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}