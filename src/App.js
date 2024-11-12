import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/Login"
import Register from './Components/Register';
import ComplaintList from './Components/ComplaintList';
import ComplaintForm from './Components/ComplaintForm';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/submit-complaint" element={<ComplaintForm />} />
        <Route path="/my-complaints" element={<ComplaintList />} />
      </Routes>
    </Router>
  );
};

export default App;
