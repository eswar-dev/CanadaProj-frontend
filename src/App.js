// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MiddleSection from './components/Middlesection';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact element={<MiddleSection />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
