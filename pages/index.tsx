import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import axios from "@/lib/axios";
import Head from "next/head";
import Spinner from "@/components/Spinner";

export async function getStaticProps() {
  const res = await axios.get(`/products`);
  const products = res.data.results ?? [];
  return {
    props: {
      products,
    },
  };
}

interface Props {
  products: ProductType[];
}

export default function Home({ products }: Props) {
  if (!products) {
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Codeitmall</title>
      </Head>
      <SearchForm />
      <ProductList className={styles.products} products={products} />
    </>
  );
}
