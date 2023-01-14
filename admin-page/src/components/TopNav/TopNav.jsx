import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { TextField } from '@mui/material';
import { Link } from "react-router-dom";
import "./top-nav.css";

export default function TopNav() {
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
        <TextField id="standard-basic" label="Search users/reports" variant="standard" />
          <span>
            <SearchRoundedIcon/>
          </span>
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
