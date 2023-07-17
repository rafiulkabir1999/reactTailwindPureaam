import React from 'react';
import OneProduct from './oneproduct';

function Product(props) {
  
    const product=props.P
    //console.log("this Is product")
    //console.log(product)
    return ( 
       
           <div className='grid grid-cols-2 grid-flow-row gap-3  mx-auto 
            m-0 sm:overflow-y-auto sm:grid-cols-4 pt-0 md:gap-3  md:grid-cols-4 
             w-11/12 mx-auto md:w-[95%] xl:w-[95%] xl:grid-cols-5 xl:gap-x-4 xl:gap-y-2  xl:py-2 '>
               {product.map(e=>(
                   <OneProduct element={e}/>
               ))}
           </div>
       
     );
}

export default Product;