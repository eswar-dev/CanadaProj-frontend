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
      <Grid item width={'100%'} sx={{ backgroundImage: `url(${Servicebg})`, height: '500px' }}>
        {/* <img
          src={Servicebg}
          alt=''
          style={{ height: '500px', width: '100%' }}
        /> */}
        <Grid container item mt={'190px'} pl={'20px'}>
          {serviceObjects.map((item, index) => (
            <Grid
              item
              xs={5}
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
      </Grid>
      <Grid item p={12}>
        {servicePath === '/services' && (
          <>
            <Grid item display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Grid
                item
                style={{ color: 'red', fontSize: '20px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}
              >
                Our Services
              </Grid>
              <Grid
                item
                style={{ color: 'black', fontSize: '18px', fontWeight: 500 }}
              >
                The blending of style and technology we offer, in conjunction
                with our expertise enables your business to succeed. Below are
                the services we provide:
              </Grid>
            </Grid>

            <Grid
              item
              mt={2}
              style={{ color: 'black', fontSize: '18px', fontWeight: 500 }}
            >
              Be it a Website, e-commerce site, Custom Application, Business
              Intelligence Dashboard or any other IT project
              <br /><br />
              <b>Get in touch with us for a FREE Consultation!</b>
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
              <b>AMS</b> from <b>Bright Space</b> is a modular approach focused on securing and increasing business and IT value for customers. We deliver customized services to optimize your applications for your specific business needs. Whether it’s regular hotfixes, upgrades, quality assurance, transition management, user adoption, or maintaining the underlying cloud or on-premise infrastructure of your solution.
              <br /><br />

              Our mature operational setup, good experience in focus industries, service management processes and governance models tailored to your business, and dedicated service desk help you keep pace with your digital transformation.
              <br /><br />

              <b>Get in touch with us for a FREE Consultation!</b>
            </Typography>
          </>
        )}

        {serviceName === 'Data Governance Framework' && (
          <Typography>
            Data Governance Data governance is the process and framework an organization uses to maintain the quality, consistency and security of their data. Data governance is the key to preventing bad data by having a clear set of standards and policies for how data that enters the pipeline is named and organized.
            <br /><br />

            <b>Get in touch with us for a FREE Consultation!</b>
          </Typography>
        )}

        {serviceName === 'Data Quality' && (
          <Typography>
            Quality of Data is one of the most important assets, and there are different methods for data quality assurance, there are also different tools to help keeping quality of data high. Microsoft Fortunately has a tool released as part of SQL Server 2012 named DQS (Data Quality Services) for this purpose. DQS works on a knowledge base driven data quality method. This means For keeping high quality of the data you have to build a good knowledge base contains domains, composite domains, and domain rules. The person or people involved in building and enhancement of that knowledge based called as Data Stewart. DQS also has some components for data matching as well.
            <br /><br />

            There are five main types of data quality issues that DQS can resolve, which illustrated below as; Completeness, Accuracy, Conformity, Consistency, and Uniqueness.
            <br /><br />

            <b>Get in touch with us for a FREE Consultation!</b>          </Typography>
        )}

        {serviceName === 'Embedded System Development' && (
          <Typography>
            Our experience has created a best practice development process that allows us to rapidly build a high-quality user experience for our customers. Every project is organized into strategic milestones, ensuring the efficiency of the process and enabling us to exceed your expectations. Using agile methodology during the development phase, <b>Bright Space</b> performs constant testing and evaluation procedures, allowing us to identify improvements in the user experience as we progress.
            <br /><br />

            Designing a custom user interface from scratch can be time consuming, so to shorten the timeframe while offering the advantages of a custom designed UI, we have developed a number of hardware platforms. These platforms not only begin your project development efficiently, but they promote quick transition from initial design into a production-ready system.  With our design-for-manufacturing discipline, when hardware and software development are complete, your system is ready to move into manufacturing on-time and on-budget.
            <br /><br />

            <b>Get in touch with us for a FREE Consultation!</b>          </Typography>
        )}

        {serviceName === 'IOT' && (
          <Typography>
            <b>IoT</b> stands for Internet of Things which allows connecting physical objects through internet accessibility. By harnessing the power of IoT application development, enterprises receive seamless end-to-end solutions for integrating hardware, sensors, and software to increase their operational impacts.
            <br /><br />
            IoT improves customer satisfaction, creates new business opportunities, offers quality inputs for marketing and do much more. At <b>Bright Space</b> , our IoT application development experts use emerging IoT technologies, designs and strategies. Our aim is to deliver transformative IoT analytics and solutions to accomplish diverse industrial needs of our clients and boost their business to the next level.
            <br /><br />
            <b>Get in touch with us for a FREE Consultation!</b>
          </Typography>
        )}

        {serviceName === 'Machine learning' && (
          <Typography>
            Organizations worldwide are going the AI and ML way. With machine learning services and consultation it’s possible today to train computers to collect, sort, analyze, and draw insights from data, to solve complex business challenges. Whether it is for making a personalized recommendation, customer support with virtual assistants, social media ad targeting or any other, it’s a never-ending list of examples of machine learning applications for business.
            <br /><br />

            As one of the top machine learning service company, at <b>Bright Space</b> what we do is bring the technology to you. We know it adds value to business, and we are here to familiarize you with it.
            <br /><br />

            <b>Get in touch with us for a FREE Consultation!</b>
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
