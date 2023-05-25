import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import menuCover from '../../../assets/shop/banner2.jpg'
import Offer from '../TodaysOffer/Offer';
import { Helmet } from 'react-helmet-async';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            <Cover img={menuCover} header={"OUR MENU"} subTitle={"Would you like to try a dish?"}></Cover>
            <Offer></Offer>
        </div>
    );
};

export default Menu;