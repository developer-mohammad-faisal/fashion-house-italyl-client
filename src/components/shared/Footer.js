import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className=" text-2xl font-bold">Contact us</span>
          <p>
            Dhendabor, Senanibas Savar,
            <br />
            Dhaka, BD 1344
          </p>

          <div>
            <FontAwesomeIcon icon={faPhone} /> <span>+8801998839126</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} /> <span className="hover:cursor-pointer hover:primary-300"> fasion.house.italy@gmail.com </span>
          </div>
        </div>

        <div>
          <span className="text-2xl font-bold">Help</span>
          <a href="facebook.com" className="hover:text-red-500">
            Contact us
          </a>
          <a href="facebook.com" className="hover:text-red-500">
            Refund Policy
          </a>
          <a href="facebook.com" className="hover:text-red-500">
            Privacy Policy
          </a>
          <a href="facebook.com" className="hover:text-red-500">
            Terms od service
          </a>
          <a href="facebook.com" className="hover:text-red-500">
            Information
          </a>
        </div>
        <div>
          <span className="text-2xl font-bold">Support</span>
          <a href="facebook.com" className="hover:text-red-500">
            Contact us
          </a>
          <a href="facebook.com" className="hover:text-red-500">
            About us
          </a>
          <a href="facebook.com" className="hover:text-red-500">
            Careers
          </a>
          <a href="facebook.com" className="hover:text-red-500">
            Refund & Returns
          </a>
          <a href="facebook.com" className="hover:text-red-500">
            Deliveries
          </a>
        </div>
        <div>
          <span className="text-2xl font-bold">Information</span>
          <a href="facebook.com" className="hover:text-red-500">
            Search Terms
          </a>
          <a href="facebook.com" className="hover:text-red-500">
            Advance Search
          </a>
          <a href="facebook.com" className="hover:text-red-500">
            Help & Faq's
          </a>
          <a href="facebook.com" className="hover:text-red-500">
            Store Location
          </a>
          <a href="facebook.com" className="hover:text-red-500">
            Orders & Returns
          </a>
        </div>
        <div>
          <span className="text-2xl font-bold">Subscribe to our newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">A short sentence describing what someone will receive by subscribing</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="Email address" className="input input-bordered w-full pr-16" />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
              <div>
                <span className=" text-2xl font-bold">Contact With us</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div>
        <h1 className="bg-black text-white text-center h-16">Copyright © 2022, Mabel-Fashion Powered by Shopify Powered by Shopify</h1>
      </div>
    </div>
  );
};

export default Footer;
