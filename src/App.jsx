import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/registration/Register';
import LoginPage from './pages/logination/Login';
import AdminPage from './pages/administration/Admin';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Authentication App</h1>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/' element={<PrivateRoute element={<AdminPage />} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
