import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRegister } from '../../store/registerSlice';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    if (password !== password_confirmation) {
      console.error('Passwords do not match');
      return;
    }

    if (name.trim().length
      && email.trim().length
      && password.trim().length
      && password_confirmation.trim().length) {
        dispatch(fetchUserRegister({ name, email, password, password_confirmation }));
    }

    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');

    return navigate('/login');
  };

  return (
    <div className='container'>
      <form onSubmit={handleRegister}>
        <div className='input-group mb-3'>
          <span className="input-group-text" id="basic-addon1">Name</span>
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='input-group mb-3'>
          <span className="input-group-text" id="basic-addon1">Email</span>
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='input-group mb-3'>
          <span className="input-group-text" id="basic-addon1">Password</span>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='input-group mb-3'>
          <span className="input-group-text" id="basic-addon1">Confirm password</span>
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>

        <button className='btn btn-secondary' type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;