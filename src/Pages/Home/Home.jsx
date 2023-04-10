import React from 'react';
import Banner from './Banner';
import HomeCard from './HomeCard';
import FlashDeals from './FlashDeals';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <FlashDeals ></FlashDeals>
        </div>
    );
};

export default Home;