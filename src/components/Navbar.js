// Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainLogo from './../mainLogo.jpeg';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };
  const handleHome = () => {
    navigate('/');
  };

  return (
    <AppBar
      position='static'
      style={{ background: '#fff', boxShadow: '0 0 3px rgba(60,72,88,.15)' }}
    >
      <Toolbar>
        <Grid
          container
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Grid sx={{ pt: '5px' }} item>
            <img src={MainLogo} style={{ width: '180px', height: '80px' }} />
          </Grid>
          <Grid item display={'flex'} gap={'30px'}>
            <Typography
              onClick={handleHome}
              style={{
                cursor: 'pointer',
                color: 'black',
                fontWeight: 700,
                fontSize: '20px',
              }}
            >
              HOME
            </Typography>
            <Typography
              onClick={handleHome}
              style={{
                cursor: 'pointer',
                color: 'black',
                fontWeight: 700,
                fontSize: '20px',
              }}
            >
              ABOUT US
            </Typography>
            <Typography
              onClick={handleHome}
              style={{
                cursor: 'pointer',
                color: 'black',
                fontWeight: 700,
                fontSize: '20px',
              }}
            >
              CAREER
            </Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={handleClick}
              style={{
                cursor: 'pointer',
                color: '#fff',
                fontWeight: 600,
                fontSize: '18px',
                backgroundColor: '#1561ad',
                borderRadius: '6px',
                padding: '8px 20px',
                textTransform: 'none',
              }}
              startIcon={<PhoneInTalkIcon />}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
