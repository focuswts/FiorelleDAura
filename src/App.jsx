import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import Guarantee from './components/Guarantee';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WhatsAppFloat from './components/WhatsAppFloat';
import './index.css';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  // Close cart on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape' && cartOpen) setCartOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [cartOpen]);

  return (
    <CartProvider>
      <ToastProvider>
        <Navbar onOpenCart={() => setCartOpen(true)} />
        <main>
          <Hero />
          <Catalog />
          <About />
          <Guarantee />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </ToastProvider>
    </CartProvider>
  );
}
