import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Nav = () => {
    const {user}=useContext(AuthContext);
    console.log(user);


    const handleSignOut=()=>{
        console.log("ok")
    }


    // const {displayName,photoURL}=user;
    // console.log(displayName,photoURL);
    return (
        <div className=' text-center md:flex justify-between items-center  p-4 md:p-6'>
            <Link className='text-4xl'>Yummy Foodies</Link>
            <div className='text-xl flex flex-col mt-6 md:flex-row gap-5'>
                <Link>Home</Link>
                <Link>Blog</Link>
                {
                    user?<span>{user.displayName} <span className=" p-2 rounded-lg  ml-2"><button onClick={handleSignOut} >SignOut</button></span>  </span>  : <Link to='/login'>Login</Link>
                } 
            </div>
        </div>
    );
};

export default Nav;