import Head from "next/head";
import Main from "../components/Main";


export default function Home() {
  return (
    <>
      <Head>
        <title>Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.ico" />
      </Head>
      <Main />
    </>
  );
}
