import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className=' text-center md:flex justify-between items-center  p-4 md:p-6'>
            <Link className='text-4xl'>Yummy Foodies</Link>
            <div className='text-xl flex flex-col mt-6 md:flex-row gap-5'>
                <Link>Home</Link>
                <Link>Blog</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Nav;