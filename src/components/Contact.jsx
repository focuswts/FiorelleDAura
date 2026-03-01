import { useState } from 'react';
import { FORMSPREE_ENDPOINT, WHATSAPP_NUMBER } from '../data/products';
import { useToast } from '../context/ToastContext';
import styles from './Contact.module.css';

const INFO = [
  { icon: '📱', label: 'WhatsApp', value: '(43) 99999-0000' },
  { icon: '✉️', label: 'E-mail',   value: 'contato@fiorelledaura.com.br' },
  { icon: '📍', label: 'Localização', value: 'Rolândia / PR' },
];

const SUBJECTS = [
  'Informações sobre produtos',
  'Pedido personalizado',
  'Troca e devoluções',
  'Garantia',
  'Outros',
];

export default function Contact() {
  const { showToast } = useToast();
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' });

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('done');
        setForm({ nome: '', email: '', assunto: '', mensagem: '' });
        showToast('✦ Mensagem enviada com sucesso! Em breve entraremos em contato.');
      } else {
        setStatus('error');
        showToast('✦ Erro ao enviar. Tente via WhatsApp.');
      }
    } catch {
      setStatus('error');
      showToast('✦ Erro ao enviar. Tente via WhatsApp.');
    }
  };

  return (
    <section id="contato" className={styles.section}>
      <div className="section-header">
        <p className="section-tag">Fale Conosco</p>
        <h2 className="section-title">Entre em Contato</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.info}>
          <p className={styles.intro}>
            Estamos aqui para ajudar você a encontrar a joia perfeita.
            Entre em contato e nossa equipe responderá com prazer.
          </p>
          {INFO.map(item => (
            <div key={item.label} className={styles.item}>
              <span className={styles.itemIcon}>{item.icon}</span>
              <div>
                <p className={styles.itemLabel}>{item.label}</p>
                <p className={styles.itemValue}>{item.value}</p>
              </div>
            </div>
          ))}
          <a
            className={styles.whatsappLink}
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chamar no WhatsApp
          </a>
        </div>

        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="nome">Nome</label>
            <input className={styles.input} id="nome" name="nome" type="text" placeholder="Seu nome completo" value={form.nome} onChange={onChange} required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">E-mail</label>
            <input className={styles.input} id="email" name="email" type="email" placeholder="seu@email.com.br" value={form.email} onChange={onChange} required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="assunto">Assunto</label>
            <select className={styles.select} id="assunto" name="assunto" value={form.assunto} onChange={onChange}>
              <option value="">Selecione um assunto</option>
              {SUBJECTS.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="mensagem">Mensagem</label>
            <textarea className={styles.textarea} id="mensagem" name="mensagem" placeholder="Escreva sua mensagem aqui..." value={form.mensagem} onChange={onChange} required />
          </div>
          <button type="submit" className="btn btn-gold" style={{ width: '100%' }} disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
}
