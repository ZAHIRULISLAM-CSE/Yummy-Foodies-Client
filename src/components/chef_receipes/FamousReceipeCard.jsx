import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FamousReceipeCard = (props) => {
    const [dis,setDis]=useState(false);


    //handle toast function
    const handleToast=()=>{
        setDis(true);
        toast("The recipe is Now your favourite!");
    }


  const { name, ingredients, cooking_method, rating } = props.data;
  return (
    <div className="mt-12 ">
      <div className="flex flex-col justify-between h-[700px]   max-w-sm p-6 bg-gray-500  rounded-lg shadow ">
        <div>
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-300 dark:text-white">
            {name}
          </h5>
        </div>
        <div>
          <p className="text-2xl text-black mb-3">Ingredients:</p>
          <ul>
            {ingredients.map((single, index) => (
              <li key={index} className="list-disc text-black ml-4">
                {single}
              </li>
            ))}
          </ul>
        </div>
        <h1 className="mt-3 mb-3 text-2xl text-black ">Cooking Method:</h1>
        <p className="text-black text-sm">{cooking_method}</p>
        <p className="text-black text-2xl mt-2">
          Rating:<span className="text-xl"> {rating}</span>{" "}
        </p>
        {
            dis ? <button
                disabled
            onClick={handleToast}
              type="button"
              className="text-white mt-4 bg-gray-800 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800  dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Favourite
            </button>:
            <button
            onClick={handleToast}
              type="button"
              className="text-white mt-4 bg-gray-800 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800  dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Favourite
            </button>
        }
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default FamousReceipeCard;
