import React, { useEffect, useState } from 'react';
import TrafficChart from './TrafficChart';
import WeatherChart from './WeatherChart';
import EventChart from './EventChart';

const TrafficData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEntry = {
        Timestamp: new Date().toLocaleTimeString(),
        Traffic_Volume: Math.floor(Math.random() * 10) + 1, // Simulating live data
        Weather_Condition: ['clear', 'rain', 'fog'][Math.floor(Math.random() * 3)],
        Event: ['none', 'parade', 'accident'][Math.floor(Math.random() * 3)]
      };

      setData(prevData => [...prevData.slice(-9), newEntry]); // Keep last 10 points
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Traffic Management Dashboard</h1>
      <TrafficChart data={data} />
      <WeatherChart data={data} />
      <EventChart data={data} />
    </div>
  );
};

export default TrafficData;




