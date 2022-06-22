import React, { Fragment } from "react";
import Categories from "../Categories/Categories";
import SummerSale from "../SummerSale/SummerSale";
import Testimonials from "../Testimonials/Testimonials";

const Left = () => {
  return (
    <Fragment>
      <div>
        <Categories />
        <SummerSale/>
        <Testimonials/>
      </div>
    </Fragment>
  );
};

export default Left;
