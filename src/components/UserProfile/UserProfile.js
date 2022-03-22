import React from 'react';
import { useSelector } from 'react-redux';
import './UserProfile.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserProfile = (props) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // put the name of the slice
  const counter = useSelector(state => state.counter.counter); // this will make a subscription

  // axios.interceptors.request.use(
  //   config => {
  //     config.headers.autorization = jwt;
  //     return config;
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // );

  const fetchDataHandler = () => {

    const headers = {
      'Authorization':`Bearer ${Cookies.get('user')}`
    }

    axios.get('/posts' )  // {headers}
      .then(response => {
        console.log(response.data);
        // props.history.push('/posts'); // push will add it to the page stack, replace will just replace the component  // props.history.replace('/posts'); 
      })
      .catch((error) => {
        console.error('Error:', error);
      }); // to check push, go to google, then newpost and submit, then go back.
  }

  return (
    <React.Fragment>
      <main className="profile">
        {isAuthenticated ? null : props.history.push("/login")}
        <h2>My User Profile</h2>
        <p>your current count is: {counter}</p>
      </main>
      <button onClick={fetchDataHandler}> Get Post</button>
    </React.Fragment>

  );
};

export default UserProfile;
