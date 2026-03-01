import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#hero',     label: 'Início' },
  { href: '#catalogo', label: 'Coleção' },
  { href: '#sobre',    label: 'Sobre' },
  { href: '#garantia', label: 'Garantia' },
  { href: '#contato',  label: 'Contato' },
];

export default function Navbar({ onOpenCart }) {
  const { totalQty } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <a className={styles.logo} href="#hero" onClick={close}>
        Fiorelle <em>d&apos;Aura</em>
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`} id="navLinks">
        {NAV_LINKS.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={close}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.cartBtn}
          onClick={onOpenCart}
          aria-label="Carrinho de compras"
          aria-expanded={false}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          {totalQty > 0 && (
            <span className={styles.badge} aria-live="polite">{totalQty}</span>
          )}
        </button>

        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          aria-controls="navLinks"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
