import React from 'react';
import Banner from './Banner';
import HomeCard from './HomeCard';
import DemoCategory from './DemoCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <DemoCategory></DemoCategory>
        </div>
    );
};

export default Home;