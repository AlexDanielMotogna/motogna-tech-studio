'use client';

import { useLocale } from '@/lib/locale-context';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Pricing() {
  const { t } = useLocale();

  const packages = [
    {
      key: 'basic' as const,
      data: t.pricing.packages.basic,
      highlighted: false,
    },
    {
      key: 'standard' as const,
      data: t.pricing.packages.standard,
      highlighted: true,
    },
    {
      key: 'premium' as const,
      data: t.pricing.packages.premium,
      highlighted: false,
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.key}
              className={`relative flex flex-col p-8 transition-all duration-200 ${
                pkg.highlighted
                  ? 'bg-neutral-900 text-white border border-neutral-900 shadow-lg md:-translate-y-2'
                  : 'bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-sm text-neutral-900'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-8 px-3 py-1 bg-white text-neutral-900 text-xs font-semibold tracking-wide uppercase">
                  {t.pricing.popular}
                </div>
              )}

              <h3 className={`text-lg font-semibold mb-4 ${pkg.highlighted ? 'text-white' : 'text-neutral-900'}`}>
                {pkg.data.title}
              </h3>

              <div className="flex items-baseline gap-2 mb-2">
                <span className={`text-sm ${pkg.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {t.pricing.startingFrom}
                </span>
                <span className={`text-3xl font-semibold ${pkg.highlighted ? 'text-white' : 'text-neutral-900'}`}>
                  {pkg.data.price}
                </span>
              </div>

              <div className={`text-sm mb-5 ${pkg.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {pkg.data.duration}
              </div>

              <p className={`text-sm mb-6 ${pkg.highlighted ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {pkg.data.description}
              </p>

              <ul className="space-y-3 mb-6 flex-1">
                {pkg.data.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-white' : 'text-neutral-900'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={pkg.highlighted ? 'text-neutral-200' : 'text-neutral-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`mb-4 pt-4 border-t ${
                  pkg.highlighted ? 'border-neutral-700' : 'border-neutral-200'
                }`}
              >
                <div className="flex items-baseline gap-1">
                  <span className={`text-xs font-semibold ${pkg.highlighted ? 'text-white' : 'text-neutral-900'}`}>
                    + {pkg.data.monthlyPrice}
                  </span>
                  <span className={`text-[11px] ${pkg.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {t.pricing.monthlyPer}
                  </span>
                </div>
                <div className={`text-[11px] ${pkg.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {t.pricing.monthlyRequired}
                </div>
              </div>

              <Button
                variant={pkg.highlighted ? 'primary' : 'outline'}
                className="w-full"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t.pricing.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-neutral-200 space-y-3">
          <p className="text-sm text-neutral-600 text-center max-w-2xl mx-auto">
            {t.pricing.monthlyNote}
          </p>
          <p className="text-sm text-neutral-500 text-center max-w-2xl mx-auto">
            {t.pricing.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
