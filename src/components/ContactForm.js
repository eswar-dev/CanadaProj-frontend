import React, { useState } from 'react';
import { TextField, Button, Grid, Container } from '@mui/material';
import Navbar from './Navbar';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
    senderEmail: '', // Add senderEmail field
    receiverEmail: '', // Add receiverEmail field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.ok) {
        console.log('Email sent successfully');
        // Reset form after successful submission
        setFormData({
          username: '',
          email: '',
          message: '',
          senderEmail: '', // Reset senderEmail field
          receiverEmail: '', // Reset receiverEmail field
        });
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <Grid>
      <Grid
        item
        style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}
      >
        <Navbar />
      </Grid>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label='Username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            margin='normal'
          />
          <TextField
            fullWidth
            label='Email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            margin='normal'
          />
          <TextField
            fullWidth
            label='Message'
            name='message'
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            margin='normal'
          />
          <TextField
            fullWidth
            label='Sender Email'
            name='senderEmail'
            type='email'
            value={formData.senderEmail}
            onChange={handleChange}
            margin='normal'
          />
          <TextField
            fullWidth
            label='Receiver Email'
            name='receiverEmail'
            type='email'
            value={formData.receiverEmail}
            onChange={handleChange}
            margin='normal'
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{ marginTop: '1rem' }}
          >
            Send
          </Button>
        </form>
      </Container>
    </Grid>
  );
};

export default ContactForm;
