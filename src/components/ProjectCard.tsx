import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';

import Badge from './Badge';

interface ProjectLink {
  label: string;
  href?: string;
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  contributions: string[];
  tags: string[];
  links: ProjectLink[];
  contributionLabel: string;
  footer?: ReactNode;
}

const ProjectCard = ({ title, subtitle, description, contributions, tags, links, contributionLabel, footer }: ProjectCardProps) => {
  return (
    <article className="glass-card flex flex-col gap-6 p-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200">
            {tag}
          </Badge>
        ))}
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{subtitle}</p>
      </div>
      <p className="text-base text-slate-600 dark:text-slate-300">{description}</p>
      <div>
        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">{contributionLabel}</h4>
        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {contributions.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <ArrowUpRight className="mt-0.5 h-4 w-4 text-slate-400" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-3">
        {links.map(({ label, href }) => {
          const disabled = !href;
          return href ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {label}
            </a>
          ) : (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-dashed border-slate-300 px-4 py-2 text-sm font-medium text-slate-400 dark:border-slate-700 dark:text-slate-500"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {label}
            </span>
          );
        })}
      </div>
      {footer}
    </article>
  );
};

export default ProjectCard;

