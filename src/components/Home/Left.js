import React, { Fragment } from "react";
import Categories from "../Categories/Categories";
import SummerSale from "../SummerSale/SummerSale";

const Left = () => {
  return (
    <Fragment>
      <div>
        <Categories />
        <SummerSale/>
      </div>
    </Fragment>
  );
};

export default Left;
