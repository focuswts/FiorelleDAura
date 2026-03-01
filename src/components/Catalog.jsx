import { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import styles from './Catalog.module.css';

const FILTERS = [
  { key: 'all',      label: 'Todos' },
  { key: 'anel',     label: 'Anéis' },
  { key: 'colar',    label: 'Colares' },
  { key: 'brinco',   label: 'Brincos' },
  { key: 'pulseira', label: 'Pulseiras' },
];

export default function Catalog() {
  const [active, setActive] = useState('all');

  const visible = active === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === active);

  return (
    <section id="catalogo" className={styles.section}>
      <div className="section-header">
        <p className="section-tag">Coleção Exclusiva</p>
        <h2 className="section-title">Nossas Peças</h2>
        <p className="section-sub">Cada joia é uma obra de arte criada com dedicação e materiais nobres</p>
      </div>

      <div className={styles.filters} role="group" aria-label="Filtrar produtos">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`${styles.filterBtn} ${active === f.key ? styles.active : ''}`}
            onClick={() => setActive(f.key)}
            aria-pressed={active === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
