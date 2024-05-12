// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MiddleSection from './components/Middlesection';
import ContactForm from './components/ContactForm';
import ContactForm1 from './components/ContactForm1';
import ContactForm2 from './components/ContactForm2';
import Service from './components/services';
import { serviceObjects } from './components/constant';
import { createChatBotMessage } from 'react-chatbot-kit';
import ChatBot from 'react-simple-chatbot';
import ChatIcon from '@mui/icons-material/Chat';
import { Button } from '@mui/material';
function App() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };
  const steps = [
    {
      id: '1',
      message: 'Welcome to our website!',
      trigger: '2',
    },
    {
      id: '2',
      message: 'How can I help you?',
      trigger: '3',
    },
    {
      id: '3',
      user: true,
      trigger: '4',
    },
    {
      id: '4',
      message: 'You said: {previousValue}',
      end: true,
    },
  ];
  const botName = 'ExcitementBot';
  const config = {
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
    botName: botName,
    customStyles: {
      botMessageBox: {
        backgroundColor: '#376B7E',
      },
      chatButton: {
        backgroundColor: '#5ccc9d',
      },
    },
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact element={<MiddleSection />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/contact1' element={<ContactForm1 />} />
          <Route path='/contact2' element={<ContactForm2 />} />
          <Route path='/services' element={<Service />} />
          {serviceObjects.map((service) => (
            <Route
              key={service.path}
              path={service.path}
              element={
                <Service
                  serviceName={service.label}
                  servicePath={service.path}
                />
              } // Pass service name as prop
            />
          ))}{' '}
        </Routes>
      </div>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '9999',
          }}
        >
          <Button
            onClick={toggleChat}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#6E48AA',
              cursor: 'pointer',
              color: 'white',
            }}
          >
            <ChatIcon />
          </Button>
        </div>
        {showChat && (
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '100px',
              zIndex: '9998',
            }}
          >
            <ChatBot steps={steps} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
