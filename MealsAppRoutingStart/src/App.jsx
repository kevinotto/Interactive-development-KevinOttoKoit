import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Meal from './pages/Meal';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="center-wrapper">
        <nav>
          <div className="nav-content">
            <Navbar />
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/meal/:id' element={<Meal />} />
          <Route path='*' element={<NotFound />} />
          <Route
            path='/admin'
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;