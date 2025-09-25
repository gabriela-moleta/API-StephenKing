"use client";
import React, { useState } from 'react';
import styles from './estilo.module.css';
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function CreateBookPage() {
	const router = useRouter();
	const [form, setForm] = useState({ title: '', year: '', pages: '', isbn: '', description: '', image: '' });
	const [loading, setLoading] = useState(false);

	function handleChange(e){
		const { name, value } = e.target;
		setForm(prev => ({...prev,[name]:value}));
	}

	async function handleSubmit(e){
		e.preventDefault();
		if(!form.title || !form.year || !form.description){
			toast.error('Preencha os campos obrigatórios');
			return;
		}
		setLoading(true);
		try {
			await axios.post('https://stephen-king-api.onrender.com/api/books', form);
			toast.success('Enviado (se a API não suportar, simulação)!');
			setTimeout(()=> router.push('/books'), 1400);
		} catch(err){
			toast.error('Falha ao enviar (endpoint pode não aceitar POST)');
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Criar Livro</h1>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.field}><label>Título*</label><input name="title" value={form.title} onChange={handleChange} required /></div>
				<div className={styles.inline}>
					<div className={styles.field}><label>Ano*</label><input name="year" value={form.year} onChange={handleChange} required /></div>
					<div className={styles.field}><label>Páginas</label><input name="pages" value={form.pages} onChange={handleChange} /></div>
					<div className={styles.field}><label>ISBN</label><input name="isbn" value={form.isbn} onChange={handleChange} /></div>
				</div>
				<div className={styles.field}><label>Imagem (URL)</label><input name="image" value={form.image} onChange={handleChange} /></div>
				<div className={styles.field}><label>Descrição*</label><textarea rows={5} name="description" value={form.description} onChange={handleChange} required /></div>
				<button disabled={loading} className={styles.submit}>{loading ? 'Enviando...' : 'Salvar'}</button>
			</form>
			<div className={styles.actions}><Link href="/books" className={styles.back}>Voltar</Link></div>
			<ToastContainer position="top-right" autoClose={2500} />
		</div>
	);
}
