import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuSection from '../../Home/MenuSection/MenuSection';

const Offer = () => {
    return (
        <div>
            <SectionTitle
            title={"Today's offer"}
                subTitle={"Don't miss"}
            ></SectionTitle>
            <MenuSection></MenuSection>
        </div>
    );
};

export default Offer;