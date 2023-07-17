import React from 'react';
import { useState } from 'react';
import OrderInCart from "./orderInCart.jsx"

function Order() {


  const [quantity,setQuantity] =useState(1);
  const [quantitySum,setQSum] =useState(10);
  const AddQuantity=()=>{
    
    setQuantity(quantity => {
         if(quantity>=10){
          return 10;
         }
         else return quantity+1;
    })
    setQSum(quantitySum=>quantitySum+10)
  }
 
  const RemoveQuantity=()=>{
    
    setQuantity(quantity => {return condition(quantity)
         
    })
    setQSum(e=>{return condition(e)})
  }

  const condition=(q)=>{
    if(q<=1){
      return 1;
     }
     else {
      if(q<=10){
        return 10;
       }
     };
  }
  
    return (
          

<div className="container mx-auto pt-24 w-full pb-24 ">
           
<div className=" flex flex-col w-full mx-auto shadow bg-white pb-4 md:w-1/3">

    <div className="flex py-2 px-6 rounded  ">
      <div className="py-2">
      <img className='w-14 h-14 border-2  p-2'src="./pureaamlogo.png" alt="" />
    </div>

<div className="flex p-2  text-gray  items-center justify-between grow">
      <p className='text-xl'>Mango Name</p>
      <p className='border p-2'>1800 TK</p>
</div>
</div>

<div className="flex-call py-2 px-6 rounded  justify-center  w-full  md:flex-row ">
<input type="text" placeholder="Name" className="outline-0 p-2 bg-gray-100 my-2 grow  rounded w-full " />
<input type="text" placeholder="Phone" className="outline-0 p-2 bg-gray-100  grow  rounded w-full " />
</div>

<div className="flex-cal px-6 rounded items-center justify-center  w-full md:1/2  md:flex-row" >
            <input type="text" placeholder="Ex:Dhaka/Kuril"className="outline-0 p-2 bg-gray-100 grow  rounded  w-full  " />

         <div className=" flex justify-center w-full  my-2 ">
            <button className="l bg-gray-200 p-2 font-bold rounded-l w-14 hover:bg-red-200" onClick={RemoveQuantity}>-</button>
            <span id='Quantity' className=" w-15 bg-green-400 p-2 font-bold text-white grow">{quantity} X 10 = {quantitySum}</span>
            <button className="ro p-2 bg-gray-200 font-bold rounded-r w-14 hover:bg-green-200" onClick={AddQuantity}>+</button>
         </div>

         

       <div className="  flex justify-between text-white rounded">
           <button className='bg-red-500 grow mr-3  p-2 rounded hover:bg-red-600'>Cancle</button>
           <button className='bg-green-500 grow ml-3 p-2 rounded hover:bg-green-600'>Confirm</button>
      </div>

</div>


</div>

 <OrderInCart/>

</div>
      
      
        
    
    );
}

export default Order;
