import React, { Fragment } from "react";
import {FiPhone, FiMail} from 'react-icons/fi'; 

const Navbar = () => {
  return (
    <Fragment>
    <section className="px-5 lg:px-10">
    <div className="flex justify-between  items-center">
        <div className="hidden lg:inline-flex gap-x-5">
           <h1  className=" flex items-center">+8801998839126</h1>
            <h1  className=" flex items-center hover:cursor-pointer hover:primary-300">fasion.house.italy@gmail.com</h1>
        </div>
        <div>
          <div class="dropdown hover:cursor-pointer dropdown-hover">
          <h1 class="flex justify-between items-center">
            My Account
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </h1>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
    </section>
    </Fragment>
  );
};

export default Navbar;
