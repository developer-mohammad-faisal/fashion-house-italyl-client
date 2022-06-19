import {
  faBagShopping,
  faEnvelope,
  faHeart,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import logo from "../../../assets/images/logo/logo.webp";

const Navbar = () => {
  return (
    <Fragment>
      <section className="">
        <div className="flex px-5 lg:px-10 justify-between  items-center">
          <div className="hidden lg:inline-flex gap-x-5">
            <div>
              <FontAwesomeIcon icon={faPhone} /> <span >+8801998839126</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} /> <span className="hover:cursor-pointer hover:primary-300" > fasion.house.italy@gmail.com </span>
            </div>
            </div>
          <div>
            <div class="dropdown hover:cursor-pointer dropdown-hover">
              <h1 class="flex justify-between items-center">
                My Account
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </h1>
              <ul
                tabindex="0"
                class="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-44"
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

        <div class="navbar bg-base-300 px-5 my-3 lg:px-10">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li tabindex="0">
                  <a class="justify-between">
                    All Categories
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul class="p-2 border-2 bg-base-300">
                    <li>
                      <a>High Heels</a>
                    </li>
                    <li>
                      <a>Flat Slippers</a>
                    </li>
                    <li>
                      <a>Hand Bags</a>
                    </li>
                    <li>
                      <a>Modern Tops</a>
                    </li>
                    <li>
                      <a>Fittops</a>
                    </li>
                    <li>
                      <a>T-shirt</a>
                    </li>
                    <li>
                      <a>Jeans</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl">
              {" "}
              <img src={logo} alt="" />{" "}
            </a>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              <li tabindex="0">
                <a>
                  All Categories
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul class="p-2 border-2 bg-base-300">
                  <li>
                    <a>High Heels</a>
                  </li>

                  <li>
                    <a>Flat Slippers</a>
                  </li>
                  <li>
                    <a>Hand Bags</a>
                  </li>
                  <li>
                    <a>Modern Tops</a>
                  </li>
                  <li>
                    <a>Fittops</a>
                  </li>
                  <li>
                    <a>T-shirt</a>
                  </li>
                  <li>
                    <a>Jeans</a>
                  </li>
                </ul>
              </li>
              <input
                type="text"
                placeholder="Search.."
                class="rounded-md input my-3 input-group-lg h-full"
              />
              <button class="btn my-3 btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </ul>
          </div>
          <div class="navbar-end gap-x-4 ">
            <div className="text-4xl">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="text-4xl flex items-center">
              <FontAwesomeIcon icon={faBagShopping} />
            </div>
          </div>
        </div>

        <div class="navbar flex-col justify-center items-center px-5 lg:px-10">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabindex="0">
                  <a class="justify-between">
                    Parent
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul class="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div class="navbar-center  hidden lg:flex">
            <ul class=" menu menu-horizontal p-0">
              <li>
                <a>Home</a>
              </li>
              <li tabindex="0">
                <a>
                  Collection
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a>
                  Shop
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a>
                  Trendy Wear
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a>
                  Sandals
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a>
                  Accessories
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a>
                  Pages
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Navbar;
