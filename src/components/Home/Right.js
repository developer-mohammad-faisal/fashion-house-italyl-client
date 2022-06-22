import React from "react";
import ButtonRight from "../ButtonRight/ButtonRight";
import BestSellers from "../BestSellers/BestSellers";
import ComboOffer from "../ComboOffer/ComboOffer";
import Features from "../Features/Features";
import OurClients from "../OurClients/OurClients";

const Right = () => {
  return (
    <div>
        <Features/>
        <ButtonRight></ButtonRight>
        <ComboOffer/>
        <BestSellers/>
        <OurClients/>
    </div>
  );
};

export default Right;
