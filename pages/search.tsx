import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import Container from "@/components/Container";
import styles from "@/styles/Search.module.css";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const q = context.query?.q;

  const res = await axios.get(`/products/?q=${q}`);
  const products = res.data.results ?? [];

  return {
    props: {
      products,
      q,
    },
  };
}

interface Props {
  products: ProductType[];
  q: string;
}

export default function Search({ products, q }: Props) {
  return (
    <>
      <Head>
        <title>{q} 검색 결과 - Codeitmall</title>
      </Head>
      <Container>
        <SearchForm initialValue={q} />
        <h2 className={styles.title}>
          <span className={styles.keyword}>{q}</span> 검색 결과
        </h2>
        <ProductList className={styles.productList} products={products} />
      </Container>
    </>
  );
}
