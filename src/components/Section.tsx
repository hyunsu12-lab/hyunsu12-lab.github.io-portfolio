import clsx from 'classnames';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  contentClassName?: string;
}

const Section = ({ id, title, description, children, contentClassName }: SectionProps) => {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 lg:px-0">
        <header>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{title}</h2>
          {description ? (
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{description}</p>
          ) : null}
        </header>
        <div className={clsx('grid gap-6', contentClassName)}>{children}</div>
      </div>
    </section>
  );
};

export default Section;

