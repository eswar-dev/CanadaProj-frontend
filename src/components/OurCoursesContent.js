import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

export default function OurCoursesContent() {
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
          Our Courses
        </Typography>
        <Typography fontSize={'18px'} lineHeight={'38px'}>
        We're working with some of the best educators and experts in the world to bring you a wide range of courses on a variety of topics. Whether you're interested in art, science, or business, we've got something for you.
        <br /><b>Latest Tech Adventures:</b><br />
Jump into our training program to experience the newest software technologies and cool tools used in the IT industry.
<br /><b>Hands-On Learning Fun:</b>
<br />Have a blast learning! Our program is all about doing, with interactive tasks and projects that bring tech theories to life using the latest software technologies.
Finish the training shows you know your stuff when it comes to using the latest software technologies, boosting your chances in the competitive IT job market.
       
        </Typography>
      </CardContent>
    </Card>
  );
}
