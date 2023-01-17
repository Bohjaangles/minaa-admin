
import React from 'react'
import {
    Card,
    CardContent, 
    Avatar, 
    CardHeader, 
    TextField,
    Button
  } from '@mui/material';
import { Link } from "react-router-dom";
import minaa from '../assets/minaa.png';
import '../styles/login.css';

const Login = () => {
  return (
    <div className="login-wrapper">
      <Card className="login-card">
        <CardContent>
          <Avatar sx={{ width: 55, height: 55, top: 4, left: 300 }} alt="Minaa" src={minaa} />
          <CardHeader title="Minaa Admin Page Login" sx={{ ml: 23 }}/>
          <TextField id="standard-basic" label="Username" variant="outlined" sx={{ width: 300, ml: 23, mt: 5 }}/>
          <TextField id="standard-basic" type='password' label="Password" variant="outlined" sx={{ width: 300, ml: 23, mt: 5 }}/>
          <Link to="/dashboard">
            <Button variant="contained" sx={{ ml: 36, mt: 5 }}>Submit</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
