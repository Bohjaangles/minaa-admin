import React from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
 } from 'recharts'

export default function SecondChart() {

  const chartData = [
    {name: "Unclear", value: 17, value2: 10},
    {name: "Obscured", value: 35, value2: 20},
    {name: "Multiple", value: 4, value2: 29},
    {name: "Large", value: 7, value2: 23},
    {name: "Small", value: 16, value2: 10},
  ]

  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        width={730}
        height={250}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 29,
        }}
      >
        <defs>
          <linearGradient id="value" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="value2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="value2"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

