// Badge.tsx
import * as React from 'react';
import clsx from 'classnames';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  variant?: 'default' | 'outline';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          'inline-flex items-center rounded-full px-2 py-0.5 text-sm',
          variant === 'outline' ? 'border' : '',
          className
        )}
        {...props} // ← title, aria-*, onClick 등 네이티브 속성 허용
      />
    );
  }
);

Badge.displayName = 'Badge';
export default Badge;
