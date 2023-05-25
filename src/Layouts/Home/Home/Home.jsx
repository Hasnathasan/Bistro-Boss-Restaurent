import React from "react";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";
import MenuSection from "../MenuSection/MenuSection";
import Featured from "../FeaturedSection/Featured";
import Testimonials from "../Testimonials/Testimonials";
import "swiper/css/navigation";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Slider></Slider>
      <MenuSection></MenuSection>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
