import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../axiosClient';
import { useStateContext } from '../../contexts/ContextProvider';

const Signup = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [errors, setErrors] = useState(null)

  const {setUser, setToken} = useStateContext();

  const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json, text-plain, */*",
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    axiosClient.post('/register', payload, headers)
      .then(({data}) => {
        setToken(data.token);
        setUser(data.user);
      })
      .catch(err => {
        console.log(err);
        const response = err.response;
        if(response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
    <div className="login-signup-form animated fadeInDown">
    <div className="form">
      <form onSubmit={onSubmit}>
        <h1 className="title">Signup for free</h1>

        {errors &&
            <div className="alert">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }

        <input ref={nameRef} type="text" placeholder="Name"/>
        <input ref={emailRef} type="email" placeholder="Email"/>
        <input ref={passwordRef} type="password" placeholder="Password"/>
        <input ref={passwordConfirmationRef} type="password" placeholder="Password Confirmation"/>
        <button className="btn btn-block">Signup</button>
        <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
      </form>
    </div>
  </div>
  )
}

export default Signup