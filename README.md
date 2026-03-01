# Fiorelle d'Aura — Joias Exclusivas

Loja virtual de joias artesanais construída com **React 19 + Vite 7**, hospedada no **GitHub Pages**.

## ✨ Funcionalidades

- 🛒 **Carrinho funcional** — adicionar, remover, controlar quantidade, persistência via `localStorage`
- 💬 **Finalizar via WhatsApp** — checkout com mensagem de pedido pré-preenchida
- �� **Formulário de contato real** — integrado ao [Formspree](https://formspree.io/) (funciona 100% estático)
- 🔍 **Filtro de produtos** por categoria (anéis, colares, brincos, pulseiras)
- 📱 **Mobile-first** — hamburger menu, touch targets ≥ 44px, layout responsivo

## 🚀 Rodar localmente

```bash
npm install
npm run dev        # dev server em http://localhost:5173/FiorelleDAura/
npm run build      # produção em dist/
npm run preview    # preview do build
```

## 🌐 Deploy (GitHub Pages)

O deploy é automático via **GitHub Actions** (`.github/workflows/deploy.yml`):

1. Acesse **Settings → Pages** no repositório
2. Em **Source**, selecione **GitHub Actions**
3. Qualquer push para `main` fará o build e deploy automaticamente

A URL final será: `https://<usuario>.github.io/FiorelleDAura/`

## 🛠 Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 19 |
| Build | Vite 7 |
| Estilo | CSS Modules |
| Estado | Context API + useReducer |
| Formulário | Formspree (serverless) |
| Deploy | GitHub Pages + GitHub Actions |
