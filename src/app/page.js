"use client";
import DiscountBanner from "@/components/DiscountBanner";
import Features from "@/components/Features";
import HeroSlider from "@/components/HeroSlider";
import PopularProducts from "@/components/PopularProducts";
import ProductGrid from "@/components/ProductGrid";
import PromoCards from "@/components/PromoCards";
import { addToCart } from "@/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import Contact from "./contact/page";
import InstagramFeed from "@/components/InstagramFeed";
// ... your other imports

export default function Home() {
  const dispatch = useDispatch();

  const handleSelectProduct = (product) => {
    // 1. Send the product to Redux
    dispatch(addToCart(product));

    // 2. Scroll to contact
    // document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white">
      <section id="home"><HeroSlider /></section>
      
      {/* Pass the simple dispatch handler to your grids */}
      <section id="shop" className="mt-4"><PromoCards /></section>
      
      <div className="max-w-7xl mx-auto py-8 px-4 space-y-20">
        <section id="recent">
          <ProductGrid onProductClick={handleSelectProduct} />
        </section>

        <DiscountBanner />

        <section id="popular">
          <PopularProducts onProductClick={handleSelectProduct} />
        </section>

        <Features />

        <section id="contact">
          {/* Note: We don't pass props anymore! Contact will talk to Redux directly */}
          <Contact />
        </section>
      </div>
      <InstagramFeed />
    </main>
  );
}