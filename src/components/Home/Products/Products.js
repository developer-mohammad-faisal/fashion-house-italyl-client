import React from "react";
import { CardData } from "../../../StaticData/CardData";

const Products = () => {
  return (
    <section id="products">
      <div className="button">
        <button
          autoFocus={true}
          className="px-4 outline-none py-8 bg-transparent text-md hover:text-primary transition duration-150 focus:font-semibold focus:text-primary text-black "
        >
          Clothing
        </button>
        <button className="px-4 py-8 bg-transparent text-md hover:text-primary transition duration-150 focus:font-semibold focus:text-primary text-black ">
          Hand Bags
        </button>
        <button className="px-4 py-8 bg-transparent text-md hover:text-primary transition duration-150 focus:font-semibold focus:text-primary text-black ">
          Sandals
        </button>
      </div>

      <div className="main_product_card">
        {CardData.map((product, i) => (
          <div key={product.id} className="card">
            <div className="imgBx">
              <img src={product.img} alt="" />
              <div className="action">
                <ul>
                  <li>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <span>Add to Wishlist</span>
                  </li>
                  <li>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span>Add to Cart</span>
                  </li>
                  <li>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                    <span>View Details</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <div className="productName">
                <h3 className="text-2xl">{product.name.slice(0, 15)}...</h3>
              </div>
              <div className="price_rating">
                <h2 className="text-xl font-sans">${product.price}</h2>
                <div className="rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
