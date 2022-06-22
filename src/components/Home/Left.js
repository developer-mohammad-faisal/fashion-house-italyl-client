import React, { Fragment } from "react";
import Categories from "../Categories/Categories";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import SummerSale from "../SummerSale/SummerSale";
import Testimonials from "../Testimonials/Testimonials";

const Left = () => {
  return (
    <Fragment>
      <div>
        <Categories />
        <FeaturedProduct/>
        <FeaturedPosts></FeaturedPosts>
        <SummerSale/>
        <Testimonials/>
      </div>
    </Fragment>
  );
};

export default Left;
