import React from "react";
import BestSellers from "../BestSellers/BestSellers";
import ComboOffer from "../ComboOffer/ComboOffer";
import Features from "../Features/Features";
import OurClients from "../OurClients/OurClients";

const Right = () => {
  return (
    <div>
        <Features/>
        <ComboOffer/>
        <BestSellers/>
        <OurClients/>
    </div>
  );
};

export default Right;
