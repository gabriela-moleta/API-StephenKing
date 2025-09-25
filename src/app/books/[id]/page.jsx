import React from 'react';
import styles from './estilo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import DetailClient from './DetailClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { id } = await params;
  return { title: `Livro ${id}` };
}

async function fetchBook(id) {
  try {
    let res = await axios.get(`https://stephen-king-api.onrender.com/api/book/${id}`);
    let b = res.data?.data;
    if ((!b || !b.id) && isNaN(Number(id))) {
      // tentar como handle textual
      res = await axios.get(`https://stephen-king-api.onrender.com/api/book/${encodeURIComponent(id)}`);
      b = res.data?.data;
    }
    if (!b || !b.id) return null;
    return {
      id: b.id,
      title: b.Title || b.title,
      year: b.Year || b.year,
      pages: b.Pages || b.pages,
      isbn: b.ISBN || b.isbn,
      description: (b.Notes && Array.isArray(b.Notes) ? b.Notes.join(' ') : b.Notes) || 'Sem descrição',
      rating: b.Rating || b.rating,
      image: b.image || null,
      raw: b
    };
  } catch (e) {
    return null;
  }
}

export default async function BookDetailPage({ params }) {
  const { id } = await params;
  const book = await fetchBook(id);
  if (!book) {
    notFound();
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cover}>
          <Image src={book.image || '/icons/favicon.png'} alt={book.title} fill sizes="400px" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{book.title}</h1>
          <ul className={styles.list}>
            <li><strong>Ano:</strong> {book.year}</li>
            <li><strong>Páginas:</strong> {book.pages}</li>
            <li><strong>ISBN:</strong> {book.isbn}</li>
            {book.rating && <li><strong>Avaliação:</strong> {book.rating}</li>}
          </ul>
          <p className={styles.desc}>{book.description}</p>
          <div className={styles.actions}>
            <Link href="/books" className={styles.btn}>Voltar</Link>
            <Link href="/" className={styles.btnOutline}>Home</Link>
          </div>
        </div>
      </div>
      <DetailClient error={false} />
    </div>
  );
}
