import { Languages, Moon, Sun } from 'lucide-react';

import profileImage from '../../img/1126조현수.jpg';
import type { Locale } from '../i18n/dict';

interface NavItem {
  id: string;
  label: string;
}

interface HeaderProps {
  navItems: NavItem[];
  currentLocale: Locale;
  onToggleLocale: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

const Header = ({ navItems, currentLocale, onToggleLocale, isDark, onToggleTheme }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition dark:border-slate-800/60 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-6 py-4 lg:px-0">
        <a href="#hero" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          <img
            src={profileImage}
            alt="Hyunsoo Cho profile"
            className="h-10 w-10 rounded-full object-cover shadow ring-2 ring-slate-900/10 dark:ring-white/10"
          />
          <span className="hidden text-base font-medium text-slate-600 dark:text-slate-300 sm:block">Hyunsoo Cho</span>
        </a>
        <nav className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3 py-1 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleLocale}
              className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
              aria-label="Toggle language"
            >
              <Languages className="h-4 w-4" aria-hidden="true" />
              <span className="uppercase">{currentLocale}</span>
            </button>
            <button
              type="button"
              onClick={onToggleTheme}
              className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>
      <div className="border-t border-slate-200/60 px-6 py-2 md:hidden dark:border-slate-800/60">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-2 overflow-x-auto">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

