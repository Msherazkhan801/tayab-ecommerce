"use client"; // Must be all lowercase
import { useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import PromoCards from "@/components/PromoCards";
import ProductGrid from "@/components/ProductGrid";
import DiscountBanner from "@/components/DiscountBanner";
import PopularProducts from "@/components/PopularProducts";
import Features from "@/components/Features";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "./contact/page";

export default function Home() {
const [selectedProducts, setSelectedProducts] = useState([]);

  // const handleSelectProduct = (product) => {
  //   setSelectedProduct({ ...product, quantity: 1 });
  //   // Scroll to contact section
  //   document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  // };
  const handleSelectProduct = (product) => {
    // Check if product is already in the list to avoid duplicates
    if (!selectedProducts.find((p) => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  };

  const removeProduct = (productId) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== productId));
  };

  const updateQuantity = (productId, newQty) => {
    setSelectedProducts(selectedProducts.map(p => 
      p.id === productId ? { ...p, quantity: Math.max(1, newQty) } : p
    ));
  };
  return (
    <main className="min-h-screen bg-white">
      {/* Hero section stays outside the container for full-width */}
      <section id="home">
        <HeroSlider />
      </section>

      <section id="shop" className="mt-4">
        <PromoCards />
      </section>
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
          <Contact 
          selectedProducts={selectedProducts} 
        onRemove={removeProduct} 
        onUpdateQty={updateQuantity}
      />
        </section>
      </div>
      <InstagramFeed />
    </main>
  );
}
