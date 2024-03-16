// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MiddleSection from './components/Middlesection';
import ContactForm from './components/ContactForm';
import Service from './components/services';
import { serviceObjects } from './components/constant';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact element={<MiddleSection />} />
          <Route path='/contact' element={<ContactForm />} />
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
    </Router>
  );
}

export default App;
