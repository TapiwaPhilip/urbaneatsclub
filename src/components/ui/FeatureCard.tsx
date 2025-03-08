
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  colorScheme?: 'urban' | 'food' | 'mixed' | 'default';
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
  colorScheme = 'default',
}: FeatureCardProps) => {
  const getCardClassName = () => {
    switch (colorScheme) {
      case 'urban':
        return 'card-gradient-urban';
      case 'food':
        return 'card-gradient-food';
      case 'mixed':
        return colorVariants[Math.floor(Math.random() * colorVariants.length)];
      default:
        return 'bg-white';
    }
  };

  const getIconClassName = () => {
    switch (colorScheme) {
      case 'urban':
        return 'text-urban-600 bg-urban-50';
      case 'food':
        return 'text-food-600 bg-food-50';
      default:
        return 'text-urban-600 bg-urban-50';
    }
  };

  const colorVariants = [
    'card-gradient-urban',
    'card-gradient-food',
    'bg-gradient-blue-purple',
    'bg-gradient-green-blue',
  ];

  return (
    <div className={cn('feature-card', getCardClassName(), className)}>
      <div
        className={cn(
          'w-12 h-12 flex items-center justify-center rounded-lg mb-4',
          getIconClassName(),
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
