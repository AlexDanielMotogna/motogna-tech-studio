'use client';

import { useLocale } from '@/lib/locale-context';
import Container from '../ui/Container';

export default function Process() {
  const { t } = useLocale();

  const steps = [
    {
      number: '01',
      title: t.process.step1.title,
      description: t.process.step1.description,
    },
    {
      number: '02',
      title: t.process.step2.title,
      description: t.process.step2.description,
    },
    {
      number: '03',
      title: t.process.step3.title,
      description: t.process.step3.description,
    },
    {
      number: '04',
      title: t.process.step4.title,
      description: t.process.step4.description,
    },
  ];

  const deliverables = [
    t.process.deliverables.item1,
    t.process.deliverables.item2,
    t.process.deliverables.item3,
    t.process.deliverables.item4,
  ];

  return (
    <section id="process" className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="max-w-2xl mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
            {t.process.title}
          </h2>
          <p className="text-lg text-neutral-600">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl lg:text-6xl font-bold text-neutral-100 mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8">
                  <svg className="w-6 h-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border border-neutral-200 bg-neutral-50 p-8">
          <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
            {t.process.deliverables.title}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
