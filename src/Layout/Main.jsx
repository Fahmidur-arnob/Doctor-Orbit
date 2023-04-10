import React from 'react';
import Header from '../Pages/Shared/Header/Header'
import { Outlet } from 'react-router-dom';
import Foot from '../Pages/Shared/Foot/Foot';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Main;