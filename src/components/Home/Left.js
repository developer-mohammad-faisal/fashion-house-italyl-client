import React, { Fragment } from "react";
import Categories from "../Categories/Categories";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";

const Left = () => {
  return (
    <Fragment>
      <div>
        <Categories />
        <FeaturedProduct/>
        <FeaturedPosts></FeaturedPosts>
      </div>
    </Fragment>
  );
};

export default Left;
