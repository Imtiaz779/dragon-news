import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
const Sociallogin = () => {
    return (
        <div className=''>
          <h2 className='font-semibold mb-3'>Login with</h2>
            <div className='*:w-full space-y-2'>
                <button className='btn'><FaGoogle/> Login With Google</button>
                <button className='btn'><FaGithub/> Login with Github</button>
            </div>
        </div>
    );
};

export default Sociallogin;