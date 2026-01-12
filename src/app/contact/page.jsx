"use client";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact({ selectedProduct }) {
  const [state, handleSubmit] = useForm("2134dsd"); // replace with your Formspree form ID

  const whatsappNumber = "923441768784";
  
  const handleWhatsAppChat = () => {
    let message = "Hello Shezi Cloth House! I have an inquiry.";
    if (selectedProduct) {
      message = `Hello! I am interested in: \n*Product:* ${selectedProduct.title} \n*Price:* ${selectedProduct.price} \nCan you provide more details?`;
    }
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  if (state.succeeded) {
    return (
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h3 className="text-pink-600 font-semibold text-2xl mb-4">
          ✅ Thank you for contacting Shezi Cloth House!
        </h3>
        <p className="text-gray-700 mb-6">We will get back to you shortly.</p>
        <Link href="/">
          <button className="border border-black rounded-lg px-6 py-3 font-medium hover:bg-black hover:text-white transition">
            Back to Home
          </button>
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 mt-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our latest collection or need help with an order? 
            Contact **Shezi Cloth House** via the form below or message us directly on WhatsApp.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Contact Details & WhatsApp */}
          <div className="lg:col-span-1 space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-green-50 border border-green-200 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-500 p-3 rounded-full text-white">
                  <FaWhatsapp size={24} />
                </div>
                <h2 className="text-xl font-bold text-green-800">Quick Chat</h2>
              </div>
              <p className="text-green-700 text-sm mb-4">
                Need a fast response? Message us on WhatsApp for instant support.
              </p>
              <button 
                onClick={handleWhatsAppChat}
                className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3 text-pink-600">
                <FaMapMarkerAlt />
                <span className="font-bold text-gray-900">Our Shop</span>
              </div>
              <p className="text-gray-600 text-sm">Shezi Cloth House, [Insert Your Local Market/City Address Here]</p>
            </div>
          </div>

          {/* Column 2: Formspree Contact Form */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm mb-2 font-medium">Name</label>
                    <input type="text" name="name" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2 font-medium">Phone</label>
                    <input type="tel" name="phone" placeholder="03XXXXXXXXX" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none" required />
                  </div>
                </div>

                {selectedProduct && (
                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                    <p className="text-pink-800 text-sm font-medium">Inquiry for: {selectedProduct.title}</p>
                    <input type="hidden" name="product" value={selectedProduct.title} />
                  </div>
                )}

                <div>
                  <label className="block text-gray-700 text-sm mb-2 font-medium">Message</label>
                  <textarea name="message" rows="5" placeholder="Tell us what you are looking for..." className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none" required></textarea>
                </div>

                <button type="submit" disabled={state.submitting} className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition">
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}