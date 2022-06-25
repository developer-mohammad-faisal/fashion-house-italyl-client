import React from "react";
import img from "../../../assets/images/products/clothingsProduct/clothing1.webp";
const Cart = () => {
  return (
    <div>
      <div className="bg-base-300 p-10">
        <h1 className="text-3xl text-center font-sans"> Your Shopping Cart</h1>
        <p className="text-center mt-5 font-sans ">
          <span className="hover:text-primary cursor-pointer">Home</span>/Your
          Shopping Cart
        </p>
      </div>
      <div className="container mt-10 font-sans">
        <div class="overflow-x-auto ">
          <table class="table w-full ">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={img} width="96px" alt="" />
                </td>
                <td>
                  Jeans & Tee full sleeves <br />
                  XXL / Brown
                </td>
                <td>$789.00</td>
                <td>
                  <button className="btn-xs btn m-2 btn-outline">-</button>
                  <button className="btn-xs btn btn-outline">+</button>
                </td>
                <td>$789.00</td>
                <td><button class="btn btn-xs">Remove</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex mt-10">
        <div >
        <p className="hover:text-primary cursor-pointer">Add a note to your order</p>
        </div>
        <div className="ml-auto font-sans ">
        <span className="text-2xl ml-40">Subtotal :$789.00</span>
        <p className="text-sm ">Shipping, taxes, and discounts will be calculated at checkout.</p>
        <div  className='p-2 bg-white'>
            <button class="  duration-500 m-1 px-2 py-3 bg-black text-white hover:bg-primary">Continue Shopping</button>
            <button class="  duration-500 m-1 px-2 py-3 bg-black text-white hover:bg-primary">Update Cart</button>
            <button class="  duration-500 m-1 px-2 py-3 bg-black text-white hover:bg-primary">Cheek Out</button>
      </div>
        </div>
        
      </div>
      <div className="ml-96">
      
      </div>
      
      </div>
      
    </div>
  );
};

export default Cart;
