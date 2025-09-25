"use client";
import React, { useEffect, useState } from 'react';
import styles from './estilo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

export default function BookListClient({ initial }) {
  const [books, setBooks] = useState(initial || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cached = localStorage.getItem('sk_books');
    if (cached && !initial?.length) {
      try { setBooks(JSON.parse(cached)); } catch {}
    }
    if (!cached) {
      setLoading(true);
      axios.get('https://stephen-king-api.onrender.com/api/books')
        .then(r => { 
          const list = r.data?.data || [];
          const mapped = list.map(b => ({
            id: b.id,
            title: b.Title || b.title,
            year: b.Year || b.year,
            pages: b.Pages || b.pages,
            isbn: b.ISBN || b.isbn,
            description: (b.Notes && Array.isArray(b.Notes) ? b.Notes.join(' ') : b.Notes) || b.description || 'Sem descrição',
            image: b.image || null,
            raw: b
          }));
          setBooks(mapped); 
          localStorage.setItem('sk_books', JSON.stringify(mapped));
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, [initial]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className={styles.grid}>
      {books.slice(0,40).map(book => (
        <div key={book.id} className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src={book.image || '/icons/favicon.png'} alt={book.title} fill sizes="200px" className={styles.image} />
          </div>
            <h2 className={styles.cardTitle}>{book.title}</h2>
            <p className={styles.meta}>{book.year}</p>
            <p className={styles.desc}>{book.description?.slice(0,90)}...</p>
            <Link href={`/books/${book.id}`} className={styles.detailsBtn}>Detalhes</Link>
        </div>
      ))}
    </div>
  );
}
