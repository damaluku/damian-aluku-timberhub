import "../styles/globals.css";
import NavBar from "../components/navbar/NavBar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Timberhub Front End Exercise</title>
        <meta
          name="description"
          content="Damian Aluku Timberhub Front End Exercise"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
