import { ComposedChart, ScatterChart, Scatter, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import React, { useEffect, useState } from 'react';

const ScatterLineComboChart = () => {

const data = [
          { x: 3, y: 9 },
          { x: 6, y: 3 },
          { x: 3, y: 5 },
          { x: 0, y: 4 },
          { x: 7, y: 3 },
          { x: 0, y: 6 },
          { x: 6, y: 4 },
          { x: 2, y: 3 },
          { x: 5, y: 1 },
          { x: 3, y: 0 },
          { x: 3, y: 9 },
          { x: 0, y: 4 },
          { x: 6, y: 5 },
          { x: 8, y: 6 },
          { x: 0, y: 2 },
          { x: 2, y: 5 },
          { x: 7, y: 9 },
          { x: 9, y: 1 },
          { x: 4, y: 9 },
        ];
    

const lines = [
          { x: 3, y: 9 },
          { x: 4, y: 9 },
          { x: 7, y: 9 },
          { x: 8, y: 6 },
          { x: 9, y: 1 },
        ];

// const data = [
//   { x: 4, y: 7 },
//   { x: 0, y: 7 },
//   { x: 8, y: 4 },
//   { x: 3, y: 1 },
//   { x: 6, y: 1 },
//   { x: 1, y: 9 },
//   { x: 3, y: 1 },
//   { x: 5, y: 3 },
//   { x: 2, y: 8 },
//   { x: 2, y: 7 },
//   { x: 8, y: 4 },
//   { x: 1, y: 9 },
//   { x: 4, y: 3 },
//   { x: 8, y: 1 },
//   { x: 2, y: 3 },
//   { x: 6, y: 8 },
//   { x: 8, y: 7 },
//   { x: 3, y: 9 },
//   { x: 4, y: 3 },
//   { x: 3, y: 8 },
// ];

// const lines = [
//   { x: 8, y: 4 },
//   { x: 1, y: 9 },
//   { x: 9, y: 4 },
//   { x: 6, y: 8 },
//   { x: 8, y: 7 },
//   { x: 3, y: 9 },
//   { x: 3, y: 8 },
// ];

// const data2 = [
//   { x: 8, y: 4 },
//   { x: 9, y: 4 },
//   { x: 8, y: 7 },
//   { x: 6, y: 8 },
//   { x: 3, y: 9 },
//   { x: 1, y: 9 },
//   { x: 3, y: 8 },
// ];

// const data = [
//   { x: 8, y: 8 },
//   { x: 9, y: 4 },
//   { x: 2, y: 0 },
//   { x: 8, y: 0 },
//   { x: 9, y: 8 },
//   { x: 8, y: 6 },
//   { x: 1, y: 8 },
//   { x: 5, y: 2 },
//   { x: 6, y: 3 },
//   { x: 9, y: 8 },
//   { x: 9, y: 5 },
//   { x: 1, y: 0 },
//   { x: 0, y: 5 },
//   { x: 7, y: 9 },
//   { x: 4, y: 2 },
//   { x: 6, y: 6 },
//   { x: 9, y: 8 },
//   { x: 2, y: 5 },
//   { x: 7, y: 2 },
//   { x: 7, y: 8 },
// ];


// const lines = [
//   { x: 8, y: 8 },
//   { x: 9, y: 4 },
//   { x: 9, y: 8 },
//   { x: 9, y: 5 },
//   { x: 7, y: 9 },
//   { x: 7, y: 8 },
// ];

// const data22 = [
//   { x: 8, y: 4 },
//   { x: 9, y: 4 },
//   { x: 9, y: 8 },
//   { x: 9, y: 5 },
//   { x: 7, y: 9 },
//   { x: 7, y: 8 },
// ];





// const data = [
//   { x: 4, y: 6 },
//   { x: 8, y: 3 },
//   { x: 3, y: 8 },
//   { x: 2, y: 5 },
//   { x: 9, y: 5 },
//   { x: 4, y: 0 },
//   { x: 2, y: 1 },
//   { x: 7, y: 2 },
//   { x: 2, y: 6 },
//   { x: 3, y: 4 },
//   { x: 5, y: 8 },
//   { x: 2, y: 5 },
//   { x: 5, y: 6 },
//   { x: 5, y: 2 },
//   { x: 4, y: 5 },
//   { x: 7, y: 2 },
//   { x: 4, y: 6 },
//   { x: 3, y: 9 },
//   { x: 1, y: 1 },
//   { x: 8, y: 3 },
// ];


// const lines = [
//   { x: 3, y: 8 },
//   { x: 9, y: 5 },
//   { x: 5, y: 8 },
//   { x: 5, y: 6 },
//   { x: 3, y: 9 },
// ];

lines.sort((a, b) => {
  if (a.x === b.x) {
    return a.y - b.y; // Сортувати за значенням "y", якщо "x" рівні
  } else {
    return b.x - a.x; // Сортувати за значенням "x" у зростаючому порядку
  }
});



//const data2 = convexHull(lines);
const data2 = lines;
      
        return (
          <div>
            <h2>Scatter Plot and Line Plot Combo</h2>
            <ResponsiveContainer width={400} height={400}>
              <ComposedChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                data={data}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" type="number" name="X" />
                <YAxis dataKey="y" type="number" name="Y" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Scatter" data={data} fill="blue" shape="circle" />
                <Line
                  name="Line"
                  type="linear" // Make the line straight
                  data={data2} // Use the filtered line data
                  dataKey="y"
                  stroke="green"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
  );
};

export default ScatterLineComboChart;