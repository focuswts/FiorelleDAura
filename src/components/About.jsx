import styles from './About.module.css';

const STATS = [
  { value: null, id: 'years', label: 'Anos de história', suffix: '+', founded: 2012 },
  { value: '4K+', label: 'Clientes felizes' },
  { value: '100%', label: 'Ouro certificado' },
  { value: '500+', label: 'Peças exclusivas' },
];

function yearsOf(founded) {
  return (new Date().getFullYear() - founded) + '+';
}

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.mainBox}>🌸</div>
          <div className={styles.decoBorder} />
        </div>

        <div className={styles.text}>
          <p className="section-tag">Nossa História</p>
          <h2 className={styles.title}>Tradição e arte em cada detalhe</h2>
          <div className="deco-line" />
          <p className={styles.desc}>
            A Fiorelle d&apos;Aura nasceu do amor genuíno pela joalheria artesanal.
            Fundada em 2012, nossa marca surgiu com o propósito de oferecer peças únicas
            que transcendem o tempo — criadas à mão por ourives especializados, usando
            apenas metais certificados e gemas de origem controlada.
          </p>
          <p className={styles.desc}>
            Cada peça da nossa coleção carrega a alma de quem a criou e a história de
            quem a usa. Acreditamos que uma joia não é apenas um ornamento — é uma
            memória, uma conquista, um símbolo de amor que perdura gerações.
          </p>

          <div className={styles.stats}>
            {STATS.map((s, i) => (
              <div key={i} className={styles.stat}>
                <p className={styles.statNum}>
                  {s.founded ? yearsOf(s.founded) : s.value}
                </p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
