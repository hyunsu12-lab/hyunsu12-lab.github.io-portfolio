import clsx from 'classnames';

import Badge from './Badge';

type SkillLevel = 'foundational' | 'intermediate' | 'advanced' | 'expert';

interface SkillPillProps {
  name: string;
  level: SkillLevel;
  label: string;
  tooltip?: string;
}

const LEVEL_STYLES: Record<SkillLevel, string> = {
  foundational: 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/20 dark:text-amber-200',
  intermediate: 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-500/40 dark:bg-sky-500/20 dark:text-sky-200',
  advanced: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/20 dark:text-emerald-200',
  expert: 'border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-500/40 dark:bg-purple-500/20 dark:text-purple-200',
};

const SkillPill = ({ name, level, label, tooltip }: SkillPillProps) => {
  return (
    <div className="glass-card flex items-center justify-between gap-4 px-4 py-3">
      <span className="text-base font-semibold text-slate-800 dark:text-slate-100">{name}</span>
      <Badge className={clsx('border', LEVEL_STYLES[level])} title={tooltip ?? label}>
        {label}
      </Badge>
    </div>
  );
};

export default SkillPill;


