import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { googleLogin, user, logOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    googleLogin(navigate, location);
  };

  return (
    <div>
      <h3 className="text-xl text-center font-bold mb-2  ">Welcome to Login Page</h3>
      <h3 className="text-xl text-center font-bold mb-2  ">{user.displayName}</h3>
      <div>
        <button onClick={handleClick} className="mx-auto w-full">
          Login <img className="w-6 h-6 block mx-auto   mb-5" src="/google_logo.png" alt="" />
        </button>
        <button onClick={logOut} className="mx-auto w-full">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Login;
