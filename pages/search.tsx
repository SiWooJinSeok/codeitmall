import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Header from "@/components/Header";
import Container from "@/components/Container";
import styles from "@/styles/Search.module.css";
import Head from "next/head";

export default function Search() {
  const router = useRouter();
  const q = router.query["q"];
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async (query: string) => {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProduct = res.data.results;
    setProducts(nextProduct);
  };

  useEffect(() => {
    if (!q) {
      return;
    }
    getProducts(q.toString());
  }, [q]);

  return (
    <>
      <Head>
        <title>{q} 검색 결과 - Codeitmall</title>
      </Head>
      <Header />
      <Container>
        <SearchForm initialValue={q?.toString()} />
        <h2 className={styles.title}>
          <span className={styles.keyword}>{q}</span> 검색 결과
        </h2>
        <ProductList className={styles.productList} products={products} />
      </Container>
    </>
  );
}
