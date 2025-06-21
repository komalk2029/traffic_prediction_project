import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const EventChart = ({ data }) => {
  const processedData = data.reduce((acc, item) => {
    const existing = acc.find(event => event.name === item.Event);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: item.Event, value: 1 });
    }
    return acc;
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Event Frequency</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={processedData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {processedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EventChart;
