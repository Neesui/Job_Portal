import React from 'react';
import HeroSection from '../../Components/userComponent/HeroSection';
import TopNiches from '../../Components/userComponent/TopNiches';
import CategorySection from '../../Components/userComponent/CategorySection';

const Homepage = () => {
    return (
        <>
            <HeroSection />
            <TopNiches />
            <CategorySection />
        </>
    );
};

export default Homepage;
