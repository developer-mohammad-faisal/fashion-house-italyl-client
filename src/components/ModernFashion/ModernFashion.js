import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import handbags from '../../assets/images/flashSale/sale4.jpg'
import clothes from '../../assets/images/flashSale/sale5.jpg'

const ModernFashion = () => {
  return (
    <Fragment>
      <section className="py-10 grid md:grid-cols-1 lg:grid-cols-2 gap-2" >
        <div className="flex items-center gap-0 lg:gap-5" >
          <div className="w-[50%]" >
            <img src={handbags} alt="" />
          </div>
          <div>
            <h1 className="text-[15px] font-semibold" >Modern Handbags</h1>
            <ul className="text-[13px]">
              <li className="py-[2px] hover:text-primary"> <FontAwesomeIcon icon={faAngleRight} /> TYPFIY</li>
              <li className="py-[2px] hover:text-primary"> <FontAwesomeIcon icon={faAngleRight} /> GRACETOP</li>
              <li className="py-[2px] hover:text-primary"> <FontAwesomeIcon icon={faAngleRight} /> FANTOSY</li>
              <li className="py-[2px] hover:text-primary"> <FontAwesomeIcon icon={faAngleRight} /> HIGH HEEL</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-0 lg:gap-5">
          <div className="w-[50%]" >
            <img src={clothes} alt="" />
          </div>
          <div>
            <h1 className="text-md font-semibold" >Fashion Clothes</h1>
            <ul className="text-[13px]" >
              <li className="py-[2px] hover:text-primary "> <FontAwesomeIcon icon={faAngleRight} /> SOBBY</li>
              <li className="py-[2px] hover:text-primary "> <FontAwesomeIcon icon={faAngleRight} /> JABRA</li>
              <li className="py-[2px] hover:text-primary "> <FontAwesomeIcon icon={faAngleRight} /> KUCHIPOO</li>
              <li className="py-[2px] hover:text-primary "> <FontAwesomeIcon icon={faAngleRight} /> LUKE & LILLY</li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ModernFashion;
