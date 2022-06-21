import React, { Fragment } from "react";
import Banner from "../Banner/Banner";
import FlashSale from "../FlashSale/FlashSale";
import LookStyle from "../LookStyle/LookStyle";
import ModernFashion from "../ModernFashion/ModernFashion";

const Middle = () => {
  return (
    <Fragment>
      <div>
        {/* <Banner /> */}
        <FlashSale/>
        <LookStyle/>
        <ModernFashion/>
      </div>
    </Fragment>
  );
};

export default Middle;
