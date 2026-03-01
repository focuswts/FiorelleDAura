import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.top}>
        <div>
          <p className={styles.logo}>Fiorelle <em>d&apos;Aura</em></p>
          <p className={styles.tagline}>
            Joias artesanais em ouro certificado,<br />
            criadas para celebrar cada momento da sua vida com elegância e distinção.
          </p>
        </div>
        <div>
          <p className={styles.colTitle}>Navegação</p>
          <ul className={styles.links}>
            <li><a href="#hero">Início</a></li>
            <li><a href="#catalogo">Coleção</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        <div>
          <p className={styles.colTitle}>Políticas</p>
          <ul className={styles.links}>
            <li><a href="#garantia">Garantia</a></li>
            <li><a href="#garantia">Política de Trocas</a></li>
            <li><a href="#garantia">Reembolso</a></li>
            <li><a href="#garantia">Certificado</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>© {new Date().getFullYear()} Fiorelle d&apos;Aura. Todos os direitos reservados.</p>
        <p className={styles.copy}>Rolândia / PR — contato@fiorelledaura.com.br</p>
      </div>
    </footer>
  );
}
