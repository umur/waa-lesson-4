import React, { useRef } from 'react';
import './Auth.module.css';
import { useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit'
import { authActions } from '../../store/index';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Cookies from 'js-cookie';


const Auth = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useRef();

  const doLoginAction = (userCredentials) => {
    return createAction('LOGIN_ACTION', text => {
      axios.post('http://localhost:8080/api/v1/uaa', userCredentials) // 
        .then(response => {
          console.log("EXPECTED JWT: " + response.data);
          debugger;
          if (response.data) {
            Cookies.set('user',response.data)
            dispatch(authActions.login());
            // navigate('/user');
          }

        })
        .catch(err => alert(err.message))
    })
  }
  const loginHandler = () => {
    const form = formData.current
    const userCredentials = { email: form['user'].value, password: form['password'].value };
    const loginAction = doLoginAction(userCredentials);  // doLoginAction(userCredentials)();
    loginAction();

  }

  return (
    <main className="auth">
      <section>
        <form ref={formData} onSubmit={loginHandler}>
          <div >
            <label htmlFor='user'>User</label>
            <input type='text' id='user' />
          </div>
          <div >
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
