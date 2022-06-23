import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import { useTheme } from 'next-themes';

import Spinner from '@/components/common/Spinner';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'contained' | 'outlined';
  loading?: boolean;
};

const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  loading = false,
  className,
  ...props
}) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <button
      {...props}
      className={cn(
        'rounded border shadow border-amber-300 px-4 py-2 outline-none transition-colors duration-200 ease-in-out disabled:cursor-not-allowed',
        {
          'bg-amber-300 hover:border-amber-400 hover:bg-amber-400':
            variant === 'contained',
          'text-secondary hover:bg-secondary hover:text-light':
            variant === 'outlined',
          'bg-dark hover:disabled:bg-dark hover:disabled:text-secondary':
            variant === 'outlined' && isDarkMode,
          'bg-light hover:disabled:bg-light hover:disabled:text-secondary':
            variant === 'outlined' && !isDarkMode,
        },
        className,
      )}
    >
      {loading ? (
        <>
          <Spinner className="mr-3" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
