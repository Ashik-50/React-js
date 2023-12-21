// LandingPage.js
import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to the Medical Appointment Management System
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Your trusted platform for easy and efficient medical appointments.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/appointments" style={{ marginRight: '10px' }}>
        View Appointments
      </Button>
      <Button variant="outlined" color="primary" component={Link} to="/doctors">
        Find Doctors
      </Button>
    </div>
  );
}

export default LandingPage;
