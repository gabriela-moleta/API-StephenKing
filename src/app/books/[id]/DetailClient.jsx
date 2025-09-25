"use client";
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DetailClient({ error }) {
  useEffect(() => {
    if (error) toast.error('Falha ao carregar detalhes (API)');
  }, [error]);
  return <ToastContainer position="top-right" autoClose={2500} />;
}
