import React from 'react';
import { Container, Grid } from '@mui/material';
import Doctor1AppointmentCard from './DAC1'; // Import the Doctor1AppointmentCard component
import Doctor2AppointmentCard from './DAC2'; // Import the Doctor2AppointmentCard component

const DoctorAppointmentsContainer = () => {
  // Mock data for two appointments
  const appointment1 = {
    doctor: {
      name: 'Dr John Doe',
      specialization: 'Cardiology',
      photoUrl: 'https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg', // Replace with the actual photo URL
    },
    date: '2023-01-01',
    time: '10:00 AM',
    location: 'Appolo Hospital',
  };

  const appointment2 = {
    doctor: {
      name: 'Dr Jane Smith',
      specialization: 'Pediatrics',
      photoUrl: 'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg', // Replace with the actual photo URL
    },
    date: '2023-02-01',
    time: '02:00 PM',
    location: 'West Ham Pediatrics',
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {/* Display Doctor1AppointmentCard */}
        <Grid item xs={12} sm={6}>
          <Doctor1AppointmentCard appointment={appointment1} />
        </Grid>

        {/* Display Doctor2AppointmentCard */}
        <Grid item xs={12} sm={6}>
          <Doctor2AppointmentCard appointment={appointment2} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DoctorAppointmentsContainer;
