import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faEnvelope,
  faPhone,
  faTimesRectangle,
  faFacebook
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  return (
    <div className="container mx-auto">
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
          <p className="uppercase font-bold mt-5 font-sans">TIMING</p>
          <p className="font-sans">available at 10am-8pm</p>
        </div>
      </div>
      <div className="lg:mb-80 mb-[500px] mr-[200px]">
        <GoogleMap></GoogleMap>
      </div>
      <div className="mt-10">
        <h1 className="uppercase text-2xl">SEND US A MESSAGE</h1>
        <div className="flex">
          <div>
            <form action="">
              <input
                type="text"
                placeholder="Name"
                name="name"
                class="input input-bordered w-full max-w-xs m-3"
              />{" "}
              <br />
              <input
                type="email"
                placeholder="Email"
                name="email"
                class="input input-bordered w-full max-w-xs m-3"
              />{" "}
              <br />
              <input
                type="number"
                placeholder="Name"
                name="number"
                class="input input-bordered w-full max-w-xs m-3"
              />
            </form>
          </div>
          <div className="ml-20">
            <form action="">
              <textarea
                class="textarea textarea-bordered w-80 h-52"
                placeholder="Message"
              ></textarea>{" "}
              <br />
              <input
                className="btn btn-primary w-80"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>


      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 px-12 mx-auto p-10 ">
        <div>
          <button className=" cursor-pointer  h-[45px]  px-4 flex items-center  rounded-[25px]  hover:bg-red-500 ">
            <FontAwesomeIcon icon={faPaperPlane} className=" " />
          </button>
         
        </div>
        <div>
          <button className="  cursor-pointer  h-[45px]  px-4 flex items-center rounded-[25px]  hover:bg-red-500 ">
            <FontAwesomeIcon icon={faEnvelope} className=" " />
          </button>
         
        </div>
        <div>
          <button className="  cursor-pointer  h-[45px]  px-4 flex items-center  rounded-[25px]  hover:bg-red-500 ">
            <FontAwesomeIcon icon={faPhone} className=" " />
          </button>
         
        </div>
        <div>
          <button className=" cursor-pointer  h-[45px]  px-4 flex items-center  rounded-[25px]  hover:bg-red-500 ">
            <FontAwesomeIcon icon={faTimesRectangle} className=" " />
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default Contact;
