import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© {new Date().getFullYear()} Projeto Acadêmico Stephen King Books</p>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/books" className={styles.link}>Livros</Link>
          <Link href="/apiinfo" className={styles.link}>API</Link>
        </div>
      </div>
    </footer>
  );
}
