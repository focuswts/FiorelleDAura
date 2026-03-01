import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import styles from './ProductCard.module.css';

function fmt(n) {
  return 'R$\u00a0' + n.toLocaleString('pt-BR');
}

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [overlayOpen, setOverlayOpen] = useState(false);

  const handleAdd = () => {
    addItem(product.name, product.price);
    showToast('✦ ' + product.name + ' adicionado ao carrinho!');
    setOverlayOpen(false);
  };

  return (
    <article className={styles.card}>
      <div
        className={styles.imgWrap}
        onClick={() => setOverlayOpen(o => !o)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOverlayOpen(o => !o)}
        aria-label={`Ver detalhes de ${product.name}`}
      >
        <span className={styles.icon} aria-hidden="true">{product.icon}</span>
        {product.badge && <span className={styles.badge}>{product.badge}</span>}
        <div className={`${styles.overlay} ${overlayOpen ? styles.overlayVisible : ''}`}>
          <button
            className={styles.addBtn}
            onClick={e => { e.stopPropagation(); handleAdd(); }}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.material}>{product.material}</p>
        <p className={styles.price}>{fmt(product.price)}</p>
      </div>
    </article>
  );
}
