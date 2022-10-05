import styles from "../styles/Home.module.css";

import MidHeading from "../components/mid-Heading/MidHeading";
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
