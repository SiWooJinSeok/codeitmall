import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    const res = await axios.get(`/products`);
    const nextProduct = res.data.results;
    setProducts(nextProduct);
  };

  useEffect(() => {
    getProducts();
  }, []);
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
