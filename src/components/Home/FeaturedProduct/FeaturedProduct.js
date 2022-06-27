import React, { Fragment } from "react";
import { LeftProduct } from "../../../StaticData/LeftProduct";

const FeaturedProduct = () => {
  return (
    <Fragment>
      <section className="bg-white  p-3 mt-8">
        <h1 className=" text-xl font-bold ">Featured Product</h1>
        <div className="w-20 h-[2px]  bg-black"></div>
        {LeftProduct.map((product) => (
          <div key={product.id}>
            <div className="  flex justify-between items-center py-4 px-0 ">
              <div className="w-1/2">
                <h1 className="text-md font-bold hover:text-primary">{product.name}</h1>
                <div className="flex justify-start items-center">
                  <h3>€</h3>
                  <h3 className="text-black">{product.price}</h3>
                </div>
              </div>
              <div className="w-2/5 ">
                <img className="max-w-full" src={product.img} alt="logo" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default FeaturedProduct;
