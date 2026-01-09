'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/locale-context';
import Container from '../ui/Container';

type FilterType = 'all' | 'platforms' | 'software' | 'websites';

type ProjectKey = 'rhinos' | 'ecohousing' | 'tradefighters' | 'filipbonat' | 'teamtrainer' | 'restaurantedel' | 'azmoldovan' | 'l2pcontrol' | 'schrattererdbau';

interface ProjectMeta {
  id: number;
  key: ProjectKey;
  stack: string[];
  category: FilterType;
  url?: string;
  isLive: boolean;
}

const projectsMeta: ProjectMeta[] = [
  {
    id: 1,
    key: 'rhinos',
    stack: ['React', 'TypeScript', 'Vite', 'MUI', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    category: 'platforms',
    url: 'https://rhinos-training.at',
    isLive: true,
  },
  {
    id: 2,
    key: 'ecohousing',
    stack: ['React', 'TypeScript', 'Vite', 'MUI', 'Firebase', 'Thirdweb', 'Chart.js', 'Bootstrap'],
    category: 'platforms',
    url: 'https://www.ecohousing-uruguay.com',
    isLive: true,
  },
  {
    id: 3,
    key: 'tradefighters',
    stack: ['Next.js', 'React', 'TypeScript', 'NestJS', 'Prisma', 'Solana', 'Anchor', 'WebSockets'],
    category: 'platforms',
    url: 'https://tradefighters.xyz',
    isLive: true,
  },
  {
    id: 4,
    key: 'filipbonat',
    stack: ['React', 'TypeScript', 'Vite', 'Bootstrap', 'SCSS', 'AOS'],
    category: 'websites',
    url: 'https://filip-bonat-deploy.vercel.app',
    isLive: true,
  },
  {
    id: 5,
    key: 'teamtrainer',
    stack: ['React', 'TypeScript', 'Vite', 'MUI', 'Express', 'Prisma', 'PWA', 'Cloudinary'],
    category: 'software',
    isLive: false,
  },
  {
    id: 6,
    key: 'restaurantedel',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'websites',
    url: 'https://restaurant-edel.at',
    isLive: true,
  },
  {
    id: 7,
    key: 'azmoldovan',
    stack: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    category: 'websites',
    url: 'https://az-moldovan.at',
    isLive: true,
  },
  {
    id: 8,
    key: 'l2pcontrol',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'WebSocket', 'Python', 'TanStack Query', 'Tailwind CSS'],
    category: 'software',
    url: 'https://l2p-control-zehr.vercel.app',
    isLive: true,
  },
  {
    id: 9,
    key: 'schrattererdbau',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'],
    category: 'websites',
    url: 'https://www.schratter-erdbau.at',
    isLive: true,
  },
];

export default function Work() {
  const { t } = useLocale();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t.work.filters.all },
    { key: 'platforms', label: t.work.filters.platforms },
    { key: 'software', label: t.work.filters.software },
    { key: 'websites', label: t.work.filters.websites },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsMeta
    : projectsMeta.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-20 lg:py-32 bg-neutral-50">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
              {t.work.title}
            </h2>
            <p className="text-lg text-neutral-600">
              {t.work.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredProjects.map((project) => {
            const projectData = t.work.projects[project.key];
            return (
              <article
                key={project.id}
                className="bg-white border border-neutral-200 hover:border-neutral-300 transition-all duration-200"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-neutral-900">{projectData.title}</h3>
                        {project.isLive && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                            Live
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                        <span>{projectData.client}</span>
                        <span>·</span>
                        <span>{projectData.industry}</span>
                      </div>
                      <p className="text-neutral-600 leading-relaxed max-w-3xl">
                        {projectData.description}
                      </p>
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-colors shrink-0"
                      >
                        {t.work.visitSite}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="text-sm font-medium text-neutral-600 hover:text-neutral-900 flex items-center gap-1 transition-colors"
                  >
                    {expandedProject === project.id ? t.work.showLess : t.work.viewFeatures}
                    <svg
                      className={`w-4 h-4 transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {expandedProject === project.id && (
                    <div className="mt-6 pt-6 border-t border-neutral-100">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-4">{t.work.keyFeatures}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {projectData.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-neutral-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-neutral-50">
                        <p className="text-sm text-neutral-600">
                          <span className="font-medium text-neutral-900">{t.work.result}:</span> {projectData.outcome}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500">{t.work.ndaNote}</p>
        </div>
      </Container>
    </section>
  );
}
