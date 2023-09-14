import { ComposedChart, Scatter, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';
import "./BoundChart.css"

const BoundChart = ({points, optimalPoints}) => {

optimalPoints.sort((a, b) => {
    if (a.q1 === b.q1) {
        return a.q2 - b.q2; 
    } else {
        return b.q1 - a.q1; 
    }
});

return (
    <div className='plot'>
        <ResponsiveContainer width={300} height={300}>
        <ComposedChart data={points}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
                dataKey="q1" 
                type="number" 
                name="Q1" 
                stroke='rgba(125, 125, 125, 1)' 
            />
            <YAxis 
                dataKey="q2" 
                type="number" 
                name="Q2" 
                stroke='rgba(125, 125, 125, 1)'
            />
            <Tooltip 
                cursor={{ strokeDasharray: '3 3' }} 
            />
            <Scatter 
                data={points} 
                fill="rgba(174, 36, 24, 1)" 
                shape="circle" 
            />
            <Line
                type="linear" 
                data={optimalPoints} 
                dataKey="q2"
                stroke="rgba(174, 36, 24, 1)"
            />
        </ComposedChart>
        </ResponsiveContainer>
        </div>
    );
};

export default BoundChart;