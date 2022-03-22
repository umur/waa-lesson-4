import React, { Fragment } from 'react'
import Header from '../../components/Header/Header';

import { Redirect, Route, Routes, Switch } from 'react-router';
import PageRoutes from './PageRoutes';

const Dashboard = () => {
    return (
        <Fragment>
            <Header />

            <PageRoutes />
        </Fragment>
    );
}

export default Dashboard;