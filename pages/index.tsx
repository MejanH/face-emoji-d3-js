import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <div className="m-8">
          <h1 id="title" className="text-center">
            Welcome
          </h1>
        </div>
      </main>

      <footer className="border-t-2 border-gray-200">
        <h4 className="text-center">Muhammad Mejanul Haque</h4>
      </footer>
    </Layout>
  );
}
