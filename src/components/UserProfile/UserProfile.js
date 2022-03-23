import React from 'react';
import { useSelector } from 'react-redux';
import './UserProfile.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const UserProfile = (props) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const counter = useSelector(state => state.counter.counter);

  useEffect(async () => {
    const headers = {
      'Authorization': `Bearer ${Cookies.get('user')}`
    }
    try {
      const response = await axios.get('/api/v1/products', headers);
      console.log(response);
    } catch (err) {
      console.log(err)
    }
  }, []);

  return (
    <React.Fragment>
      <main className="profile">
        {/* {isAuthenticated ? null : props.history.push("/login")} */}
        <h2>My User Profile</h2>
        <p>your current count is: {counter}</p>
      </main>

    </React.Fragment>

  );
};

export default UserProfile;
