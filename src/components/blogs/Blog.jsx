import React from "react";
import ReactToPdf from "react-to-pdf";
import { FaFileDownload } from "react-icons/fa";

const Blog = () => {
  const ref = React.createRef();

  return (
    <div>
      <div>
        <ReactToPdf targetRef={ref} noData={true} scale={0.7} filename="blogs.pdf">
          {({ toPdf }) => <div className="text-center mt-6">
          <button className=" text-2xl  mb-8 p-3 bg-blue-600 rounded-xl " >Generate Blog pdf<FaFileDownload onClick={toPdf} className="ml-20 mt-4"></FaFileDownload></button>
          </div> }
        </ReactToPdf>
        <div ref={ref} className=" w-4/5 mt-12 mx-auto">
          <h1 className="text-4xl text-center mb-8 ">Blog</h1>
          <div className="text-center">
          </div>
          <div className="bg-gray-600 mb-5 p-4">
            <h1 className="text-2xl font-bold  mb-4">
              Differences between uncontrolled and controlled components
            </h1>
            <p className="text-xl font-semibold">
              Answer:
              <br /> <br />
              Generally,An uncontrolled component is one which can manage its
              own state , without any interference from its parent
              component.So,the parent component has no direct control over the
              component's state. <br />
              On The Other Hand,A controlled component,which receives its state
              from its parent component and updates that state through
              callbacks.so we can tell that the parent component has direct
              control over the component's state in controlled component
            </p>
          </div>
          <div className="bg-gray-600 mb-5  p-4">
            <h1 className="text-2xl font-bold  mb-4">
              How to validate React props using PropTypes?
            </h1>
            <p className="text-xl font-semibold">
              Answer:
              <br /> <br />
              React has a library called PropTypes that allows us to define the
              types of the props passed to a component and validate them at with
              these library in runtime.
            </p>
          </div>
          <div className="bg-gray-600 mb-5  p-4">
            <h1 className="text-2xl font-bold  mb-4">
              Difference between nodejs and express js?
            </h1>
            <p className="text-xl font-semibold">
              Answer:
              <br /> <br />
              Node.js is a server-side JavaScript runtime environment. It allows
              us to run JavaScript code on the server-side, so we can use it for
              build web applications, backend APIs, and server-side scripts
              <br />
              On the Other Hand,Express.js is a web application framework built
              with Node.js that gives us many tools and utilities for building
              web applications and APIs. Express.js makes it easier to handle
              HTTP requests and responses, provides a routing mechanism.
            </p>
          </div>
          <div className="bg-gray-600 mb-5  p-4">
            <h1 className="text-2xl font-bold  mb-4">
              What is a custom hook, and why will we create a custom hook?
            </h1>
            <p className="text-xl font-semibold">
              Answer:
              <br /> <br />
              Custom hook generally build by the programmer for a specific use
              accross the application,It mainly utilizes the build in hook and
              with these hook , custom hook were built for a specific purpose.It
              is created to extract and share logic that is used in multiple
              places within a component or across different components.
              <br />
              To create a custom hook in a JavaScript function we generally uses
              the built-in React hooks (useState, useEffect, useContext,
              etc.)for create some reusable logic that we can share with
              different component for a specif purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
