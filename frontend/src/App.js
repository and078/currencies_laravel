import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './components/Home';
import Calculator from './components/Calculator';


function App() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const token = useSelector((state) => state.login.user?.token);

  useEffect(() => {
    token ? navigate('/calculator') : navigate('/');
  }, [token]);

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
    </>
  );
}
export default App;