import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import API from '../api';

const ComplaintList = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const { data } = await API.get('/complaints');
        setComplaints(data);
      } catch (error) {
        alert(error.response?.data?.message || 'Failed to fetch complaints');
      }
    };
    fetchComplaints();
  }, []);

  return (
    <Container
      sx={{
        backgroundImage: `url('https://www.pexels.com/photo/white-and-black-strap-on-green-painted-wall-2096622/')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 600,
        margin: 'auto',
        mt: 5,
      }}
    >
      <Typography variant="h4" gutterBottom>My Complaints</Typography>
      <List>
        {complaints.map((complaint) => (
          <React.Fragment key={complaint._id}>
            <ListItem>
              <ListItemText
                primary={complaint.title}
                secondary={`Status: ${complaint.status} - ${complaint.description}`}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default ComplaintList;
