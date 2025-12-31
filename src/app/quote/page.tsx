'use client';

import { LocaleProvider } from '@/lib/locale-context';
import QuoteWizard from '@/components/quote/QuoteWizard';

export default function QuotePage() {
  return (
    <LocaleProvider>
      <main className="min-h-screen bg-neutral-50">
        <QuoteWizard />
      </main>
    </LocaleProvider>
  );
}
