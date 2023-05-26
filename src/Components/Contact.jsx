import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-green-300 p-20  h-96">
      <h1 className="text-center font-bold text-4xl m-auto ">CONTACT</h1>
      <div className="flex justify-evenly rounded-md gap-5 sm:w-[400px] p-10 m-auto md:w-[500px] ">
        <div>
          <Link to="https://wa.me/6285156802452" target="_blank">
            <IoLogoWhatsapp size={40} className="hover:scale-150 duration-75" />
          </Link>
        </div>
        <div>
          <Link to="https://www.instagram.com/naufallrifqiii/" target="_blank">
            <AiFillInstagram
              size={40}
              className="hover:scale-150 duration-75"
            />
          </Link>
        </div>
        <div>
          <Link to="https://github.com/naufalaufa" target="_blank">
            <BsGithub size={40} className="hover:scale-150 duration-75" />
          </Link>
        </div>
        <div>
          <Link
            to="https://www.linkedin.com/in/naufal-aufa-a7a415257/"
            target="_blank"
          >
            <BsLinkedin size={40} className="hover:scale-150 duration-75" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
