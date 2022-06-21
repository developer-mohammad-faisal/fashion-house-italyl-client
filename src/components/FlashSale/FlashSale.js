import React, { Fragment } from 'react';
import sale1 from '../../assets/images/flashSale/sale1.jpg'
import sale3 from '../../assets/images/flashSale/sale2.webp'
import sale2 from '../../assets/images/flashSale/sale3.jpg'

const FlashSale = () => {
  return (
    <Fragment>
        <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3 bg-white' >
          <div className='mx-auto' ><img src={sale1} alt="sale" /></div>
          <div className='mx-auto' ><img src={sale3} alt="sale" /></div>
          <div className='mx-auto' ><img src={sale2} alt="sale" /></div>
        </section>
    </Fragment>
  );
};

export default FlashSale;