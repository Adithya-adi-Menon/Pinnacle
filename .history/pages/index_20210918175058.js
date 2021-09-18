import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pinnacle</title>
        <meta name="description" content="A s" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello</h1>
    </div>
  );
}
