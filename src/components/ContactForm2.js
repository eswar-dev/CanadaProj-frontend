import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import Navbar from './Navbar';
import aboutusss from '../aboutusss.jpg';
import jobprocess1 from '../jobprocess1.jpg';
import jobprocess2 from '../jobprocess2.jpg';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';
import CustomTextfeild from './commonInputs/Textfeild';

function ContactForm2() {
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
          <img src={aboutusss} style={{
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
              select
              label='Job Title'
              name='jobTitle'
              value={formData.jobTitle}
              onChange={handleChange}
              margin='normal'
            >
              <MenuItem value='Software Developer'>Software Developer</MenuItem>
              <MenuItem value='Tester'>Tester</MenuItem>
              <MenuItem value='Manager'>Manager</MenuItem>
            </TextField>
            <CustomTextfeild />
            <CustomTextfeild />
            <CustomTextfeild />
            <CustomTextfeild />
            <CustomTextfeild />
            <CustomTextfeild />

            {/* <Grid display={'flex'} gap={'10px'} justifyContent={'space-between'} alignItems={'center'}><Typography >First Name</Typography>  <TextField
              label='First Name'
              name='firstname'
              value={formData.firstname}
              onChange={handleChange}
              margin='normal'
              style={{ width: '400px' }}
            /></Grid> */}

            {/* <TextField
              fullWidth
              label='Last Name'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              margin='normal'
            />
            <TextField
              fullWidth
              label='Contact Number'
              name='contactnumber'
              value={formData.contactnumber}
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
            /> */}
            <div style={{ marginBottom: '1rem' }}>

              <input
                accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                style={{ display: 'none' }}

                id="upload-resume"
                type="file"
                name="resume"
                onChange={handleChange}
              />
              <label htmlFor="upload-resume" style={{}}>
                <Button variant="outlined" component="span">
                  Choose File
                </Button>
              </label>
            </div>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={submitting}
              startIcon={<SendIcon />}
            >
              {submitting ? 'Thanks for Applying...' : 'Apply'}
            </Button>
          </form>
        </Grid>
      </Grid>

    </Grid>
  );
}

export default ContactForm2;
