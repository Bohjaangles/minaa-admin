import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import minaa from '../../assets/minaa.png';
import { TextField, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import "./top-nav.css";
import { Avatar } from '@mui/material';

export default function TopNav() {
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
        <TextField id="standard-basic" label="Search users/reports" variant="outlined" />
        
        </div>
        <div className="logo">
          <Typography variant='h4' >MINAA</Typography><Avatar sx={{ width: 55, height: 55, top: 4 }} alt="Minaa" src={minaa} />
        </div>
        <div className="top__nav-right">
          <div className="profile">
            <Link to="/login">
            <AccountCircleRoundedIcon/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
