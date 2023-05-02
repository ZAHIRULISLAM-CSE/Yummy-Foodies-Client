import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut();
  };


  return (
    <div className=" text-center w-[85%] mx-auto md:flex justify-between items-center py-4">
      <Link className="text-4xl font-serif text-[#1797a0]">Yummy Foodies</Link>
      <div className="text-xl text-[#1797a0] flex items-center flex-col mt-6 md:flex-row gap-5">
        <Link>Home</Link>
        <Link>Blog</Link>
        {user ? (
          <div className="flex items-center">
            <div className="group flex relative">
            <span>
              <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
            </span>
              <span
                className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute left-1/2 
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
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
