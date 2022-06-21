/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import {
  faArrowRightToBracket,
  faArrowAltCircleLeft,
  faBagShopping,
  faEnvelope,
  faPhone,
  faUser,
  faSearch,
  faHeart,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/images/logo/logo.webp";
// import iconClose from "../../../assets/images/icon/close.png";
import iconHamburger from "../../../assets/images/icon/hamburger.png";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { menus } from "../../../StaticData/Menu";
// import loveIcon from "../../../assets/images/icon/loveIcon.png";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const { logOut, user } = useAuth();
  return (
    <React.Fragment>
      <section>
        
        {/*phone, email and My Account top navbar */}
        <div className="flex text-black text-[12px] justify-between py-[9px] container items-center">
          <div className="hidden lg:inline-flex gap-x-5">
            <div className="flex items-center gap-2 font-sans">
              <FontAwesomeIcon icon={faPhone} />{" "}
              <span className="">+8801998839126</span>
            </div>
            <div className="flex items-center gap-2 font-sans ">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="hover:cursor-pointer hover:text-rose-600 ">
                fasion.house.italy@gmail.com
              </span>
            </div>
          </div>
          <div>
            <div className="dropdown hover:cursor-pointer dropdown-hover">
              <h1 className="flex justify-between items-center text-[12px] hover:text-rose-600">
                My Account
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </h1>

              <ul
                tabIndex="0"
                className="dropdown-content menu py-2 shadow  bg-base-100  rounded w-36"
              >
                {user.displayName ? (
                  <div>
                    <li>
                      <button
                        className="flex text-[12px] gap-2 hover:text-rose-600"
                        onClick={logOut}
                      >
                        {" "}
                        <FontAwesomeIcon
                          className=""
                          icon={faArrowAltCircleLeft}
                        />{" "}
                        Logout
                      </button>
                    </li>
                  </div>
                ) : (
                  <div>
                    <li className=" ">
                      <small className="flex text-[12px] gap-2 hover:text-rose-600">
                        {" "}
                        <FontAwesomeIcon
                          className=""
                          icon={faArrowRightToBracket}
                        />{" "}
                        <Link to="/login">Login </Link>
                      </small>{" "}
                    </li>
                    <li>
                      <small className="flex text-[12px] hover:text-rose-600 gap-2">
                        <FontAwesomeIcon icon={faUser} />
                        <Link to="/register">Create Account</Link>
                      </small>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* logo, catagories, search and cart icon option second navbar  */}
        <div className="bg-black py-4">
          <div className="  container flex flex-col lg:flex-row items-center justify-between ">
            <div className="">
              <Link to="/home">
                <div className="">
                  {" "}
                  <img className="h-[45px]" src={logo} alt="" />{" "}
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-x-10 mt-2">
              <div className=" hidden  lg:flex text-white ">
                <ul className="menu menu-horizontal p-0 ">
                  <div>
                    <select
                      name="categories"
                      id="categories"
                      className=" bg-[#3A3A3A] xl:w-52 h-9 text-sm px-3 focus:outline-none"
                    >
                      <option value="All Categories" disabled selected>
                        All Categories
                      </option>
                      <option value="High Heels">High Heels</option>
                      <option value="Flat Slippers">Flat Slippers</option>
                      <option value="Hand Bags">Hand Bags</option>
                      <option value="Modern Tops">Modern Tops</option>
                      <option value="Fittops">Fittops</option>
                      <option value="T-shirt">T-shirt</option>
                      <option value="Jeans">Jeans</option>
                    </select>
                  </div>

                  <div className="bg-[#3A3A3A] xl:w-96 h-9 text-sm pl-2 2xl:mr-32 xl:mr-10 lg:mr-16 flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="Search.."
                      className="bg-[#3A3A3A] focus:outline-none border-l h-full pl-3 border-stone-500 placeholder:text-white w-full"
                    />
                    <span className=" text-white cursor-pointer  h-9 px-3 flex items-center hover:bg-white hover:text-black  ">
                      <FontAwesomeIcon icon={faSearch} className="text-lg " />
                    </span>
                  </div>
                </ul>
              </div>

              <div>
                <label for="my-drawer1">
                  <img
                    src={iconHamburger}
                    className={"h-7 lg:hidden"}
                    onClick={() => setOpen(true)}
                    alt="icon"
                  />
                </label>
              </div>
              <div className="text-3xl flex lg:hidden">
                <button className="btn text-white text-3xl  btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              <div>
                <span className="text-3xl">
                  {" "}
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white hover:text-primary duration-150 cursor-pointer"
                  />
                </span>
              </div>
              <div class="relative">
                <span class="absolute top-[-10px]  rounded-full h-5 w-5 text-sm text-center bg-primary right-[-6px] text-white">
                  0
                </span>
                <div class="dropdown dropdown-hover dropdown-end">
                  <label tabindex="0" class="">
                    <FontAwesomeIcon
                      icon={faBagShopping}
                      className="text-white p-1 text-3xl hover:text-primary duration-150 cursor-pointer"
                    />
                  </label>
                  <ul
                    tabindex="0"
                    class="menu dropdown-content p-1 shadow font-semibold text-sm bg-base-100 w-64 lg:w-80 "
                  >
                    <li className="">
                      <span className="flex items-center justify-center">
                        Your Cart is currently empty!
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* all catagories product name center third navbar */}
        <nav className="">
          <p
            className="lg:hidden  absolute right-5 cursor-pointer z-20 top-10"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon className="text-black w-full" icon={faClose} />
          </p>
          {/* <img src={open ? iconClose : iconHamburger} alt="icon" /> */}
          <ul
            className={`bg-white lg:shadow-sm  backdrop-blur-md pl-10 pr-10 lg:static fixed duration-500 ease-linear  top-0 pt-16  lg:h-auto h-screen flex flex-col lg:flex-row justify-start lg:justify-center gap-5 lg:gap-8  z-10 py-[15px] ${
              !open ? "right-[-100%]" : "right-0"
            }`}
          >
            {menus.map((menu, index) => (
              <li
                key={index}
                className="lg:inline-block text-zinc-800   border-b-2 border-transparent hover:text-primary duration-300 "
              >
                <a className=" md:border-none border-b-[1px] border-gray-400  w-40 md:w-full cursor-pointer text-md block py-1">
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </section>
    </React.Fragment>
  );
};

export default Navbar;
