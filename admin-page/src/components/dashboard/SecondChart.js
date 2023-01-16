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

export default function SecondChart(data) {

  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 29,
        }}
      >
        <defs>
          <linearGradient id={data.value1} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id={data.value2} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={data.name} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={data.value1}
          stroke="#8884d8"
          fillOpacity={1}
          fill="#b0c5d3"
        />
        <Area
          type="monotone"
          dataKey={data.value2}
          stroke="#82ca9d"
          fillOpacity={1}
          fill="#C6D4B0"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

