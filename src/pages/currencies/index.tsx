import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../../utils/trpc";


const Currencies: NextPage = () => {
  const {data: currencies, isLoading} = trpc.useQuery(["currency.getAll"]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Track all your " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {!isLoading ? currencies?.map((currency,index) => (
            <div key={index}>
              <p>{currency.id}</p>
              <p>{currency.code}</p>
            </div>))
          :
          <p>Loading..</p>
          }
        </div>
    </>
  );
};

export default Currencies;
