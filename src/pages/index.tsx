import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Readit</title>
        <meta name="readit" content="advice for life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        Home
      </main>
    </>
  )
}
