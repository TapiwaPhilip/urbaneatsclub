
import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface DemographicCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  borderColor: string;
  children: ReactNode;
}

const DemographicCard = ({
  title,
  subtitle,
  icon: Icon,
  iconColor,
  iconBgColor,
  borderColor,
  children
}: DemographicCardProps) => {
  return (
    <Card className={`border-t-4 ${borderColor}`}>
      <CardContent className="pt-6">
        <div className="flex items-start mb-4">
          <div className={`${iconBgColor} ${iconColor} p-3 rounded-lg mr-3`}>
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h5 className="font-semibold text-lg">{title}</h5>
            <p className="text-slate-600 text-sm mt-1">{subtitle}</p>
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  );
};

export default DemographicCard;
