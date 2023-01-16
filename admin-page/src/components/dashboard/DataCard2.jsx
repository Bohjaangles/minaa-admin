import React from "react";
import "../../styles/dashboard.css"
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { RadialBarChart, RadialBar, Legend } from "recharts";

const SingleCard2 = (props) => {
  const { weekTotalNumber, monthTotalNumber, weekTotalNumberVerified, monthTotalNumberVerified } = props.item;
  const data = [
    {
      name: "daily",
      uv: 30,
      fill: "#8884d8"
    },
    {
      name: "Monthly",
      uv: 160,
      fill: "#83a6ed"
    },
    {
      name: "yearly",
      uv: 567,
      fill: "#8dd1e1"
    },
    {
      name: "varified total",
      uv: 1154,
      fill: "#82ca9d"
    },
  ];
  const style = {
    top: 0,
    left: 350,
    lineHeight: "24px"
  };
  return (
    <Card className="single__card" sx={{ minWidth: 275 }}>
      <CardContent>
      <RadialBarChart
      width={400}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={20}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="horizontal"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          New users this past week: {weekTotalNumber}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          New users this past month: {monthTotalNumber}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          users promoted from BASE account: {weekTotalNumberVerified}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Soomething else about users: {monthTotalNumberVerified}
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default SingleCard2;