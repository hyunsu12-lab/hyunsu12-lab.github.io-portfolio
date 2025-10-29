interface AwardItemProps {
  year: string;
  title: string;
  description?: string;
}

const AwardItem = ({ year, title, description }: AwardItemProps) => {
  return (
    <li className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900" aria-hidden="true" />
      <div className="flex flex-col gap-1 rounded-xl border border-transparent bg-slate-100/60 px-4 py-3 shadow-sm dark:bg-slate-800/60">
        <span className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">{year}</span>
        <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</p>
        {description ? <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p> : null}
      </div>
    </li>
  );
};

export default AwardItem;

