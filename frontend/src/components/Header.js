import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Logout from './authentication/Logout';
import Register from './authentication/Register';
import Login from './authentication/Login';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.user?.token);

  useEffect(() => {
    dispatch(() => setLoggedIn(token));
  }, [dispatch, token]);

  return (
    <>
      <header className='bg-dark mb-5'>
        {(!loggedIn) ? (
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        )
          : (
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Logout />
              </li>
            </ul>
          )
        }
      </header>

      <Routes>
        <Route path="/login/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default Header;

