import React from "react";
import { 
  ResponsiveContainer,
  BarChart,
  Bar, 
  XAxis, 
  Tooltip, 
  YAxis, 
  CartesianGrid,
  Legend,
} from "recharts";
// import { useQuery, gql } from "@apollo/client";

export default function ReportChart({data}) {
  
  return (
    <ResponsiveContainer width="100%" >
      <BarChart
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='name' stroke="#2884ff" />
        <YAxis stroke="#2884ff"/>
        <Legend />
        <Bar dataKey="value" stroke="#2884ff" fill="#2884ff" barSize={30} />
        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};