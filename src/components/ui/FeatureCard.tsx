
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
}: FeatureCardProps) => {
  return (
    <div className={cn('feature-card', className)}>
      <div
        className={cn(
          'w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-urban-600 bg-urban-50',
          iconClassName
        )}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
