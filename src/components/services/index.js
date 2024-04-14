import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
} from '@mui/material';
import Navbar from '../Navbar';
import Servicebg from '../../servicelogo.jpg';
import { servicedata, serviceObjects } from '../constant';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import { purple } from '@mui/material/colors';
export default function Service({
  serviceName = 'Services',
  servicePath = '/services',
}) {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid
        item
        style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}
      >
        <Navbar />
      </Grid>
      <Grid item width={'100%'}>
        <img
          src={Servicebg}
          alt=''
          style={{ height: '500px', width: '100%' }}
        />
      </Grid>
      <Grid item p={12}>
        {servicePath === '/services' && (
          <>
            <Grid item display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Grid
                item
                style={{ color: 'red', fontSize: '20px', fontWeight: 600 }}
              >
                Our Services
              </Grid>
              <Grid
                item
                style={{ color: 'grey', fontSize: '18px', fontWeight: 500 }}
              >
                The blending of style and technology we offer, in conjunction
                with our expertise enables your business to succeed. Below are
                the services we provide:
              </Grid>
            </Grid>
            <Grid container item mt={3}>
              {serviceObjects.map((item, index) => (
                <Grid
                  item
                  xs={6}
                  key={index}
                  mb={1}
                  onClick={() => navigate(item.path)}
                  style={{
                    color: 'orange',
                    fontSize: '18px',
                    cursor: 'pointer',
                  }}
                >
                  <Button
                    style={{
                      color: '#fff',
                      backgroundColor: purple[500],
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
            <Grid
              item
              mt={2}
              style={{ color: 'brown', fontSize: '18px', fontWeight: 500 }}
            >
              Be it a Website, e-commerce site, Custom Application, Business
              Intelligence Dashboard or any other IT project – get in touch with
              us for a FREE Consultation!
            </Grid>
          </>
        )}
        {serviceName !== 'Services' && (
          <Typography fontSize={'20px'} fontWeight={700} color={'brown'} mb={2}>
            {serviceName}
          </Typography>
        )}

        {serviceName === 'Application Management Services' && (
          <>
            <Typography>
            Application Management Services content
            </Typography>
          </>
        )}

        {serviceName === 'Data Governance Framework' && (
          <Typography>
           Data Governance Framework content
          </Typography>
        )}

        {serviceName === 'Data Quality' && (
          <Typography>
           Data Quality content
          </Typography>
        )}

        {serviceName === 'Embedded System Development' && (
          <Typography>
           Embedded System Development content
          </Typography>
        )}

        {serviceName === 'IOT' && (
          <Typography>
          IOT content
          </Typography>
        )}

        {serviceName === 'Machine learning' && (
          <Typography>
          Machine learning content
          </Typography>
        )}

        {serviceName !== 'Services' && (
          <Grid item mt={2}>
            <Button
              children={'GET FREE CONSULTATION'}
              variant='contained'
              style={{ background: 'brown', fontWeight: 700 }}
              onClick={() => navigate('/contact')}
            />
          </Grid>
        )}
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
}
