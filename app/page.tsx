import { Hero } from '@/components/Hero';
import About from '@/components/About';
import Values from '@/components/Values';
import { ProductsCatalog } from '@/components/ProductsCatalog';
import { ShoppingCart } from '@/components/ShoppingCart';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Values />
        <ProductsCatalog />
        <ShoppingCart />
      </main>
      <Footer />
    </>
  );
}
