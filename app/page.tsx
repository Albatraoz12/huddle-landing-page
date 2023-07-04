import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className='bg-big'>
        <h1>hello World</h1>
      </section>
    </main>
  );
}
