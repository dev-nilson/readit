import { Inter } from "@next/font/google";
import Head from "next/head";
import PostBox from "@/components/PostBox/PostBox";
import Feed from "@/components/Feed/Feed";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Readit</title>
        <meta name="readit" content="advice for life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <main className="max-w-5xl mt-10 pb-5 mx-auto">
          <PostBox />
          <div className="flex">
            <Feed />
            <Sidebar />
          </div>
        </main>
      </div>
    </>
  );
}
