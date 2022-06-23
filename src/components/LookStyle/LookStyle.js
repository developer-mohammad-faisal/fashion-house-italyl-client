import React, { Fragment } from "react";
import "../../styles/components/LookStyle.css";

const LookStyle = () => {
  return (
    <Fragment>
      <section className="pt-10">
        <section
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="1500"
          data-aos-duration="1000"
          className="hood-sales-container text-white"
        >
          <div className="flex">
            <div className="flex-1"></div>

            <div className="text-style flex-1 h-[280px] flex flex-col justify-center">
              <h1>30% OFF</h1>
              <h2>UNDER THE HOOD SALES</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
              <button className="btn w-32">Shop Now</button>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default LookStyle;
