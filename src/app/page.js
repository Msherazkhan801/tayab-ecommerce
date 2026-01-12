import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import PromoCards from '@/components/PromoCards';
import ProductGrid from '@/components/ProductGrid';
import DiscountBanner from '@/components/DiscountBanner';
import PopularProducts from '@/components/PopularProducts';
import Features from '@/components/Features';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero section stays outside the container for full-width */}
      <section id="home">
        <HeroSlider />
      </section>

      <div className="max-w-7xl mx-auto py-16 px-4 space-y-20">
        <section id="shop">
          <PromoCards />
        </section>

        <section id="recent">
          <ProductGrid />
        </section>

        <DiscountBanner />

        <section id="popular">
          <PopularProducts />
        </section>

        <Features />
        
        <section id="blog">
          <InstagramFeed />
        </section>
      </div>

      {/* <Footer /> */}
    </main>
  );
}