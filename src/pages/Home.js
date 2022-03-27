import React from 'react'
import CardCarousal from './../components/CardCarousal/CardCarousal';
import BannerSlider from './../components/BannerSlider/BannerSlider';
import Header from './../components/Header/Header';
import OrganWiseTest from '../components/OrganWiseTest/OrganWiseTest';
import Covid19 from '../components/Covid19/Covid19';
import BlogCarousal from '../components/BlogCarousal/BlogCarousal';
import AwardsCarousal from '../components/AwardsCarousal/AwardsCarousal';
import Download from '../components/download/Download';
import WhoAreWe from '../components/WhoAreWe/WhoAreWe';
import Footer from './../components/Footer/Footer';

function Home() {
    return (
        <>
            <Header />
            <BannerSlider />

            <CardCarousal title="Test" link="test-info" />
            <CardCarousal title="Packages" link="packages" />
            <OrganWiseTest />

            <Covid19 />

            <BlogCarousal />
            <AwardsCarousal />

            <Download/>

            <WhoAreWe />

            <Footer />
        </>
    )
}

export default Home