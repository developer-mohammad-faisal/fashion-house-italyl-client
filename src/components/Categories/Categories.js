import React, { Fragment } from 'react';
import '../../styles/components/Categories.css'

const Categories = () => {
  return (
    <Fragment>
         <section className='bg-white  pt-3 pl-3' >
              <h1 className='text-xl font-bold border-b-2 w-16 border-stone-800' > Categories</h1 >

             <div className='box mt-5' >

              <ul className='divide-y divide-dashed'>
                <li className='py-3 font-semibold' > <span >&#8226;</span> Long Top</li>
                <li className='py-3 font-semibold' > <span >&#8226;</span> T-shirts</li>
                <li className='py-3 font-semibold' > <span >&#8226;</span> Jeans</li>
                <li className='py-3 font-semibold' > <span >&#8226;</span> Sandals</li>
                <li className='py-3 font-semibold' > <span >&#8226;</span> High Heels</li>
                <li className='py-3 font-semibold' > <span >&#8226;</span> Trendy Wear</li>
                <li className='py-3 font-semibold' > <span >&#8226;</span> Slippers</li>
                <li className='py-3 font-semibold' > <span >&#8226;</span> Sandals</li>
              </ul>

             </div>
               

         </section>
    </Fragment>
  );
};

export default Categories;