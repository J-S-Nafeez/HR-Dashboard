'use client';

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement, LineElement);

type ChartCardProps = {
  title: string;
  type: 'bar' | 'line';
  data: any;
  options?: any;
};

const ChartCard: React.FC<ChartCardProps> = ({ title, type, data, options }) => {
  return (
    <div className="bg-[#1f2937] text-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {type === 'bar' ? <Bar data={data} options={options} /> : <Line data={data} options={options} />}
    </div>
  );
};

export default ChartCard;



















