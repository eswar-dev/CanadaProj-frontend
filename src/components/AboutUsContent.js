import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

export default function AboutUsContent() {
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
        <b>Bright Space</b> is a global consulting company offering solutions, services and platforms on Open Source, Cloud and Automation technologies.we have been delivering enterprise class solutions, which are built using leading platforms & can easily be integrated with existing systems to achieve unparalleled results.
        <br/><br/>
        We offer various project engagement models – Onsite/Onshore, Offshore, Hybrid (Onsite + Offshore) and EDC (Extended Development Center). EDC offers enhanced level of engagement facilitating strategic partnership with the clients by setting up center which leverages our processes, infrastructure and operational capabilities.
        <br/><br/>
        Businesses are concentrating on utilising fewer employees who can provide high-quality work at fair and attractive prices. This conventional staffing method isn’t always successful, though.Schedule a consultation to find out which staffing strategy would assist you to fulfil your needs the best and be the easiest to scale up or down.
        </Typography>
      </CardContent>
    </Card>
  );
}
