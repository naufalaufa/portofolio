import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleNav = () => {
    setNavbar((prevSetNavbar) => !prevSetNavbar);
  };
  return (
    <div class="flex justify-between p-5 items-center mb-52 fixed w-full bg-black z-50  border-y-white h-11">
      <h1 class="text-orange-300 text-2xl font-bold ">Naufal Portfolio</h1>
      <ul class="hidden sm:flex text-white gap-10">
        <li class="pr-5">About Me</li>
        <li class="pr-5">Project</li>
        <li class="pr-5">Contact</li>
      </ul>
      <div onClick={handleNav} class="text-white sm:hidden">
        {!navbar ? (
          <GiHamburgerMenu class="cursor-pointer" />
        ) : (
          <AiOutlineClose class="cursor-pointer" />
        )}
      </div>
      <div
        class={
          !navbar
            ? "fixed text-white bg-slate-400 p-16 w-screen top-[90px] right-[-2000px] duration-75 translate-x-6 "
            : "fixed top-[90px] p-16 h-full w-screen bg-slate-400 translate-x-20 duration-75 rounded-md text-black z-20 "
        }
      >
        <ul>
          <li class="pb-10 text-white font-bold cursor-pointer">About Me</li>
          <li class="pb-10 text-white font-bold cursor-pointer">Project</li>
          <li class="pb-10 text-white font-bold cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
