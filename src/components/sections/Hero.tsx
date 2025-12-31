'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/locale-context';
import Container from '../ui/Container';
import Button from '../ui/Button';
import CodeAnimation from '../ui/CodeAnimation';
import ContactModal from '../ui/ContactModal';

export default function Hero() {
  const { t } = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="max-w-xl pt-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6">
                {t.hero.headline}
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                {t.hero.subheadline}
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" onClick={() => setIsModalOpen(true)}>
                  {t.hero.cta1}
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToServices}>
                  {t.hero.cta2}
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-600">{t.hero.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-600">{t.hero.trust2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-600">{t.hero.trust3}</span>
                </div>
              </div>
            </div>

            <div className="relative lg:-mr-8 xl:-mr-16">
              <CodeAnimation />
            </div>
          </div>
        </Container>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
