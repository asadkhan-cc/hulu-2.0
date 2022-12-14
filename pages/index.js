import CheckableTag from "antd/lib/tag/CheckableTag";
import Head from "next/head";
import Image from "next/image";
import Header from "../src/Component/Header";
import Results from "../src/Component/Results";
import ScrollBar from "../src/Component/ScrollBar";
import Loginpage from "../src/Pages/LogInPage";
import request from "../Utils/request";

export default function Home({ results }) {
  // console.log(results);
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link />
      </Head>

      <main className="">
        <Header></Header>
        <ScrollBar />
        <Results results={results} />
      </main>

      <footer></footer>
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  // console.log(genre, "genre");
  // console.log(request.fetchingTrending.url, "request[genre]?.url");

  const key = "cdbf45dcd63904784d53f579cbf9ecbd";
  console.log(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchingTrending.url
    }&Language=en-US`
  );
  const requests = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchingTrending.url
    }&Language=en-US`
  )
    // const requests = await fetch(
    //   "https://api.themoviedb.org/3/discover/movie?api_key=cdbf45dcd63904784d53f579cbf9ecbd"
    // )
    .then((res) => res.json());
  // .then((res) => console.log(res));
  return {
    props: {
      results: requests.results,
    },
  };
}
