import type { NextPage } from "next";
import Head from "next/head";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Track all your " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          Dashboard
        </div>
    </>
  );
};

export default Home;
