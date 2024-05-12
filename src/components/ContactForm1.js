import React, { useState } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import Navbar from './Navbar';
import aboutusss from '../aboutusss.jpg';
import jobprocess1 from '../jobprocess1.jpg';
import jobprocess2 from '../jobprocess2.jpg';

function ContactForm1() {
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
    <Grid container display={'flex'} >
      <Grid container width={'100%'}>
        <Navbar />
      </Grid>
      <Grid item container display={'flex'} justifyContent={'center'} gap={'20px'}>
      
      <Grid item >
      <img src={jobprocess1} style={{ 
            height: '400px', 
            width: '100%', 
            borderRadius: '15px',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', 
            transition: 'box-shadow 0.3s', 
            ':hover': { boxShadow: 'rgba(195, 107, 117, 0.6) 0px 8px 24px' } 
    }} />

      </Grid>
      <Grid item >
      <img src={jobprocess2}  style={{ 
            height: '400px', 
            width: '100%', 
            borderRadius: '15px',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', 
            transition: 'box-shadow 0.3s', 
            ':hover': { boxShadow: 'rgba(195, 107, 117, 0.6) 0px 8px 24px' } 
    }} />

  
</Grid>
      <Grid item >

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
            label='Password'
            name='password'
            multiline
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
            {submitting ? 'registering...' : 'Register Now'}
          </Button>
        </form>
      </Grid>
      </Grid>
    
    </Grid>
  );
}

export default ContactForm1;
