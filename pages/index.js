import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tommy Danks</title>
        <meta name="description" content="Tommy Danks Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
