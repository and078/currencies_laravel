import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { fetchUserLogout } from '../../store/logoutSlice';
import { logoutUser } from '../../store/loginSlice';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const Logout = ( ) => {

  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.login.user);

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(fetchUserLogout(loginUser));
    dispatch(logoutUser());
  };

  return (
    <button className='btn btn-link' onClick={handleLogout}>Logout</button>
  );
};

export default Logout;