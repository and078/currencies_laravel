import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/Calculator';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



function App() {
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
      </Routes>
    </>
  );
}
export default App;