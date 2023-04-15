import Header from "@/components/Header/Header";
import { getBrands, getTags } from "@/services";
import Head from "next/head";
import { QueryClient, dehydrate } from "react-query";
import ProductContainer from "@/features/Product/Container/ProductContainer";
import Cart from "@/features/Cart/Cart";
import FilterContainer from "@/features/ProductFilter/FilterContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Market</title>
        <meta name="description" content="Market listing demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex min-h-screen justify-center bg-gray-100">
        <div className="mx-6 my-8 flex h-full w-full max-w-[1232px] justify-center gap-4">
          <FilterContainer />
          <ProductContainer />
          <Cart />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(["tags"], getTags),
    queryClient.prefetchQuery(["brands"], getBrands),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
