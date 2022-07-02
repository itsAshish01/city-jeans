import Head from 'next/head';

import Hero from '../sections/Hero';
import Categories from '../sections/Categories';
import Story from '../sections/Story';
import Features from '../sections/Features';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Hero />
        <Categories />
        <Story />
        <Features />
      </main>
    </div>
  );
}
