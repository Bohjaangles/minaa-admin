import React from "react";
import "../../styles/dashboard.css"
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';

const SingleCard3 = (props) => {
  const { weekTotalNumber, monthTotalNumber, weekTotalNumberVerified, monthTotalNumberVerified } = props.item;

  // const index = () => {
  //   const data = [
  //     { name: "Weekly Reports", x: weekTotalNumber, fill: "#8884d8" },
  //     { name: "Monthly Reports", x: monthTotalNumber, fill: "#83a6ed" },
  //     { name: "Weekly Reports Verified", x: weekTotalNumberVerified, fill: "#8dd1e1" },
  //     { name: "Monthly Reports Verified", x: monthTotalNumberVerified, fill: "#82ca9d" },
  //   ];
  return (
    <Card className="single__card" sx={{ minWidth: 275 }}>
      <CardContent>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          New reports this past week: {weekTotalNumber}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          New reports this past month: {monthTotalNumber}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          reports verified this past week: {weekTotalNumberVerified}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          reports verified this past Month: {monthTotalNumberVerified}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleCard3;