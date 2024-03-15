// Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainLogo from './../mainLogo.jpeg';
const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };
  const handleHome = () => {
    navigate('/');
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid sx={{ flexGrow: 1, pt: '5px' }}>
          <img src={MainLogo} style={{ width: '180px', height: '80px' }} />
        </Grid>
        <Button color='inherit' onClick={handleHome}>
          Home
        </Button>
        <Button color='inherit' onClick={handleClick}>
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
