import React from 'react';
import ChartCard from '@/components/ChartCard';
import { departmentRatings, bookmarkTrends } from '@/data/mockAnalyticsData';

export const dynamic = 'force-static'; // ✅ Enable static generation

export default function AnalyticsPage() {
  const departmentBarData = {
    labels: departmentRatings.map((d) => d.department),
    datasets: [
      {
        label: 'Average Rating',
        data: departmentRatings.map((d) => d.averageRating),
        backgroundColor: 'rgba(99, 102, 241, 0.7)',
      },
    ],
  };

  const bookmarkLineData = {
    labels: bookmarkTrends.labels,
    datasets: [
      {
        label: 'Bookmarks',
        data: bookmarkTrends.data,
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return (
    <div className="p-8 min-h-screen bg-[#111827] text-white">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard 📊</h1>

      <ChartCard title="Department-wise Average Ratings" type="bar" data={departmentBarData} />
      <ChartCard title="Bookmark Trends (Monthly)" type="line" data={bookmarkLineData} />
    </div>
  );
}
