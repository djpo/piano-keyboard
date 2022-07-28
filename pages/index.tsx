import type { NextPage } from 'next';
import Head from 'next/head';
import { Piano } from '../components/piano';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>djpo keys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.testBox}>
          <Piano />
        </div>
      </main>
    </div>
  )
};

export default Home;
