import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cloth from "./Cloth";
import HandBag from "./HandBag";
import Sandals from "./Sandals";

const Products = () => {
  return (
    <div className="border-0">
      <Tabs>
        <TabList>
          <Tab>
            {" "}Clothing
            {/* <button
              autoFocus={true}
              className="px-4 outline-none py-8 bg-transparent text-md hover:text-primary transition duration-150 focus:font-semibold focus:text-primary text-black "
            >
              Clothing
            </button> */}
          </Tab>
          <Tab>
            {" "}  Hand Bags
           {/*  <button className="px-4 py-8 bg-transparent text-md hover:text-primary transition duration-150 focus:font-semibold focus:text-primary text-black ">
              Hand Bags
            </button> */}
          </Tab>
          <Tab>
            {" "} Sandals
            {/* <button className="px-4 py-8 bg-transparent text-md hover:text-primary transition duration-150 focus:font-semibold focus:text-primary text-black ">
              Sandals
            </button> */}
          </Tab>
        </TabList>

        <TabPanel>
          <div>
            <Cloth />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <HandBag />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <Sandals />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Products;
