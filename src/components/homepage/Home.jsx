import React from 'react';
import Bannar from '../header/Bannar';
import ChefInfo from './ChefInfo';
import Reviews from '../customerReviews/Reviews';
import WhyToChooseUs from '../whytochoose/WhyToChooseUs';

const Home = () => {

    //components which will show in home

    return (
        <div>
            <Bannar></Bannar>
            <ChefInfo></ChefInfo>
            <WhyToChooseUs></WhyToChooseUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;