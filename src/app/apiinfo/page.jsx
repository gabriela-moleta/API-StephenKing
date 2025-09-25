import React from 'react';
import styles from './estilo.module.css';

export const metadata = { title: 'Sobre a API' };

const ApiInfoPage = () => {
  const apiName = 'Stephen King Books API';
  const baseURL = 'https://stephen-king-api.onrender.com/api';
  const endpoint = '/books';
  const sampleAttributes = [
    'id', 'title', 'year', 'pages', 'isbn', 'description', 'rating'
  ];
  const supportedRoutes = [
    { method: 'GET', route: '/books', desc: 'Lista todos os livros' },
    { method: 'GET', route: '/books/:id', desc: 'Detalhes de um livro' },
    { method: 'POST', route: '/books', desc: 'Cria um novo livro (se suportado)' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Informações da API</h1>
      <section className={styles.section}>
        <h2>Nome</h2>
        <p>{apiName}</p>
      </section>
      <section className={styles.section}>
        <h2>Documentação Oficial</h2>
        <a href="https://stephen-king-api.onrender.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          https://stephen-king-api.onrender.com
        </a>
      </section>
      <section className={styles.section}>
        <h2>Base URL</h2>
        <code className={styles.code}>{baseURL}</code>
      </section>
      <section className={styles.section}>
        <h2>Endpoint Utilizado</h2>
        <code className={styles.code}>{endpoint}</code>
      </section>
      <section className={styles.section}>
        <h2>Atributos Principais</h2>
        <ul className={styles.list}>
          {sampleAttributes.map(a => <li key={a}>{a}</li>)}
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Descrição</h2>
        <p>API pública que retorna informações sobre livros do autor Stephen King: título, ano de publicação, páginas, ISBN, sinopse e avaliação.</p>
      </section>
      <section className={styles.section}>
        <h2>Rotas e Métodos</h2>
        <ul className={styles.list}>
          {supportedRoutes.map(r => (
            <li key={r.method + r.route}>
              <strong>{r.method}</strong> {r.route} – {r.desc}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ApiInfoPage;
