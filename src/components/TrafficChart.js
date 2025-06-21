import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const TrafficChart = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 400, backgroundColor: '#f4f4f9', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Traffic Volume Over Time</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="Timestamp" tick={{ fontSize: 12, fill: '#555' }} />
          <YAxis tick={{ fontSize: 12, fill: '#555' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Traffic_Volume" stroke="#8884d8" strokeWidth={3} dot={{ fill: '#8884d8', r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficChart;

