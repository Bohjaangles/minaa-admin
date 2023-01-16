import React from "react";
import "../../styles/dashboard.css"
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

const SingleCard2 = (props) => {
  const { weekTotalNumber, monthTotalNumber, weekTotalNumberVerified, monthTotalNumberVerified } = props.item;
  return (
    <Card className="single__card" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleCard2;