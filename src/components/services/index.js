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
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  {item.label}
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
              AMS from Think & Move is a modular approach focused on securing
              and increasing business and IT value for customers. We deliver
              customized services to optimize your applications for your
              specific business needs. Whether it’s regular hotfixes, upgrades,
              quality assurance, transition management, user adoption, or
              maintaining the underlying cloud or on-premise infrastructure of
              your solution. Our mature operational setup, good experience in
              focus industries, service management processes and governance
              models tailored to your business, and dedicated service desk help
              you keep pace with your digital transformation. Get in touch with
              us for a FREE Consultation!
            </Typography>
          </>
        )}

        {serviceName === 'Data Governance Framework' && (
          <Typography>
            AMS from Think & Move is a modular approach focused on securing and
            increasing business and IT value for customers. We deliver
            customized services to optimize your applications for your specific
            business needs. Whether it’s regular hotfixes, upgrades, quality
            assurance, transition management, user adoption, or maintaining the
            underlying cloud or on-premise infrastructure of your solution. Our
            mature operational setup, good experience in focus industries,
            service management processes and governance models tailored to your
            business, and dedicated service desk help you keep pace with your
            digital transformation. Get in touch with us for a FREE
            Consultation!
          </Typography>
        )}

        {serviceName === 'Data Quality' && (
          <Typography>
            AMS from Think & Move is a modular approach focused on securing and
            increasing business and IT value for customers. We deliver
            customized services to optimize your applications for your specific
            business needs. Whether it’s regular hotfixes, upgrades, quality
            assurance, transition management, user adoption, or maintaining the
            underlying cloud or on-premise infrastructure of your solution. Our
            mature operational setup, good experience in focus industries,
            service management processes and governance models tailored to your
            business, and dedicated service desk help you keep pace with your
            digital transformation. Get in touch with us for a FREE
            Consultation!
          </Typography>
        )}

        {serviceName === 'Embedded System Development' && (
          <Typography>
            AMS from Think & Move is a modular approach focused on securing and
            increasing business and IT value for customers. We deliver
            customized services to optimize your applications for your specific
            business needs. Whether it’s regular hotfixes, upgrades, quality
            assurance, transition management, user adoption, or maintaining the
            underlying cloud or on-premise infrastructure of your solution. Our
            mature operational setup, good experience in focus industries,
            service management processes and governance models tailored to your
            business, and dedicated service desk help you keep pace with your
            digital transformation. Get in touch with us for a FREE
            Consultation!
          </Typography>
        )}

        {serviceName === 'IOT' && (
          <Typography>
            AMS from Think & Move is a modular approach focused on securing and
            increasing business and IT value for customers. We deliver
            customized services to optimize your applications for your specific
            business needs. Whether it’s regular hotfixes, upgrades, quality
            assurance, transition management, user adoption, or maintaining the
            underlying cloud or on-premise infrastructure of your solution. Our
            mature operational setup, good experience in focus industries,
            service management processes and governance models tailored to your
            business, and dedicated service desk help you keep pace with your
            digital transformation. Get in touch with us for a FREE
            Consultation!
          </Typography>
        )}

        {serviceName === 'Machine learning' && (
          <Typography>
            AMS from Think & Move is a modular approach focused on securing and
            increasing business and IT value for customers. We deliver
            customized services to optimize your applications for your specific
            business needs. Whether it’s regular hotfixes, upgrades, quality
            assurance, transition management, user adoption, or maintaining the
            underlying cloud or on-premise infrastructure of your solution. Our
            mature operational setup, good experience in focus industries,
            service management processes and governance models tailored to your
            business, and dedicated service desk help you keep pace with your
            digital transformation. Get in touch with us for a FREE
            Consultation!
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
