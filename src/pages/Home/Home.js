import React from 'react';
import HomeProducts from '../../componets/HomeProducts/HomeProducts';
import MyCarosole from '../../componets/MyCarosole/MyCarosole';
import Review from '../../componets/Review/Review';
import Speciality from '../../componets/Speciality/Speciality';

const Home = () => {
    return (
        <div>
            <MyCarosole></MyCarosole>
            <Speciality></Speciality>
            <HomeProducts></HomeProducts>
            <Review></Review>
        </div>
    );
};

export default Home;