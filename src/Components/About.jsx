import React, { useRef } from "react";
import logo from "../images/Desain_tanpa_judul-removebg-preview.png";
import { GrResume } from "react-icons/gr";
import Typed from "react-typed";
import pdefas from "file:///C:/Users/NAUFAL/Downloads/pdf_20230525_094745_0000.pdf";
import { Link } from "react-router-dom";

function About() {
  const ref = useRef(null);

  return (
    <div id="abouts" class="bg-white pb-28">
      <div class="bg-white p-5 ">
        <h1 class="text-black font-bold text-4xl text-center pt-10">
          ABOUT ME
        </h1>
        <div class="text-left sm:text-left">
          <img src={logo} alt="error" />
          <div class="sm:absolute top-[1200px] right-[10px] p-10 md:ml-96 ">
            <h1 class="text-2xl  font-bold  sm:text-xl  md:text-2xl lg:text-4xl ">
              Mochamad Naufal Aufa Rifqi
            </h1>
            <p class="text-left ">
              Hi my name is mochamad naufal you can call opal LMAO ,
            </p>
            <div class="text-black mb-3">
              <Typed strings={["Front End Developer"]} typeSpeed={150} />
              <br />
              <Typed
                strings={["Interested in Design and Technology"]}
                typeSpeed={150}
              />
            </div>
            <Link
              ref={ref}
              target="_blank"
              to={pdefas}
              class="hover:bg-slate-600 duration-300  p-2 bg-yellow-300  font-bold rounded-lg my-2 sm:p-3 text-sm  md:text-sm lg:text-xl "
            >
              View Resume{" "}
              <span class="inline-block relative top-[3px] ">
                <GrResume />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
