//DataCard3.jsx
import React from "react";
import "../../styles/dashboard.css";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "daily reports",
    reported: 30,
    varified: 50,
  },
  {
    name: "monthly reports",
    reported: 160,
    varified: 135,
  },
  {
    name: "yearly reports",
    reported: 567,
    varified: 400,
  },
  {
    name: "total",
    reported: 986,
    varified: 1154,
  },
];
const SingleCard2 = (props) => {
  const {
    weekTotalNumber,
    monthTotalNumber,
    weekTotalNumberVerified,
    monthTotalNumberVerified,
  } = props.item;

  return (
    <Card className="single__card" sx={{ minWidth: 275 }}>
      <CardContent>
        <BarChart width={400} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="reported" fill="#2884FF" />
          <Bar dataKey="varified" fill="#82ca9d" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default SingleCard2;
