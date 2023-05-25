import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuSection from '../../Home/MenuSection/MenuSection';
import ShowMenus from '../../Shared/ShowMenus/ShowMenus';

const Offer = ({menus}) => {
    const offerMenus = menus.filter(menu => menu.category === "offered")
    return (
        <div className='my-32'>
            <SectionTitle
            title={"Today's offer"}
                subTitle={"Don't miss"}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto'>
            {
                offerMenus.map(menu => <ShowMenus key={menu._id} menu={menu}></ShowMenus>)
            }
            </div>
        </div>
    );
};

export default Offer;