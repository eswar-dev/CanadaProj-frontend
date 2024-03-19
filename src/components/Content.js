import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

export default function Content() {
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
          About us
        </Typography>
        <Typography fontSize={'18px'} lineHeight={'38px'}>
          Craft Consulting Tech is a new platform that aims to revolutionize the
          way people learn and share knowledge. Our mission is to create a
          community of lifelong learners who are passionate about exploring new
          ideas and expanding their horizons. We started Craft Consulting Tech
          with a simple goal in mind: to create a platform that makes it easy
          for people to connect with others who share their interests and
          passions. Our journey has been a long and winding one, but we're proud
          of what we've accomplished so far.{' '}
        </Typography>
      </CardContent>
    </Card>
  );
}
