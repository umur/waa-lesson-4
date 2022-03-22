import React, { Fragment } from 'react'
import Counter from '../../components/Counter/Counter';
import Header from '../../components/Header/Header';
import Auth from '../../components/Auth/Auth';
import UserProfile from '../../components/UserProfile/UserProfile';

import { Redirect, Route, Routes, Switch } from 'react-router';

const AuthBlock = () => {
// let isAuthorizred=false;

//     function a(){
// // locql stor
//     }
// {(isAuthorizred)} 
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path='/login' element={<Auth/>} />
                <Route path='/user' element={<UserProfile/>} />
                <Route path='/counter' element={<Counter/>} />
                {/* <Redirect from="/" to='login' /> */}
            </Routes>
        </Fragment>
    );
}

export default AuthBlock;