import React from 'react';
import ContactUs from '../../../Shared/ContactUs/ContactUs';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeInformation from '../HomeInformation/HomeInformation';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeService></HomeService>
            <HomeInformation></HomeInformation>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;