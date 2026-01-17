"use client";
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* About The Store */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold border-b-2 border-white/10 pb-4 inline-block w-full">
            Luqman Cloth House
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Founded over 9 years ago, we provide premium fabrics and elegant designs that blend traditional craftsmanship with modern trends.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm font-medium">
              <FiMapPin className="text-white" />Permoli Road, village Shewa (Swabi)  , Pakistan
            </li>
            <li className="flex items-center gap-3 text-sm font-medium hover:text-[#ff4d8d] transition">
              <FiPhone className="text-white" /> 
              <a href="tel:+923441768784">+92 340 9797271</a>
            </li>
            {/* <li className="flex items-center gap-3 text-sm font-medium hover:text-[#ff4d8d] transition">
              <FiMail className="text-white" /> 
              <a href="mailto:behraaz74@gmail.com">behraaz74@gmail.com</a>
            </li> */}
          </ul>
          {/* Social Icons */}
          <div className="flex gap-2 pt-2">
            {[
                { Icon: FaFacebookF, link: "#" },
                { Icon: FaInstagram, link: "#" },
                { Icon: FaWhatsapp, link: "https://wa.me/923441768784" },
                { Icon: FaPinterestP, link: "#" }
            ].map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm hover:bg-[#ff4d8d] hover:text-white transition-all duration-300">
                <social.Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold border-b-2 border-white/10 pb-4 inline-block w-full">
            Quick Links
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/men" className="hover:text-white transition">Shop Now!</Link></li>
            <li><Link href="/men" className="hover:text-white transition">New Arrivals</Link></li>
            <li><Link href="/popular/women" className="hover:text-white transition">Popular Items</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold border-b-2 border-white/10 pb-4 inline-block w-full">
            Customer Support
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li><Link href="#" className="hover:text-white transition">My Account</Link></li>
            <li><Link href="#" className="hover:text-white transition">Order Tracking</Link></li>
            <li><Link href="#" className="hover:text-white transition">Shipping Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition">Help & Support</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
       <FooterNewsletter/>

      </div>
      
      {/* Copyright area */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Luqman Cloth House. All Rights Reserved.</p>
      </div>
    </footer>
  );
}




export  function FooterNewsletter() {
  // Use your specific Formspree ID: xreeevlw
  const [state, handleSubmit] = useForm("xreeevlw");

  if (state.succeeded) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold border-b-2 border-white/10 pb-4 inline-block w-full text-white">
          Newsletter
        </h3>
        <div className="bg-white/10 p-4 rounded border border-[#ff4d8d]/30">
          <p className="text-[#ff4d8d] font-bold text-sm">
            ✅ Thanks for subscribing!
          </p>
          <p className="text-gray-400 text-xs mt-1">
            We've added your email to our mailing list.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold border-b-2 border-white/10 pb-4 inline-block w-full text-white">
        Newsletter
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Subscribe to get updates on new arrivals and special offers.
      </p>
      
      {/* Newsletter Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="text-sm font-bold block mb-2 text-white">
            Your E-mail Address:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full bg-black border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-[#ff4d8d] transition"
          />
          <ValidationError 
            prefix="Email" 
            field="email" 
            errors={state.errors} 
            className="text-red-500 text-xs mt-1"
          />
        </div>

        {/* Hidden field to distinguish this form from the Contact Page in your Formspree dashboard */}
        <input type="hidden" name="subject" value="New Newsletter Subscription" />

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-[#ff4d8d] text-white font-bold py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Processing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}