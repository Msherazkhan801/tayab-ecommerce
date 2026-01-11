import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* About The Store */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold border-b-2 border-white/10 pb-4 inline-block w-full">
            About The Store
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            One of the most popular on the web is shopping.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm font-medium">
              <FiMapPin className="text-white" /> Wonder Street, USA, New York
            </li>
            <li className="flex items-center gap-3 text-sm font-medium">
              <FiPhone className="text-white" /> +01 321 654 214
            </li>
            <li className="flex items-center gap-3 text-sm font-medium">
              <FiMail className="text-white" /> hello@xton.com
            </li>
          </ul>
          {/* Social Icons */}
          <div className="flex gap-2 pt-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP].map((Icon, idx) => (
              <a key={idx} href="#" className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm hover:bg-[#ff4d8d] hover:text-white transition-all duration-300">
                <Icon size={14} />
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
            <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition">Shop Now!</Link></li>
            <li><Link href="#" className="hover:text-white transition">Woman's</Link></li>
            <li><Link href="#" className="hover:text-white transition">FAQ's</Link></li>
            <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white transition">Customer Services</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold border-b-2 border-white/10 pb-4 inline-block w-full">
            Customer Support
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li><Link href="#" className="hover:text-white transition">My Account</Link></li>
            <li><Link href="#" className="hover:text-white transition">Checkout</Link></li>
            <li><Link href="#" className="hover:text-white transition">Cart</Link></li>
            <li><Link href="#" className="hover:text-white transition">FAQ's</Link></li>
            <li><Link href="#" className="hover:text-white transition">Order Tracking</Link></li>
            <li><Link href="#" className="hover:text-white transition">Help & Support</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold border-b-2 border-white/10 pb-4 inline-block w-full">
            Newsletter
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            To get the latest news and latest updates from us.
          </p>
          <div className="space-y-4">
            <label className="text-sm font-bold block">Your E-mail Address:</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-black border border-white/20 p-3 text-sm focus:outline-none focus:border-white transition"
            />
            <button className="w-full bg-[#ff4d8d] text-white font-bold py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

      </div>
      
      {/* Copyright area */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        <p>© Xton. All Rights Reserved by EnvyTheme</p>
      </div>
    </footer>
  );
}