import React from "react";
import logo from "../images/Desain_tanpa_judul-removebg-preview.png";
import { GrResume } from "react-icons/gr";
import pdefas from "file:///C:/Users/NAUFAL/Downloads/pdf_20230525_094745_0000.pdf";

function About() {
  return (
    <div id="abouts" className="bg-white pb-28">
      <div className="bg-white p-5 ">
        <h1 className="text-black font-bold text-4xl text-center pt-10">
          ABOUT ME
        </h1>
        <div className="text-left sm:text-left">
          <img src={logo} alt="error" />
          <div className="sm:absolute top-[1200px] right-[10px] p-10 md:ml-96 space-y-5 ">
            <h1 className="text-2xl  font-bold  sm:text-xl  md:text-2xl lg:text-4xl ">
              Mochamad Naufal Aufa Rifqi
            </h1>
            <p className="text-left ">
              Hi my name is mochamad naufal you can call opal LMAO ,
            </p>
            <div>
              <a
                target="_blank"
                href={pdefas}
                className="hover:bg-slate-600 duration-300  p-2 bg-yellow-300  font-bold rounded-lg my-2 sm:p-3 text-sm  md:text-sm lg:text-xl "
                rel="noreferrer"
              >
                View Resume
                <span className="inline-block relative top-[3px] ml-2">
                  <GrResume />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
