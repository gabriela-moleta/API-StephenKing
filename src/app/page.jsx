import Image from 'next/image';
import Link from 'next/link';
import styles from './estilo.module.css';

export default function Home() {
  return (
    <main className={styles.hero}>
      <span className={styles.badge}>Turma: 2TDS2 • Escola: SENAI Valinhos</span>
      <div className={styles.avatarWrapper}>
        <Image src="/images/eu.jpg" width={800}
          height={600}
          alt="Responsive"
          style={{
            width: '100%',
            height: 'auto'
          }} />
      </div>
      <div className={styles.nameBlock}>
        <h1 className={styles.title}>Gabriela Moleta</h1>
        <h2 className={styles.subtitle}>Construindo interfaces modernas com Next.js 15</h2>
      </div>
      <p className={styles.quote}>
        "A persistência transforma intenção em realidade. <em>Código é criatividade em estado lógico.</em>"
      </p>
      <div className={styles.links}>
        <Link href="/books" className={styles.linkBtn}>Ver Livros</Link>
        <Link href="/apiinfo" className={styles.linkBtn}>Sobre a API</Link>
      </div>
      <p className={styles.footer}>Projeto acadêmico • Next.js 15 • API Stephen King</p>
    </main>
  );
}
