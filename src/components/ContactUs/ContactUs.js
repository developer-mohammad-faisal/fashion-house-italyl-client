import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faPaperPlane,
  faEnvelope,
  faPhone,
  faTimesRectangle
  
  
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-base-200 p-10">
        <h1 className="text-3xl text-center font-sans">Contact Us</h1>
        <p className="text-center mt-4 font-sans">
          <span className="hover:text-red-500 cursor-pointer">Home</span>
          /Contact Us
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 px-12 mx-auto p-10 ">
        <div>
          <button className=" text-white cursor-pointer  h-[45px]  px-4 flex items-center bg-black rounded-[25px]  hover:bg-red-500 ">
            <FontAwesomeIcon icon={faPaperPlane} className=" " />
          </button>
          <p className="uppercase font-bold mt-5">Address</p>
          <p className="font-sans">62,74th Avenue-galendale NY 11385 , US</p>
        </div>
        <div>
          <button className=" text-white cursor-pointer  h-[45px]  px-4 flex items-center bg-black rounded-[25px]  hover:bg-red-500 ">
            <FontAwesomeIcon icon={faEnvelope} className=" " />
          </button>
          <p className="uppercase font-bold mt-5">Email</p>
          <p className="font-sans">email:contact@domain.com</p>
        </div>
        <div>
          <button className=" text-white cursor-pointer  h-[45px]  px-4 flex items-center bg-black rounded-[25px]  hover:bg-red-500 ">
            <FontAwesomeIcon icon={faPhone} className=" " />
          </button>
          <p className="uppercase font-bold mt-5">Phone</p>
          <p className="font-sans">call:+1800-567-879</p>
        </div>
        <div>
          <button className=" text-white cursor-pointer  h-[45px]  px-4 flex items-center bg-black rounded-[25px]  hover:bg-red-500 ">
            <FontAwesomeIcon icon={faTimesRectangle} className=" " />
          </button>
          <p className="uppercase font-bold mt-5">TIMING</p>
          <p className="font-sans">available at 10am-8pm</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
