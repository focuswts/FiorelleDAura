import styles from './Guarantee.module.css';

const ITEMS = [
  { icon: '🛡️', title: 'Garantia de 1 Ano',           desc: 'Todas as peças possuem garantia de 12 meses contra quaisquer defeitos de fabricação.' },
  { icon: '🔄', title: 'Troca em 30 Dias',             desc: 'Não ficou satisfeita? Trocamos sua peça em até 30 dias com frete grátis na devolução.' },
  { icon: '💳', title: 'Reembolso Total',               desc: 'Garantimos reembolso integral em até 7 dias úteis, sem burocracia ou questionamentos.' },
  { icon: '✅', title: 'Certificado de Autenticidade', desc: 'Cada peça acompanha laudo e certificado de autenticidade do metal e das gemas utilizadas.' },
];

export default function Guarantee() {
  return (
    <section id="garantia" className={styles.section}>
      <div className="section-header">
        <p className="section-tag">Compromisso com você</p>
        <h2 className="section-title">Garantia &amp; Política de Trocas</h2>
        <p className="section-sub">Sua tranquilidade é nossa prioridade — compre com total segurança</p>
      </div>

      <div className={styles.grid}>
        {ITEMS.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
