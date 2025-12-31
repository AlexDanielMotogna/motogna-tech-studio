'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import Container from './ui/Container';
import Logo from './ui/Logo';

export default function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo className="h-10 w-auto" variant="light" />
            </div>
            <p className="text-neutral-400 text-sm max-w-md mb-6">
              {t.footer.tagline}
            </p>
            <p className="text-neutral-500 text-sm">
              {t.footer.copyright.replace('{year}', String(currentYear))}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 text-neutral-300">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {t.nav.solutions}
                </a>
              </li>
              <li>
                <a href="#work" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {t.nav.work}
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 text-neutral-300">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/impressum" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {t.footer.impressum}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {t.footer.datenschutz}
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-neutral-500">{t.contact.location}</p>
              <p className="text-sm text-neutral-500">{t.contact.languages}</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
