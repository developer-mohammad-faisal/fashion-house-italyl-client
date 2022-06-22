import React, { Fragment } from "react";
import Categories from "../Categories/Categories";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";

const Left = () => {
  return (
    <Fragment>
      <div>
        <Categories />
        <FeaturedProduct/>
      </div>
    </Fragment>
  );
};

export default Left;
