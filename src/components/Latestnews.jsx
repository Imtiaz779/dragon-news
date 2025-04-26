import React from 'react';
import Marquee from "react-fast-marquee";
import {Link} from "react-router-dom"
const  Latestnews = () => {
    return (
        <div className='flex gap-2 items-center bg-base-200 p-2'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1'>Latest</p>
            <Marquee pauseOnHover={true} speed={60}className='space-x-16'>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </Link>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </Link>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </Link>
            </Marquee>
        </div>
    );
};

export default Latestnews ;