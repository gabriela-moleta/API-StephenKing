import React from 'react';
import styles from './estilo.module.css';
import Link from 'next/link';
import axios from 'axios';
import BookListClient from './BookListClient';

export const metadata = { title: 'Lista de Livros' };

async function fetchBooks() {
  try {
    const res = await axios.get('https://stephen-king-api.onrender.com/api/books');
    const list = res.data?.data || [];
    return list.map(b => ({
      id: b.id,
      title: b.Title || b.title,
      year: b.Year || b.year,
      pages: b.Pages || b.pages,
      isbn: b.ISBN || b.isbn,
      description: (b.Notes && Array.isArray(b.Notes) ? b.Notes.join(' ') : b.Notes) || b.description || 'Sem descrição',
      image: b.image || null,
      raw: b
    }));
  } catch (e) {
    return [];
  }
}

export default async function BooksPage() {
  const books = await fetchBooks();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Livros de Stephen King</h1>
      <BookListClient initial={books} />
      <div className={styles.actions}>
        <Link href="/books/create" className={styles.createBtn}>Criar Novo</Link>
      </div>
    </div>
  );
}
