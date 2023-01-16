import React from "react";
import "../../styles/dashboard.css"
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

const SingleCard = (props) => {
  const { weekTotalNumber, monthTotalNumber, weekTotalNumberVerified, monthTotalNumberVerified } = props.item;
  return (
    <Card className="single__card" sx={{ minWidth: 275 }  }>
      <CardContent>
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom >
          New reports this past week: <span className="numberStyle1">{weekTotalNumber}</span>
        </Typography>
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
          New reports this past month: <span className="numberStyle">{monthTotalNumber}</span>
        </Typography>
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
          Reports verified this past week:
          <span className="numberStyle3">{weekTotalNumberVerified}</span>
        </Typography>
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
          Reports verified this past Month: 
          <span className="numberStyle4">{monthTotalNumberVerified}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleCard;