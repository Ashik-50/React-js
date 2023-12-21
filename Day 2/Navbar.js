// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2196f3', height: '80px' }}>
      <Toolbar>
        <Avatar style={{ marginRight: '10px' }}>
          <img src="https://www.drupal.org/files/project-images/medical.png" alt="Logo" style={{ width: '100%', height: '100%' }} />
        </Avatar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          Medical Appointment Management System
        </Typography>
        <Button color="inherit" component={Link} to="/Landing">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to='/'>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;