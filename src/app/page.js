import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import PromoCards  from '@/components/PromoCards';
import ProductGrid  from '@/components/ProductGrid';
import DiscountBanner  from '@/components/DiscountBanner';
import PopularProducts  from '@/components/PopularProducts';
import Features  from '@/components/Features';
import InstagramFeed  from '@/components/InstagramFeed';
import Footer  from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section */}
      {/* Note: The HeroSlider handles its own spacing/padding */}
      <HeroSlider />

      {/* 3. Placeholder for next sections (e.g., Products) */}
      <div className="max-w-7xl mx-auto py-16 px-4">
      <PromoCards />
      <ProductGrid/>
      <DiscountBanner/>
      <PopularProducts/>
      <Features/>
      <InstagramFeed/>
      </div>
      <Footer/>
    </main>
  );
}