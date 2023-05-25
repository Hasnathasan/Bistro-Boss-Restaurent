import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import menuCover from '../../../assets/shop/banner2.jpg'

const Menu = () => {
    return (
        <div>
            <Cover img={menuCover} header={"OUR MENU"} subTitle={"Would you like to try a dish?"}></Cover>
            <Cover img={menuCover} header={"OUR MENU"} subTitle={"Would you like to try a dish?"}></Cover>
            <Cover img={menuCover} header={"OUR MENU"} subTitle={"Would you like to try a dish?"}></Cover>
            <Cover img={menuCover} header={"OUR MENU"} subTitle={"Would you like to try a dish?"}></Cover>
        </div>
    );
};

export default Menu;