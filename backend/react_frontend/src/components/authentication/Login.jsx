import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../../axiosClient';
import { useStateContext } from '../../contexts/ContextProvider';

const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState(null)

  const {setUser, setToken} = useStateContext();


  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json, text-plain, */*",
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post('/login', payload, headers)
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
          <h1 className="title">Login into your account</h1>

          {errors &&
            <div className="alert">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }

          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login