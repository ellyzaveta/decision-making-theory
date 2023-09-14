import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const ScatterPlot = () => {
  const data = [
    { x: 1, y: 2, label: 'Point 1' },
    { x: 2, y: 3, label: 'Point 2' },
    { x: 3, y: 5, label: 'Point 3' },
    // Add more data points here with labels
  ];

  return (
    <ScatterChart width={400} height={300}>
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="X-axis" />
      <YAxis type="number" dataKey="y" name="Y-axis" />
      <Tooltip />
      <Legend />
      <Scatter name="Data" data={data} fill="#8884d8" />
      {data.map((point, index) => (
        <Label
          key={index}
          x={point.x}
          y={point.y}
          value={point.label}
          position="top"
          fontSize={12}
          fill="#8884d8"
        />
      ))}
    </ScatterChart>
  );
}

export default ScatterPlot;