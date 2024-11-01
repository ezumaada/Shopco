import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import Contactpage from './pages/contactpage/Contactpage';
import Categories from './components/categories/Categories';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Use element prop */}
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Categories/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
