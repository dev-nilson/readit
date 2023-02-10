import { Inter } from "@next/font/google";
import Header from "@/components/Header/Header";
import Head from "next/head";
import PostBox from "@/components/PostBox/PostBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Readit</title>
        <meta name="readit" content="advice for life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <PostBox />
      </main>
    </>
  );
}
