import React from 'react';
import Banner from '../Banner/Banner';
import ContuctUs from '../ContuctUs/ContuctUs';
import DentalCare from '../DentalCare/DentalCare';
import DentalHealth from '../DentalHealth/DentalHealth';
import InfoCard from '../InfoCards/InfoCard';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Techonology from '../TechnologyUsed/Techonology';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <DentalCare></DentalCare>
            <Techonology></Techonology>
            <MakeAppoinment></MakeAppoinment>
            <DentalHealth></DentalHealth>
            <Testimonial></Testimonial>
            <ContuctUs></ContuctUs>
        </div>
    );
};

export default Home;