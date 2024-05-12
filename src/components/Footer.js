import React from 'react';
import { Typography, Container, Grid, Box } from '@mui/material';
import footerbg from '../servicelogo.jpg'

const Footer = () => {
  return (
    <Grid sx={{ width: '100%' }}>
      {/* <Typography variant='body1' align='center' gutterBottom>
        Contact us: your-email@example.com
        <br />
        ©2024 by brightspace.com.All rights reserved.
      </Typography> */}

      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 2fr)',
          color: 'black',
          backgroundImage: `url(${footerbg})`,
          width: '100%',
        }}
      >
        <Grid item pl={'40px'}>Home</Grid>
        <Grid fontWeight={600} item>+1 (647) 313‑7977</Grid>
        <Grid item pl={'40px'}>About</Grid>
        <Grid fontWeight={600} item>info@thinkmoveit.com</Grid>
        <Grid item pl={'40px'}>Services</Grid>
        <Grid item>Think & Move IT Solutions,
          2 County Court Blvd., Suite 400
          Brampton, Ontario L6W 3W8</Grid>
        <Grid item pl={'40px'}>Contact</Grid>

      </Box>
      <Grid style={{ background: '#627a7a', height: '50px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        ©2024 by Think & Move IT Solutions. All rights reserved.
      </Grid>

    </Grid>
  );
};

export default Footer;
