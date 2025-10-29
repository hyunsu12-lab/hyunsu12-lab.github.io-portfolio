import { useEffect, useMemo, useState } from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

import AwardItem from './components/AwardItem';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import SkillPill from './components/SkillPill';
import { dict, type Locale } from './i18n/dict';

const SKILLS = [
  { name: 'Python', level: 'expert' as const },
  { name: 'Pytorch', level: 'advanced' as const },
  { name: 'React', level: 'advanced' as const },
  { name: 'Next.js', level: 'intermediate' as const },
  { name: 'R', level: 'foundational' as const },
];

const resolveInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'ko';
  const stored = window.localStorage.getItem('locale');
  return stored === 'en' || stored === 'ko' ? (stored as Locale) : 'ko';
};

const resolveInitialTheme = (): boolean => {
  if (typeof window === 'undefined') return false;
  const stored = window.localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') {
    return stored === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const getContactIcon = (href: string) => {
  if (href.startsWith('tel:')) {
    return <Phone className="h-5 w-5 text-slate-500 dark:text-slate-300" aria-hidden="true" />;
  }
  if (href.startsWith('mailto:')) {
    return <Mail className="h-5 w-5 text-slate-500 dark:text-slate-300" aria-hidden="true" />;
  }
  return <Instagram className="h-5 w-5 text-slate-500 dark:text-slate-300" aria-hidden="true" />;
};

const App = () => {
  const [locale, setLocale] = useState<Locale>(() => resolveInitialLocale());
  const [isDark, setIsDark] = useState<boolean>(() => resolveInitialTheme());

  const messages = dict[locale];

  const navItems = useMemo(
    () => [
      { id: 'about', label: messages.nav.about },
      { id: 'skills', label: messages.nav.skills },
      { id: 'projects', label: messages.nav.projects },
      { id: 'awards', label: messages.nav.awards },
      { id: 'contact', label: messages.nav.contact },
    ],
    [messages.nav.about, messages.nav.skills, messages.nav.projects, messages.nav.awards, messages.nav.contact],
  );

  useEffect(() => {
    window.localStorage.setItem('locale', locale);
  }, [locale]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 transition-colors dark:bg-slate-950">
      <Header
        navItems={navItems}
        currentLocale={locale}
        onToggleLocale={toggleLocale}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />
      <main className="pb-24">
        <section id="hero" className="no-print">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 pt-16 lg:px-0">
            <div className="glass-card flex flex-col gap-6 p-10">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                  {messages.hero.greeting}
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">{messages.hero.title}</h1>
                <p className="text-xl font-medium text-slate-600 dark:text-slate-300">{messages.hero.role}</p>
                <p className="text-base text-slate-600 dark:text-slate-300 sm:text-lg">{messages.hero.description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {messages.hero.ctaContact}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a href="mailto:astre0198@dimigo.hs.kr" className="hover:text-slate-700 dark:hover:text-slate-200">
                  astre0198@dimigo.hs.kr
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <a
                  href="https://instagram.com/nsunah.c"
                  className="hover:text-slate-700 dark:hover:text-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @nsunah.c
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-16 py-8 print-surface">
          <Section id="about" title={messages.about.title}>
            <div className="glass-card space-y-4 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {messages.about.school}
              </p>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">{messages.about.summary}</p>
            </div>
          </Section>

          <Section
            id="skills"
            title={messages.skills.title}
            description={messages.skills.description}
            contentClassName="grid gap-4 md:grid-cols-2"
          >
            {SKILLS.map((skill) => (
              <SkillPill
                key={skill.name}
                name={skill.name}
                level={skill.level}
                label={messages.skills.levels[skill.level]}
                tooltip={locale === 'ko' ? `숙련도: ${messages.skills.levels[skill.level]}` : `Level: ${messages.skills.levels[skill.level]}`}
              />
            ))}
          </Section>

          <Section
            id="projects"
            title={messages.projects.title}
            description={messages.projects.description}
            contentClassName="grid gap-6"
          >
            {messages.projects.items.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                contributions={project.contributions}
                tags={project.tags}
                links={project.links}
                contributionLabel={messages.projects.contributionLabel}
              />
            ))}
          </Section>

          <Section id="awards" title={messages.awards.title} description={messages.awards.description}>
            <ul className="relative space-y-6 border-l border-slate-200 pl-6 dark:border-slate-700">
              {messages.awards.items.map((award) => (
                <AwardItem key={`${award.year}-${award.title}`} {...award} />
              ))}
            </ul>
          </Section>

          <Section id="contact" title={messages.contact.title} description={messages.contact.description}>
            <div className="grid gap-4 sm:grid-cols-2">
              {messages.contact.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-card flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {getContactIcon(item.href)}
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.label}</p>
                    <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div>
              <a
                href="mailto:astre0198@dimigo.hs.kr"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {messages.contact.ctaMail}
              </a>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
};

export default App;

