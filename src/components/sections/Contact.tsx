'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/locale-context';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Contact() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: '',
      });
    } catch {
      setError('Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              {t.contact.subtitle}
            </p>

            <div className="space-y-6 mb-8">
              <a
                href="mailto:alex@motogna.tech"
                className="flex items-center gap-4 p-4 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all group"
              >
                <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-neutral-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900">alex@motogna.tech</div>
                  <div className="text-xs text-neutral-500">Email</div>
                </div>
              </a>

              <a
                href="tel:+436601759059"
                className="flex items-center gap-4 p-4 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all group"
              >
                <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-neutral-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900">+43 660 175 9059</div>
                  <div className="text-xs text-neutral-500">Phone</div>
                </div>
              </a>
            </div>

            <div className="space-y-3 pt-6 border-t border-neutral-100">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-neutral-600">{t.contact.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="text-neutral-600">{t.contact.languages}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-neutral-600">Response within 24 hours</span>
              </div>
            </div>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center p-8 border border-neutral-200 bg-neutral-50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Message sent!</h3>
              <p className="text-neutral-600 mb-4">We will get back to you within 24 hours.</p>
              <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-2">
                  {t.contact.form.projectType}
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-colors bg-white"
                >
                  <option value="">--</option>
                  <option value="website">{t.contact.form.projectTypes.website}</option>
                  <option value="software">{t.contact.form.projectTypes.software}</option>
                  <option value="design">{t.contact.form.projectTypes.design}</option>
                  <option value="app">{t.contact.form.projectTypes.app}</option>
                  <option value="mobile">{t.contact.form.projectTypes.mobile}</option>
                  <option value="other">{t.contact.form.projectTypes.other}</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                  {t.contact.form.budget}
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-colors bg-white"
                >
                  <option value="">--</option>
                  <option value="small">{t.contact.form.budgets.small}</option>
                  <option value="medium">{t.contact.form.budgets.medium}</option>
                  <option value="large">{t.contact.form.budgets.large}</option>
                  <option value="enterprise">{t.contact.form.budgets.enterprise}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-colors resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : t.contact.form.submit}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
