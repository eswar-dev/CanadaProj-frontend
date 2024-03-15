import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

export default function FooterCard({ quantity, desc }) {
  return (
    <Grid item>
      <Grid
        sx={{
          transition: 'box-shadow 0.3s',
          borderRadius: '20px',
          cursor: 'pointer',
          width: '300px',
          height: '250px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          ':hover': {
            boxShadow: '0px 9px 20px rgba(255, 149, 5, 0.3)',
            width: '310px',
            height: '260px',
            transition: 'width 0.5s , height 0.5s',
          },
        }}
      >
        <CardContent>
          <Typography fontSize={'50px'} fontWeight={800} textAlign={'center'}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {quantity}+
            </div>
          </Typography>
          <Typography fontSize={'20px'} fontWeight={600} textAlign={'center'}>
            {desc}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}
