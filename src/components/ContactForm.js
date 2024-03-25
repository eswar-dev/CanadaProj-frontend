import React, { useState } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import Navbar from './Navbar';
function ContactForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await sendEmail(formData);
      alert('Email sent successfully');
      setFormData({ username: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    } finally {
      setSubmitting(false);
    }
  };

  const sendEmail = async (formData) => {
    await axios.post('http://localhost:3001/send-email', {
      to: formData.email,
      subject: `Message from ${formData.username}`,
      text: formData.message,
    });
  };

  return (
    <Grid container display={'flex'} justifyContent={'center'}>
      <Grid container width={'100%'}>
        <Navbar />
      </Grid>
      <Grid item>
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

          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={submitting}
            sx={{ marginTop: '1rem' }}
          >
            {submitting ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

export default ContactForm;
