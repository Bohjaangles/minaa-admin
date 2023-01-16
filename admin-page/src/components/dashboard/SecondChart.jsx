import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

export default function SecondChart({data}) {
  const keys = Object.keys(data);

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
          <linearGradient id="colorvalue1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#60935D" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#14342B" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorvalue2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#004E89" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0A2342" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorvalue3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FF1B1C" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value1"
          stroke="#8884d8"
          fillOpacity={0.3}
          fill="#14342B"
        />
        <Area
          type="monotone"
          dataKey="value2"
          stroke="#82ca9d"
          fillOpacity={0.3}
          fill="#0A2342"
        />
        <Area
          type="monotone"
          dataKey="value3"
          stroke="#96a8b1"
          fillOpacity={0.3}
          fill="#FF1B1C"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

