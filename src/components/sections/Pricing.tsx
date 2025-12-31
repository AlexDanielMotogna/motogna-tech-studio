'use client';

import { useLocale } from '@/lib/locale-context';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Pricing() {
  const { t } = useLocale();

  const tiers = [
    {
      title: t.pricing.website.title,
      duration: t.pricing.website.duration,
      description: t.pricing.website.description,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: t.pricing.design.title,
      duration: t.pricing.design.duration,
      description: t.pricing.design.description,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: t.pricing.software.title,
      duration: t.pricing.software.duration,
      description: t.pricing.software.description,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-neutral-50">
      <Container>
        <div className="max-w-2xl mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-neutral-600">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 p-8 hover:border-neutral-300 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center mb-6 text-neutral-700">
                {tier.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{tier.title}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-sm text-neutral-500">{t.pricing.startingFrom}</span>
                <span className="text-sm font-medium text-neutral-700">{tier.duration}</span>
              </div>
              <p className="text-sm text-neutral-600">{tier.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-600 max-w-xl">
            {t.pricing.note}
          </p>
          <Button onClick={() => {
            const element = document.querySelector('#contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            {t.pricing.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
