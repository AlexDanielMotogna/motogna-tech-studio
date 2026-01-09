'use client';

import { useLocale } from '@/lib/locale-context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';

function TeamContent() {
  const { t } = useLocale();

  const members = [
    {
      ...t.team.members.alex,
      initials: 'AM',
      color: 'bg-neutral-900',
    },
    {
      ...t.team.members.paul,
      initials: 'PE',
      color: 'bg-neutral-700',
    },
    {
      ...t.team.members.madalina,
      initials: 'MM',
      color: 'bg-neutral-500',
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
                {t.team.hero.title}
              </h1>
              <p className="text-xl text-neutral-600">
                {t.team.hero.subtitle}
              </p>
            </div>
          </Container>
        </section>

        {/* Team Members Section */}
        <section className="py-16 lg:py-24 bg-neutral-50">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <div key={index} className="bg-white border border-neutral-200 overflow-hidden group hover:border-neutral-300 hover:shadow-sm transition-all">
                  {/* Avatar placeholder */}
                  <div className={`${member.color} aspect-square flex items-center justify-center`}>
                    <span className="text-4xl lg:text-5xl font-semibold text-white">
                      {member.initials}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-4">
                      {member.role}
                    </p>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function TeamPage() {
  return <TeamContent />;
}
