import React from 'react';
import Bannar from '../header/Bannar';
import ChefInfo from './ChefInfo';
import Reviews from '../customerReviews/Reviews';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <ChefInfo></ChefInfo>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;