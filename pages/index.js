import Head from "next/head";
import styles from "../styles/Home.module.css";

import MidHeading from "../components/mid-Heading/MidHeading";
import NavBar from "../components/navbar/NavBar";
import SearchBar from "../components/search-bar/SearchBar";
import Product from "../components/product/Product";
import useSWR from "swr";
import Loader from "../components/loader/Loader";

export default function Home() {
  const fetcher = async () => {
    const response = await fetch(`api/woodProducts`);
    const products = response.json();

    return products;
  };

  const { data, error } = useSWR("api/woodProducts", fetcher);

  const products = data;

  if (error) return <div>Error encountered while fetching!!!</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Timberhub Front End Exercise</title>
        <meta
          name="description"
          content="Damian Aluku Timberhub Front End Exercise"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className={styles.main}>
        <MidHeading />
        <SearchBar />

        <div className={styles.display}>
          <div className={styles.discription}>
            <p>Product (Specie, Grade, Drying)</p>
            <p>Dimensions (Thickness x Width)</p>
          </div>
          {!products ? (
            <Loader />
          ) : (
            products?.map((item, i) => (
              <Product key={item.rows[0].id} product={item} i={i} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

/* const fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/api/woodProducts");
  // const response = await fetch("api/woodProducts");
  const data = await response.json();

  return data;
};

export const getServerSideProps = async () => {
  const products = await fetchProducts();

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
    },
  };
}; */

/* const fetchProducts = async () => {
  console.log("revalidating post list...");
  const response = await fetch("http://localhost:3000/api/woodProducts");
  const data = await response.json();

  return data;
};

export const getStaticProps = async () => {
  const products = await fetchProducts();

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
    },
    revalidate: 2,
  };
}; */
