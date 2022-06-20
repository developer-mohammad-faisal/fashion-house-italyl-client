import React, { Fragment } from 'react';

const Categories = () => {
  return (
    <Fragment>
         <section className='bg-white  pt-3 pl-3' >
              <h1 className='text-xl font-bold border-b-2 w-16 border-stone-800' >Categories</h1>
              <ol className='divide-y divide-dashed'>
                <li className='py-3 hover:text-primary' >Long Top</li>
                <li className='py-3 hover:text-primary' >Long Top</li>
                <li className='py-3 hover:text-primary' >Long Top</li>
                <li className='py-3 hover:text-primary' >Long Top</li>
                <li className='py-3 hover:text-primary' >Long Top</li>
                <li className='py-3 hover:text-primary' >Long Top</li>
                <li className='py-3 hover:text-primary' >Long Top</li>
                <li className='py-3 hover:text-primary' >Long Top</li>
              </ol>
         </section>
    </Fragment>
  );
};

export default Categories;