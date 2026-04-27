import { Hero } from '@/components/Hero';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Values from '@/components/Values';
import { InteractiveMap } from '@/components/InteractiveMap';
import { ProductsCatalog } from '@/components/ProductsCatalog';
import Contact from '@/components/Contact';
import { ShoppingCart } from '@/components/ShoppingCart';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="values">
          <Values />
        </section>
        <section id="map">
          <InteractiveMap />
        </section>
        <section id="products">
          <ProductsCatalog />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <ShoppingCart />
      </main>
      <Footer />
    </>
  );
}
