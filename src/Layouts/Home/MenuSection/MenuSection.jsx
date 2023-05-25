import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ShowMenus from '../../Shared/ShowMenus/ShowMenus';
import useMenu from '../../../hooks/useMenu';

const MenuSection = () => {
    const [menus] = useMenu()
    return (
        <div className='my-32'>
            <SectionTitle
                title="From our menu"
                subTitle="Check it out"
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto'>
                {
                    menus.map(menu => <ShowMenus key={menu._id} menu={menu}></ShowMenus>)
                }
            </div>
        </div>
    );
};

export default MenuSection;