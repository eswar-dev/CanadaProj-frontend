import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
export default function BgContent({ heading, children }) {
  return (
    <Grid container mb={4} maxWidth={'400px'}>
      <Grid item style={{ border: '1px solid #ccc', padding: '7px' }}>
        <Grid item style={{ border: '1px solid #ccc', padding: '7px' }}>
          <Typography fontWeight={600} style={{ color: '#fff' }}>
            {heading}
          </Typography>
          <Typography style={{ color: '#fff' }}>
            {children}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
