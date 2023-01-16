import React from 'react'
// import { NavLink } from 'react-router-dom';
import './sidebar.css'
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';


export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Typography variant='h5' className='sidebar_title'><AddchartRoundedIcon className='sidebar_icon' />Analytics</Typography>
      </div>
      <div className="sidebar__content">
        <List
          className='sidebar__list-1'
          component="SideBar"
          dense={true}
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'linear-gradient(#f2ddac, #957a3b)' }}
          subheader={<ListSubheader className='list_header-1' sx={{bgcolor: '#D9E4F5' }}><ListItemIcon fontSize='large'>
            <AccountCircleRoundedIcon />
          </ListItemIcon>USER DATA</ListSubheader>}
        >
          <ListItem>
            <ListItemText id="switch-list-label-user-dob" primary="User DOB" />
            <Switch
              edge="end"
              // onChange={alert('user Lname')}
              // checked={checked.indexOf('wifi') !== -1}
              // inputProps={{
              //   'aria-labelledby': 'switch-list-label-wifi',
              // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-user-joined" primary="User join date" />
            <Switch
              edge="end"
              // onChange={alert('user Lname')}
              // checked={checked.indexOf('wifi') !== -1}
              // inputProps={{
              //   'aria-labelledby': 'switch-list-label-wifi',
              // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-user-quali" primary="User qualification" />
            <Switch
              edge="end"
              // onChange={alert('user Lname')}
              // checked={checked.indexOf('wifi') !== -1}
              // inputProps={{
              //   'aria-labelledby': 'switch-list-label-wifi',
              // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-user-reports" primary="User reports submitted" />
            <Switch
              edge="end"
              // onChange={alert('user Lname')}
              // checked={checked.indexOf('wifi') !== -1}
              // inputProps={{
              //   'aria-labelledby': 'switch-list-label-wifi',
              // }}
            />
          </ListItem>
        </List>
        <List
          className='sidebar__list-2'
          component="SideBar"
          dense={true}
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'linear-gradient(#f2ddac, #957a3b)' }}
          subheader={<ListSubheader className='list_header-1' sx={{bgcolor: '#D9E4F5' }}><ListItemIcon fontSize='large'>
            <AssessmentRoundedIcon />
          </ListItemIcon>REPORT DATA</ListSubheader>}
        >
          <ListItem>
            <ListItemText id="switch-list-label-r-category" primary="Report category" />
            <Switch
              edge="end"
              // onChange={alert('user Fname')}
              // checked={checked.indexOf('wifi') !== -1}
              // inputProps={{
              //   'aria-labelledby': 'switch-list-label-wifi',
              // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-r-stauts" primary="Report status" />
            <Switch
              edge="end"
              // onChange={alert('user Lname')}
              // checked={checked.indexOf('wifi') !== -1}
              // inputProps={{
              //   'aria-labelledby': 'switch-list-label-wifi',
              // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-r-created-at" primary="Report created date" />
            <Switch
              edge="end"
              // onChange={alert('user Lname')}
              // checked={checked.indexOf('wifi') !== -1}
              // inputProps={{
              //   'aria-labelledby': 'switch-list-label-wifi',
              // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-r-radius" primary="Report radius" />
            <Switch
              edge="end"
              // onChange={alert('user Lname')}
              // checked={checked.indexOf('wifi') !== -1}
              // inputProps={{
              //   'aria-labelledby': 'switch-list-label-wifi',
              // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-r-coords" primary="Report location" />
            <Switch
              edge="end"
              // onChange={alert('user Lname')}
              // checked={checked.indexOf('wifi') !== -1}
              // inputProps={{
              //   'aria-labelledby': 'switch-list-label-wifi',
              // }}
            />
          </ListItem>
        </List>
      </div>
    </div>
  )
}