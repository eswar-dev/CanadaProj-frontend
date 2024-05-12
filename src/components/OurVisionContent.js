import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

export default function OurVisionContent() {
  return (
    <Card
      sx={{
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        transition: 'box-shadow 0.3s',
        borderRadius: '20px',
        ':hover': {
          boxShadow: 'rgba(195, 107, 117, 0.6) 0px 8px 24px',
        },
      }}
    >
      <CardContent>
        <Typography
          fontSize={'22px'}
          fontWeight={700}
          display={'flex'}
          justifyContent={'center'}
        >
          Our Vision
        </Typography>
        <Typography fontSize={'18px'} lineHeight={'38px'}>
        <b>Bright Space</b> believe that learning should be accessible to everyone, regardless of their background or circumstances. That's why we're building a platform that's affordable, flexible, and easy to use.
        <br /> We believe in building engaged relationships with our clients, partners, employees, and community. The growth and success of our business is rooted in the long-term relationships and deep customer loyalty we have forged over the years.
        We honor our commitments to clients, to each other, and to the company. We take ownership of our work and hold ourselves accountable for results.
        </Typography>
      </CardContent>
    </Card>
  );
}
