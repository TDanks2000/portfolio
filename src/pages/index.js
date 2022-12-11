import Head from "next/head";
import Image from "next/image";
import PageOne from "../components/pageOne";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tommy Danks</title>
        <meta name="description" content="Tommy Danks Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <PageOne />
      </body>
    </div>
  );
}
