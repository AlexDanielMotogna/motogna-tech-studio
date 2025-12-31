'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Solutions from '@/components/sections/Solutions';
import Work from '@/components/sections/Work';
import Process from '@/components/sections/Process';
import Tech from '@/components/sections/Tech';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Work />
        <Process />
        <Tech />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
