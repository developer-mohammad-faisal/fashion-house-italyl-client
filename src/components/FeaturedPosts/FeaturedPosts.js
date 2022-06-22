import React, { Fragment } from "react";
import { FeaturedPost } from "../../StaticData/LeftProduct";

const FeaturedPosts = () => {
  return (
    <Fragment>
      <section className="bg-white divide-y divide-dashed p-3">
        <h1 className=" text-xl font-bold ">Featured Posts</h1>
        {FeaturedPost.map((product) => (
          <div key={product.id}>
            <div className="  flex justify-center items-center gap-x-5 py-4 ">
              <div className="w-28">
                <img src={product.img} alt="logo" />
              </div>
              <div>
              <h3 className="text-black"> {product.date}</h3>
                <h1 className="text-md font-bold hover:text-primary">
                  {product.name}
                </h1>
                
              </div>
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default FeaturedPosts;
