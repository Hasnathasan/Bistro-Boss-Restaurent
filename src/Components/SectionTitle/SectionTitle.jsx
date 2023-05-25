import React from 'react';

const SectionTitle = ({subTitle, title}) => {
    return (
        <div className='w-max mx-auto text-center mb-8'>
            <p className='text-yellow-500 mb-2'>---{subTitle}---</p>
            <h2 className='border-y-2 py-2 text-4xl px-7'>{title}</h2>
        </div>
    );
};

export default SectionTitle;