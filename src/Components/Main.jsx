import React from "react";
import Typed from "react-typed";

function Main() {
  return (
    <div class="pt-64 px-10 pb-[600px]">
      <h1 class="text-white text-4xl font-bold sm:text-5xl">
        Hi! , Welcome To My Portfolio
      </h1>
      <div class="text-white text-xl font-bold ">
        <Typed
          strings={["Lets enjoy for the portfolio", "Enjoy the experience"]}
          typeSpeed={40}
          backSpeed={40}
          loop
        ></Typed>
      </div>
      <a
        href="#abouts"
        class="hover:bg-white duration-150 text-2xl font-bold text-black bg-yellow-200 p-4 rounded-xl mt-10 absolute top-[400px] sm:top-[350px] md:top-[310px]"
      >
        Show More
      </a>
    </div>
  );
}

export default Main;
