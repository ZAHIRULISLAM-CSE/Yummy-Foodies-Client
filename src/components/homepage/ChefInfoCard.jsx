import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import { FaRecordVinyl } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

const ChefInfoCard = (props) => {
  const { chef_img, chef_name, experience, likes, number_of_receipe,id } =
    props.data;
  return (
    <div className="w-[85%] mb-6 mx-auto">
      <div className="max-w-sm bg-slate-600   rounded-lg shadow dark:bg-gray-800">
      <LazyLoad height={240} width="" onContentVisible={() => {console.log('loaded!')}}   threshold={0.4}>
          <img
            className=" w-full md:w-full rounded-t-lg"
            src={chef_img}
            alt=""
          />
        </LazyLoad>
        <div className="p-5">
            <h5 className="mb-2 mt-3 text-2xl font-bold tracking-tight text-white dark:text-white">
              {chef_name}
            </h5>
            <p className="mt-4 inline-flex  text-gray-300 items-center gap-3 text-xl"> <FaRecordVinyl></FaRecordVinyl> Experience: {experience}</p>
            <br />
            <p className="text-xl text-gray-300  mt-4 inline-flex items-center gap-3"> <FaHeart></FaHeart>Likes: {likes} </p>
          <p className="text-xl text-gray-300 inline-flex mt-4 items-center gap-3"> <FaServer></FaServer> Number of Receipes:  {number_of_receipe} </p>
          <Link to={`/chefRecipe/${id}`} className="inline-flex mt-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            View  Recipes
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fillRule="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefInfoCard;
