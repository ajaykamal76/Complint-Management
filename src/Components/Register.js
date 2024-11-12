import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import API from '../api';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', formData);
      alert('Registered successfully! Please login.');
      window.location.replace("http://localhost:3000/login");
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };
  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        WELCOME TO GENERAL ONLINE COMPLAINT PORTAL!!!
      </Typography>
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        PLEASE REGISTER!!!
      </Typography>

      <Box sx={{ maxWidth: 400, margin: 'auto', mt: 5 }}>
        <Typography variant="h4" gutterBottom>Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleChange} />
          <TextField label="Email" name="email" type="email" fullWidth margin="normal" onChange={handleChange} />
          <TextField label="Password" name="password" type="password" fullWidth margin="normal" onChange={handleChange} />
          <Button variant="contained" color="primary" type="submit" fullWidth>Register</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
