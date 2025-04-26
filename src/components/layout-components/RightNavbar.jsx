import React from 'react';
import Sociallogin from '../Sociallogin';
import Findus from '../Findus';

const RightNavbar = () => {
    return (
        <div className='space-y-5'>
            <Sociallogin/>
            <Findus/>
        </div>
    );
};

export default RightNavbar;