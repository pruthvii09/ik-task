import React from "react";
import NavBar from "../components/NavBar";

const NotFound = () => {
  return (
    <div className="dark:bg-[#151A22] px-8">
      <div>
        <NavBar />
      </div>
      <div className="flex items-center justify-center w-full h-[calc(100vh-70px)] flex-col">
        <h1 className="text-red-500 text-8xl">404</h1>
        <span className="text-xl dark:text-white">No Such Page Found</span>
      </div>
    </div>
  );
};

export default NotFound;
