'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import Container from '../ui/Container';

export default function Solutions() {
  const { t } = useLocale();

  return (
    <section id="solutions" className="py-20 lg:py-32 bg-neutral-900 text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 text-neutral-300 text-sm mb-8">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            {t.solutions.badge}
          </div>

          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6">
            {t.solutions.title}
          </h2>

          <p className="text-lg lg:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            {t.solutions.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-neutral-800/50 border border-neutral-700">
              <div className="w-12 h-12 bg-neutral-800 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">{t.solutions.features.select.title}</h3>
              <p className="text-sm text-neutral-400">{t.solutions.features.select.desc}</p>
            </div>

            <div className="p-6 bg-neutral-800/50 border border-neutral-700">
              <div className="w-12 h-12 bg-neutral-800 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">{t.solutions.features.price.title}</h3>
              <p className="text-sm text-neutral-400">{t.solutions.features.price.desc}</p>
            </div>

            <div className="p-6 bg-neutral-800/50 border border-neutral-700">
              <div className="w-12 h-12 bg-neutral-800 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">{t.solutions.features.send.title}</h3>
              <p className="text-sm text-neutral-400">{t.solutions.features.send.desc}</p>
            </div>
          </div>

          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors"
          >
            {t.solutions.cta}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <p className="text-sm text-neutral-500 mt-4">{t.solutions.time}</p>
        </div>
      </Container>
    </section>
  );
}
