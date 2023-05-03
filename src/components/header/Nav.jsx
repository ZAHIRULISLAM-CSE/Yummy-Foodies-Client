import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut();
  };


  return (
    <div className=" text-center w-[85%] mx-auto md:flex justify-between items-center py-4">
      <Link to="/" className="text-4xl font-serif text-[#1797a0]">Yummy Foodies</Link>
      <div className="text-xl  flex items-center flex-col mt-6 md:flex-row gap-5">
        <NavLink to='/'  className={({ isActive }) => (isActive ? 'active' : 'default')}  end >Home</NavLink>
        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}  >Blog</NavLink>
        {user ? (
          <div className="flex items-center">
            <div className="group flex relative">
            <span>
              <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
            </span>
              <span
                className="group-hover:opacity-100 transition-opacity bg-blue-600 px-1 text-xs text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
              >
               {user.displayName}
              </span>
            </div>
            <span className=" p-2 rounded-lg  ml-2">
              <button onClick={handleSignOut}>SignOut</button>
            </span>
          </div>
        ) : (
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}  to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
