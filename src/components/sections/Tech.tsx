'use client';

import { useLocale } from '@/lib/locale-context';
import Container from '../ui/Container';

export default function Tech() {
  const { t } = useLocale();

  const technologies = [
    // Frontend
    { name: 'Next.js', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'SCSS/CSS', category: 'Styling' },
    // Languages
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'Kotlin', category: 'Language' },
    { name: 'Python', category: 'Language' },
    { name: 'PHP', category: 'Language' },
    // Backend
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'Prisma', category: 'ORM' },
    // CMS
    { name: 'WordPress', category: 'CMS' },
    { name: 'Sanity', category: 'CMS' },
    { name: 'Strapi', category: 'CMS' },
    // Database
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Firebase', category: 'Database' },
    // Web3
    { name: 'Solana', category: 'Web3' },
    { name: 'Web3.js', category: 'Web3' },
    { name: 'Smart Contracts', category: 'Web3' },
    // Mobile
    { name: 'Flutter', category: 'Mobile' },
    { name: 'Android', category: 'Mobile' },
    { name: 'iOS (Swift)', category: 'Mobile' },
    { name: 'Expo', category: 'Mobile' },
    // DevOps & Cloud
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'Vercel', category: 'Hosting' },
    { name: 'Netlify', category: 'Hosting' },
    // Design
    { name: 'Figma', category: 'Design' },
    { name: 'Adobe XD', category: 'Design' },
    { name: 'Photoshop', category: 'Design' },
    { name: 'Illustrator', category: 'Design' },
    // Analytics & Tools
    { name: 'GA4', category: 'Analytics' },
    { name: 'PostHog', category: 'Analytics' },
    { name: 'Sentry', category: 'Monitoring' },
  ];

  const practices = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Security First',
      description: 'OWASP guidelines, input validation, encrypted data at rest and in transit, regular dependency audits.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance',
      description: 'Core Web Vitals optimization, lazy loading, image optimization, CDN delivery, caching strategies.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Testing & QA',
      description: 'Unit tests, integration tests, E2E testing with Playwright, automated CI/CD pipelines.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Code Quality',
      description: 'Clean architecture, mandatory code reviews, linting, type safety, comprehensive documentation.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Scalability',
      description: 'Horizontal scaling, microservices-ready architecture, database optimization, load balancing.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Monitoring',
      description: 'Real-time error tracking, performance monitoring, uptime alerts, analytics dashboards.',
    },
  ];

  const metrics = [
    { value: '8', label: t.tech.metrics.yearsExperience },
    { value: '25+', label: t.tech.metrics.projects },
    { value: '100%', label: t.tech.metrics.satisfiedClients },
    { value: '30+', label: t.tech.metrics.technologies },
  ];

  return (
    <section id="tech" className="py-20 lg:py-32 bg-neutral-900 text-white">
      <Container>
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
            {t.tech.title}
          </h2>
          <p className="text-lg text-neutral-400">
            {t.tech.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 border border-neutral-800 bg-neutral-800/30">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-sm text-neutral-400">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative px-4 py-2.5 bg-neutral-800/50 border border-neutral-700 hover:border-neutral-500 transition-colors"
              >
                <span className="text-sm font-medium text-neutral-200">{tech.name}</span>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-700 text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-8">
            {t.tech.engineering.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practices.map((practice, index) => (
              <div key={index} className="p-6 border border-neutral-800 bg-neutral-800/20 hover:bg-neutral-800/40 transition-colors">
                <div className="w-12 h-12 bg-neutral-800 flex items-center justify-center mb-4 text-neutral-400">
                  {practice.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{practice.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                Compliance
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-neutral-400">GDPR Ready</li>
                <li className="text-sm text-neutral-400">WCAG 2.1 AA</li>
                <li className="text-sm text-neutral-400">ISO 27001 Practices</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                Integrations
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-neutral-400">Payment: Stripe, PayPal</li>
                <li className="text-sm text-neutral-400">Auth: OAuth, SAML, SSO</li>
                <li className="text-sm text-neutral-400">APIs: REST, GraphQL</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                Tools & Workflow
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-neutral-400">Git, GitHub Actions</li>
                <li className="text-sm text-neutral-400">Figma, Storybook</li>
                <li className="text-sm text-neutral-400">Jira, Linear, Notion</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
