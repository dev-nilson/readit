import { Inter } from "@next/font/google";
import Head from "next/head";
import PostBox from "@/components/PostBox/PostBox";
import Feed from "@/components/Feed/Feed";

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
            <div className="sticky top-36 mx-5 mt-9 h-fit hidden min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
              <p className="uppercase text-xs p-3 font-semibold">Popular Categories</p>
              <div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
