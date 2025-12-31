'use client';

import { LocaleProvider, useLocale } from '@/lib/locale-context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';

function AboutContent() {
  const { t } = useLocale();

  const values = [
    {
      title: t.about.values.quality.title,
      description: t.about.values.quality.description,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t.about.values.transparency.title,
      description: t.about.values.transparency.description,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: t.about.values.partnership.title,
      description: t.about.values.partnership.description,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                {t.about.hero.title}
              </h1>
              <p className="text-xl text-neutral-600">
                {t.about.hero.subtitle}
              </p>
            </div>
          </Container>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-neutral-50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 tracking-tight mb-8">
                  {t.about.story.title}
                </h2>
                <div className="space-y-6 text-neutral-600 leading-relaxed">
                  <p>{t.about.story.p1}</p>
                  <p>{t.about.story.p2}</p>
                  {'p3' in t.about.story && <p className="font-medium text-neutral-900">{(t.about.story as { p3: string }).p3}</p>}
                </div>
              </div>
              <div className="bg-neutral-200 aspect-[4/3] flex items-center justify-center">
                <svg className="w-16 h-16 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24">
          <Container>
            <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 tracking-tight mb-12">
              {t.about.values.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center mb-4 text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Approach Section */}
        <section className="py-16 lg:py-24 bg-neutral-900 text-white">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-6">
                {t.about.approach.title}
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {t.about.approach.description}
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 tracking-tight mb-4">
                {t.about.cta.title}
              </h2>
              <p className="text-neutral-600 mb-8">
                {t.about.cta.subtitle}
              </p>
              <Link href="/#contact">
                <Button size="lg">
                  {t.about.cta.button}
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function AboutPage() {
  return (
    <LocaleProvider>
      <AboutContent />
    </LocaleProvider>
  );
}
