import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import Mainimg from './../mainimg.png';
import BussinessLogo from './../business.svg';
import Content from './Content';
import FooterCard from './FooterCard';
import NumberAnimation from './NumberAnimation';
import TypingAnimation from './TextAnimation';
const MiddleSection = () => {
  const [numbers, setNumbers] = useState({
    number1: 0,
    number2: 0,
    number3: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      console.log(windowHeight, documentHeight, scrollTop);
      // Check if the user has scrolled to the bottom of the page
      // if (windowHeight + scrollTop === documentHeight) {
      // Set the numbers you want to animate when scrolled to the bottom
      setNumbers({ number1: 100, number2: 150, number3: 30 }); // You can set any numbers here
      // }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      backgroundColor={'rgb(246, 246, 246)'}
    >
      <Grid
        item
        style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}
      >
        <Navbar />
      </Grid>
      <Grid item mt={'80px'}>
        <img
          src={Mainimg}
          style={{
            height: '600px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', // Align image to center vertically
          }}
          alt=''
        />
      </Grid>
      <Grid
        item
        display={'flex'}
        justifyContent={'center'}
        gap={'20px'}
        alignItems={'center'}
      >
        <Box
          item
          sx={{ minWidth: '200px', height: '5px', background: 'grey' }}
        ></Box>
        <Grid item>
          <Typography alignItems={'center'} fontSize={'50px'}>
            𝔟𝔯𝔦𝔤𝔥𝔱 𝔰𝔭𝔞𝔠𝔢 𝔱𝔢𝔠𝔥{' '}
            <TypingAnimation text='𝔰𝔬𝔩𝔲𝔱𝔦𝔬𝔫𝔰' animatedWord='𝔰𝔬𝔩𝔲𝔱𝔦𝔬𝔫𝔰' />
          </Typography>
        </Grid>
        <Box
          item
          sx={{
            minWidth: '200px',
            height: '5px',
            color: 'grey',
            background: 'grey',
          }}
        ></Box>
      </Grid>
      <Grid item width={'100%'} p={3} gap={'15px'} mb={5}>
        <Grid item display={'flex'} gap={'15px'}>
          <Grid item md={6} display={'flex'} justifyContent={'center'}>
            <img src={BussinessLogo} style={{ height: '300px' }} />
          </Grid>
          <Grid item md={6}>
            <Content />
          </Grid>
        </Grid>
        <Grid item display={'flex'}>
          <Grid item md={6}>
            <Content />
          </Grid>
          <Grid item md={6} display={'flex'} justifyContent={'center'}>
            <img src={BussinessLogo} style={{ height: '300px' }} />
          </Grid>
        </Grid>
        <Grid item display={'flex'}>
          <Grid item md={6} display={'flex'} justifyContent={'center'}>
            <img src={BussinessLogo} style={{ height: '300px' }} />
          </Grid>
          <Grid item md={6}>
            <Content />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        width={'90%'}
        height={'500px'}
        p={3}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        style={{
          background: '#fff',
        }}
      >
        <Grid item display={'flex'} justifyContent='center'>
          <Typography fontSize={'40px'} fontWeight={800} color={'red'}>
            Growing Exponentially
          </Typography>
        </Grid>
        <Grid item display={'flex'} justifyContent='center' gap={'40px'} mt={3}>
          <FooterCard
            {...{
              quantity: <NumberAnimation number={numbers.number1} />,
              desc: 'Employee Engagements',
            }}
          />
          <FooterCard
            {...{
              quantity: <NumberAnimation number={numbers.number2} />,
              desc: 'successful projects',
            }}
          />
          <FooterCard
            {...{
              quantity: <NumberAnimation number={numbers.number3} />,
              desc: 'Happy clients',
            }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        mt={3}
        style={{
          // position: 'relative',
          // bottom: 0,
          height: '100px',
          color: '#fff',
          background: 'black',
          width: '100%',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Footer />
      </Grid>
    </Grid>
  );
};

export default MiddleSection;
