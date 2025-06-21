import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WeatherChart = ({ data }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Weather Condition Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="Weather_Condition" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Traffic_Volume" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
