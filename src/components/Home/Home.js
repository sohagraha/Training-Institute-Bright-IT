import React, { useEffect, useState } from 'react';
import MainSevices from '../MainServices/MainSevices';
import MyCarousel from '../MyCarousel/MyCarousel';
import './Home.css'

const Home = () => {
    return (
        <div className='container mt-3'>
            <MyCarousel></MyCarousel>
            <MainSevices></MainSevices>
        </div>
    );
};

export default Home;