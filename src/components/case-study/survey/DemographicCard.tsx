
import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

type DisplayVariant = 'pie-chart' | 'bar-chart' | 'list' | 'custom';

interface DemographicCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  borderColor: string;
  variant?: DisplayVariant;
  data?: Array<{
    name: string;
    value: number;
    color?: string;
  }>;
  height?: number;
  children?: ReactNode;
}

const DemographicCard = ({
  title,
  subtitle,
  icon: Icon,
  iconColor,
  iconBgColor,
  borderColor,
  variant = 'custom',
  data = [],
  height = 150,
  children
}: DemographicCardProps) => {
  const renderContent = () => {
    switch (variant) {
      case 'pie-chart':
        return (
          <div style={{ height: `${height}px` }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color || `hsl(${index * 45}, 70%, 60%)`} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        );
      
      case 'bar-chart':
        return (
          <div style={{ height: `${height}px` }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" fontSize={10} />
                <YAxis fontSize={10} />
                <Tooltip />
                <Bar 
                  dataKey="value" 
                  radius={[4, 4, 0, 0]}
                  fill="#1a9bf0"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color || `hsl(${index * 45}, 70%, 60%)`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      
      case 'list':
        return (
          <ul className="space-y-2 mt-4">
            {data.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-slate-700">{item.name}</span>
                <span 
                  className="font-medium" 
                  style={{ color: item.color }}
                >
                  {typeof item.value === 'number' && item.value > 1 
                    ? `${item.value}%` 
                    : item.value}
                </span>
              </li>
            ))}
          </ul>
        );
      
      case 'custom':
      default:
        return children;
    }
  };

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
        {renderContent()}
      </CardContent>
    </Card>
  );
};

export default DemographicCard;
