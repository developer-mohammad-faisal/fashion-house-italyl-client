import React, { Fragment } from "react";
import { LeftProduct } from "../../StaticData/LeftProduct";

const FeaturedProduct = () => {
  return (
    <Fragment>
      <section className="bg-white divide-y divide-dashed p-3 mt-8">
        <h1 className=" text-xl font-bold ">Featured Product</h1>
        {LeftProduct.map((product) => (
          <div key={product.id}>
            <div className="  flex justify-center items-center gap-x-5 py-4 ">
              <div>
                <h1 className="text-md font-bold hover:text-primary">
                  {product.name}
                </h1>
                <h3 className="text-black"> ${product.price}</h3>
              </div>
              <div className="w-24 ">
                <img src={product.img} alt="logo" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default FeaturedProduct;
