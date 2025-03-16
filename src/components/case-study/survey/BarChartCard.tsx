
import React from 'react';
import { 
  ResponsiveContainer, 
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

interface BarChartCardProps {
  title: string;
  data: Array<{
    name: string;
    value: number;
  }>;
  height?: number;
  findingTitle?: string;
  findingText?: string;
}

const BarChartCard = ({
  title,
  data,
  height = 300,
  findingTitle,
  findingText
}: BarChartCardProps) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <h4 className="text-xl font-semibold mb-4 text-slate-800">{title}</h4>
        <div style={{ height: `${height}px` }}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#1a9bf0" radius={[4, 4, 0, 0]} />
            </RechartsBarChart>
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

export default BarChartCard;
