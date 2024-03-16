// Navbar.js

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainLogo from './../mainLogo.jpeg';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { servicedata, serviceObjects } from './constant';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const [arrowRotation, setArrowRotation] = useState('0deg');
  const handleClick = () => {
    navigate('/contact');
  };
  const handleHome = () => {
    navigate('/');
  };
  const handleServiceClick = (event) => {
    setAnchorEl(event.currentTarget);
    setArrowRotation('180deg');
  };

  const handleClose = () => {
    setAnchorEl(null);
    setArrowRotation('0deg');
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
                fontFamily: 'Denk One',
                color: '#838383',
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
                fontFamily: 'Denk One',
                color: '#838383',
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
                fontFamily: 'Denk One',
                color: '#838383',
                fontWeight: 700,
                fontSize: '20px',
              }}
            >
              CAREER
            </Typography>
            <Typography
              onClick={() => navigate('/services')}
              style={{
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '20px',
                fontFamily: 'Denk One',
                color: '#838383',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              SERVICE
              <KeyboardArrowDownIcon
                style={{
                  cursor: 'pointer',
                  fontFamily: 'Denk One',
                  color: '#838383',
                  transform: `rotate(${arrowRotation})`,
                }}
                onClick={handleServiceClick}
              />
            </Typography>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {serviceObjects.map((item, index) => {
                return (
                  <MenuItem
                    onClick={() => navigate(item.path)}
                    style={{
                      borderBottom: '1px solid #c4c4c4',
                      padding: '15px',
                    }}
                  >
                    <Typography
                      style={{
                        color: 'red !important',
                      }}
                    >
                      {' '}
                      {item.label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
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
