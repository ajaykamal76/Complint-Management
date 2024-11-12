import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import API from '../api';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({ title: '', description: '', address: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/complaints', formData);
      alert('Complaint submitted successfully!');
      window.location.replace("http://localhost:3000/my-complaints");
    } catch (error) {
      alert(error.response?.data?.message || 'Submission failed');
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        ONLINE COMPLAINT PORTAL
      </Typography>
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        SUBMIT YOUR COMPLAINT
      </Typography>

      <Box
        sx={{
          maxWidth: 600,
          margin: 'auto',
          mt: 5,
          p: 3,
          backgroundImage: `url('https://www.bing.com/ck/a?!&&p=d04aaf610358f65f1f99cccf3d3e34c19738ac2e18e02ecc6f5af93cb7269dc0JmltdHM9MTczMTI4MzIwMA&ptn=3&ver=2&hsh=4&fclid=3e86ab82-ef2f-689f-2500-b8b1ee826933&u=a1L2ltYWdlcy9zZWFyY2g_cT1iZXN0JTIwd2ViJTIwYmFja2dyb3VuZCUyMGltYWdlcyZGT1JNPUlRRlJCQSZpZD01NTIxOEM5OTEzQkJBM0YwRjhDOERDOTQ2QTYwNEE2RkMzNDQ1RjUw&ntb=1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: 2,
          boxShadow: 3
        }}
      >
        <Typography variant="h4" gutterBottom>Submit Complaint</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Title" name="title" fullWidth margin="normal" onChange={handleChange} />
          <TextField label="Description" name="description" fullWidth multiline rows={4} margin="normal" onChange={handleChange} />
          <TextField label="Address" name="address" fullWidth margin="normal" onChange={handleChange} />
          <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
        </form>
      </Box>
    </Container>
  );
};

export default ComplaintForm;
