import React from 'react';
import { Link } from 'react-router-dom';

const HomeSIgnUp = () => {
    return (
        <div className='text-center h-[40%] bg-gray-300 mt-6 p-20 mx-auto space-y-3'>
         <h1 className='text-2xl font-bold'>Interested in Learning More About BIO Events?</h1>
         <p className='text-sm'>Through education, collaboration and advocacy, BIO strives to drive a bio-revolution that cures patients, protects our climate, and nourishes humanity. Receive timely event updates, exclusive content, partnering and programming announcements, and more.</p>
         <button className='btn bg-[#6B58A4] text-white p-4 w-[30%] md:w-[20%] lg:w-[10%]'
         
         >
            <Link to='/register'> Sign Up </Link>
         </button>
        </div>
    );
};

export default HomeSIgnUp;