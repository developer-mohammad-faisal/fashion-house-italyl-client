import React, { Fragment } from "react";
import { FeatureData } from "../../StaticData/ProductData";

const Features = () => {
  return (
    <Fragment>
      <section className="bg-white divide-y divide-dashed">
        {FeatureData.map((feature) => (
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            key={feature.id}
          >
            <div className="  flex justify-center items-center gap-x-5 py-4 ">
              <div className="hover:translate-x-2 duration-1000 cursor-pointer">
                <img src={feature.img} alt="logo" />
              </div>
              <div>
                <h1 className="text-md font-bold hover:text-primary">
                  {feature.name}
                </h1>
                <h3 className="text-sm text-gray-500"> {feature.des}</h3>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Features;
