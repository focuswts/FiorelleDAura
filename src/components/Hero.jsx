import styles from './Hero.module.css';

export default function Hero() {
  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.ornament} aria-hidden="true">✦</div>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Nova Coleção 2025</p>
        <h1 className={styles.title}>
          Joias que contam<br />sua história
        </h1>
        <p className={styles.sub}>
          Peças artesanais em ouro certificado, criadas para mulheres que celebram
          cada momento da vida com elegância atemporal.
        </p>
        <div className={styles.buttons}>
          <button className="btn btn-gold" onClick={() => scroll('catalogo')}>Ver Coleção</button>
          <button className="btn btn-outline" onClick={() => scroll('sobre')}>Nossa História</button>
        </div>
      </div>
    </section>
  );
}
