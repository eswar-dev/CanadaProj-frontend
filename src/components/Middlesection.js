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
import teamwork from '../teamwork.jpg';
import courses from '../courses.jpg';
import about from '../about.jpg';
import mainpic from '../mainpic.jpg';
import background from '../background.jpg';
import SliderComponent from './SliderComponent';
import slide1 from '../slide1.jpg';
import slide2 from '../slide2.jpg';
import BgContent from './BgContent';
import mainbg from '../mainbg.png';


function TypewriterText({ text }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Typing speed: 100 milliseconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [text]);

  return (
    <span>{displayedText}</span>
  );
}
const MiddleSection = () => {
  const [numbers, setNumbers] = useState({
    number1: 0,
    number2: 0,
    number3: 0,
  });
  const images = [slide1, slide2];
  const [serviceIndex, setServiceIndex] = useState(0);
  const services = ['consultancy', 'technical', 'training'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setServiceIndex(prevIndex => (prevIndex + 1) % services.length);
    }, 2000); // Change service every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
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
      <Grid
        container
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        item
        width={'100%'}
        mt={6}
        pl={2}
        style={{
          // backgroundImage: 'url("../mainbg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${mainbg})`,
        }}
      >
          <Grid item md={5}>
          <SliderComponent images={images} />
        </Grid>
        <Grid item md={7}>
          <Grid item display={'flex'} gap={'10px'}>
            <BgContent children={'box1'}/>
            <BgContent children={'box2'}/>
          </Grid>
          <Grid item display={'flex'} gap={'10px'}>
            {' '}
            <BgContent children={'box3'}/>
            <BgContent children={'box4'}/>
          </Grid>
        </Grid>
      
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
      <Grid item display={'flex'} justifyContent='center'>
      <Typography
        style={{ fontSize: '24px', fontWeight: 800, color: '#01AAC1', margin: '10px' }}
      >
        Bright Space <TypewriterText text={services[serviceIndex]} /> Services
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
      <Grid item width={'100%'} p={3} mb={5}>
        <Grid item display={'flex'} gap={'15px'} mt={2}>
          <Grid item md={6} display={'flex'} justifyContent={'center'}>
            <img src={teamwork} style={{ height: '300px', width: '100%' }} />
          </Grid>
          <Grid item md={6}>
            <Content />
          </Grid>
        </Grid>
        <Grid item display={'flex'} gap={'15px'} mt={2}>
          <Grid item md={6}>
            <Content />
          </Grid>
          <Grid item md={6} display={'flex'} justifyContent={'center'}>
            <img src={courses} style={{ height: '300px', width: '100%' }} />
          </Grid>
        </Grid>
        <Grid item display={'flex'} gap={'15px'} mt={2}>
          <Grid item md={6} display={'flex'} justifyContent={'center'}>
            <img src={about} style={{ height: '300px', width: '100%' }} />
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
          <Typography fontSize={'35px'} fontWeight={800} color={'#01AAC1'}>
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
