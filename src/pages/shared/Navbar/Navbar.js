/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  faBagShopping,
  faEnvelope,
  faHeart,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/images/logo/logo.webp";
import iconClose from "../../../assets/images/icon/icon-close.svg";
import iconHamburger from "../../../assets/images/icon/icon-hamburger.svg";

const Navbar = () => {
  let [open, steepen] = useState(false);
  const menus = [
    { name: "Home" },
    { name: "Collection" },
    { name: "Shop" },
    { name: "Trendy Wear" },
    { name: "Sandals" },
    { name: "Accessories" },
    { name: "Page" },
  ];

  return (
    <React.Fragment>
      <section>
        {/*phone, email and My Account top navbar */}
        <div className="flex px-5 lg:px-10 justify-between  items-center">
          <div className="hidden lg:inline-flex gap-x-5">
            <div>
              <FontAwesomeIcon icon={faPhone} /> <span>+8801998839126</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <span className="hover:cursor-pointer hover:primary-300">
                {" "}
                fasion.house.italy@gmail.com{" "}
              </span>
            </div>
          </div>
          <div>
            <div className="dropdown hover:cursor-pointer dropdown-hover">
              <h1 className="flex justify-between items-center">
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
                className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-44"
              >
                <li>
                  <a>Login </a>
                </li>
                <li>
                  <a>Create Account</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* logo, catagories, search and cart icon option second navbar  */}
        <div className="navbar bg-black px-5 my-3 py-6 lg:px-10">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn mt-16 btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <select name="categories" id="categories" className="select">
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
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">
              {" "}
              <img className="" src={logo} alt="" />{" "}
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <div>
                <select name="categories" id="categories" className="select">
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
              <input
                type="text"
                placeholder="Search.."
                className="input input-group-lg ml-3"
              />
              <button className="btn text-white text-3xl ml-2 btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
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
            </ul>
          </div>
          <div className="navbar-end mt-16 lg:mt-0 gap-x-4">
            <div className="text-3xl ">
              <FontAwesomeIcon icon={faHeart} className="text-white " />
            </div>
            <div className="indicator text-3xl flex items-center">
              <span className="indicator-item badge badge-secondary hover:text-white">
                0
              </span>
              <FontAwesomeIcon
                icon={faBagShopping}
                className="text-white hover:text-primary duration-150 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <nav className="flex items-center justify-center">
          <img
            src={open ? { iconClose } : { iconHamburger }}
            className="md:hidden  fixed right-5 cursor-pointer z-20 top-10"
            onClick={() => steepen(!open)}
          />
          <ul
            className={`bg-[#ffffffb0] backdrop-blur-md  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${
              !open ? "right-[-100%] " : "right-0"
            }`}
          >
            {menus.map((menu, index) => (
              <li
                key={index}
                className="md:inline-block text-zinc-800  md:ml-10 ml-5 md:my-0 my-3 border-b-2 border-transparent hover:border-primary duration-300"
              >
                <a className=" cursor-pointer text-md inline-block py-2">
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
