import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import API from '../api';
import { saveToken } from '../utils/auth';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const { data } = await API.post('/auth/login', formData);
      saveToken(data.token);
      alert('Logged in successfully!');
      window.location.replace("http://localhost:3000/submit-complaint");
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundImage: 'url(https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=600)', // replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // semi-transparent background
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          WELCOME TO ONLINE COMPLAINT PORTAL!!!
        </Typography>
        <Typography variant="h5" gutterBottom textAlign="center">
          PLEASE LOGIN!!!
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
