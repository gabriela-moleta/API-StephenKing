"use client";
import Link from 'next/link';
import styles from './header.module.css';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/books', label: 'Livros' },
  { href: '/books/create', label: 'Criar' },
  { href: '/apiinfo', label: 'API' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>Stephen <span>King</span> Books</div>
        <nav className={styles.nav}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? styles.active : styles.link}>{l.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
