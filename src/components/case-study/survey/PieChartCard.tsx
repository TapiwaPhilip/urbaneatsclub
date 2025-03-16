
import React from 'react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip 
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

interface PieChartCardProps {
  title: string;
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  height?: number;
  findingTitle?: string;
  findingText?: string;
}

const PieChartCard = ({
  title,
  data,
  height = 300,
  findingTitle,
  findingText
}: PieChartCardProps) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <h4 className="text-xl font-semibold mb-4 text-slate-800">{title}</h4>
        <div style={{ height: `${height}px` }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={height / 3}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {(findingTitle || findingText) && (
          <div className="mt-6">
            {findingTitle && <h5 className="font-medium text-slate-700 mb-2">{findingTitle}</h5>}
            {findingText && <p className="text-slate-600">{findingText}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PieChartCard;
