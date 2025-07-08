import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Athena Project</title>
        <meta name="description" content="A strategic application built with Athena's wisdom" />
      </Head>
      <main className="main">
        <h1 className="title">Athena Project</h1>
      </main>
    </div>
  );
}