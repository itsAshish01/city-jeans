import Head from 'next/head';

import Hero from '../sections/Hero';
import Categories from '../sections/Categories';
import Story from '../sections/Story';
import Features from '../sections/Features';
import Testimonials from '../sections/Testimonials';
import BestSellers from '../sections/BestSellers';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>City Jeans - Ramgarh</title>
        <meta
          name='description'
          content='Online Shopping Site for Fashion & Lifestyle in Ramgarh. We brings you a variety of clothing, accessories and lifestyle products.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Hero />
        <Categories />
        <BestSellers />
        <Story />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
