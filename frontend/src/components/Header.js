import React, { useState, useEffect, memo } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Logout from './authentication/Logout';
import Register from './authentication/Register';
import Login from './authentication/Login';
import AdminPanel from './admin/AdminPanel';
import User from './User';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


export default memo(function Header() {

  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.user?.token);
  const userName = useSelector((state) => state.login.user?.user?.name);
  const isAdmin = useSelector(state => state.login.user?.user?.role) === 'admin';

  useEffect(() => {
    dispatch(() => setLoggedIn(token));
  }, [dispatch, token]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          {
            isAdmin &&
            <Link className="navbar-brand" to="/admin">Admin Panel</Link>
          }
          {
            loggedIn &&
            <li className="nav-item container">
              <Link className="navbar-brand" to="/user">{userName}</Link>
            </li>
          }
          {(!loggedIn) ? (
            <div>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </ul>
            </div>
          )
            : (
              <div className='container'>
                <ul className="nav justify-content-end">
                  <li className="nav-item" >
                    <Logout />
                  </li>

                </ul>
              </div>
            )
          }
        </div>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  )
});
