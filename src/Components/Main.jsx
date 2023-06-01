import React from "react";

function Main() {
  return (
    <div className="pt-64 px-10 pb-[600px]">
      <h1 className="text-white text-4xl font-bold sm:text-5xl">
        Hi! , Welcome To My Portfolio,
      </h1>
      <div className="text-white text-xl font-bold ">
        <p>Lets enjoy for the experience</p>
      </div>
      <a
        href="#abouts"
        className="hover:bg-white duration-150 text-2xl font-bold text-black bg-yellow-200 p-4 rounded-xl mt-10 absolute top-[400px] sm:top-[350px] md:top-[310px]"
      >
        Show More
      </a>
    </div>
  );
}

export default Main;
