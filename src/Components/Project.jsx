import React from "react";
import Netflix from "../images/NETFLIX-NEW-REV.png";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div class="text-white pt-[200px] bg-black pb-36 ">
      <h1 class="text-4xl font-bold text-center p-10">PROJECT</h1>
      <div class="sm:flex text-center font-bold ">
        <div class="p-8 ">
          <h1 class="text-left my-5 text-2xl">Netflix Clone</h1>
          <Link to="https://netflix-clone-naufal.web.app/" target="_blank">
            <img
              src={Netflix}
              alt="error"
              class="cursor-pointer hover:scale-110 duration-100"
            />
          </Link>
          <p class="text-left mt-10 font-extralight">
            Netflix clone project using react js technology, redux, firebase,
            Click image for view project , if there is a warning click details
            -VISIT THIS UNSAFE SITE-
          </p>
        </div>
        <div class="p-8 ">
          <h1 class="text-left my-5 text-2xl">Coming soon</h1>
          <Link to="https://netflix-clone-naufal.web.app/" target="_blank">
            <img
              src={Netflix}
              alt="error"
              class="cursor-pointer hover:scale-110 duration-100 "
            />
          </Link>
          <p class="text-left mt-10 font-extralight">COMING SOON PROJECT</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
