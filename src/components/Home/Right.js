import React from "react";
import { Link } from "react-router-dom";

const Right = () => {
  return (
    <div>
      Right side content <br />
      <br />
      <Link to="/login">Click for login</Link>
    </div>
  );
};

export default Right;
