import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "/images/504708-200.png"

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div>
        <h1 className="text-6xl font-extrabold text-red-500  p-8 text-center">Some Error Occured</h1>
      <div className=" md:flex h-screen justify-center items-center ">
        <div className="flex justify-center">
            <img className="h-64  w-52" src={img} alt="" />
        </div>
        <div className="max-w-md pt-10 text-center">
          <h2 className="mb-8 font-bold  text-5xl md:text-9xl text-blue-600">
            <span className="">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-blue-700 text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
