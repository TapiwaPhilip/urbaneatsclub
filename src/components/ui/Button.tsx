
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = 'btn inline-flex items-center justify-center font-medium transition-all duration-200';

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'text-urban-600 hover:text-urban-700 hover:bg-urban-50 rounded-lg',
    gradient: 'bg-gradient-to-r from-urban-500 to-food-500 text-white hover:from-urban-600 hover:to-food-600 rounded-lg',
  };

  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        withArrow && 'group',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default Button;
