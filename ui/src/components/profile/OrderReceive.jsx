import React from 'react'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
import { useState } from 'react';

export default function OrderReceive() {

const [icon,seticon]=useState(
    [
        <AiOutlineStar/>,
        <AiOutlineStar/>,
        <AiOutlineStar/>,
        <AiOutlineStar/>,
        <AiOutlineStar/>
    ]
);


 const  hidePopup = () =>{
       const popup = document.getElementById('popup')
       popup.style.height='0px';
       popup.style.display='none'
  }    


  return (
    <section id='popup' class="shadow-2xl h-96 ">
  <div className="p-2 text-center sm:p-8"> 
  <h5 className="mt-2 text-xl font-bold pb-4">Thanks for your purchase !</h5>
     <textarea
     className='bg-gray-50 p-2 border '
      name="" id="" cols="30" rows="5"  placeholder='Please review our service'></textarea>
   
   
    <p  
     id="star"             
     className="py-2 mt-2  bg-gray-50 border  flex space-x-2 items-center justify-center font-semibold tracking-widest text-yellow-500 text-2xl uppercase ">
       <span id='1' 
       onClick={()=>{seticon([<AiFillStar/>, <AiOutlineStar/>, <AiOutlineStar/>, <AiOutlineStar/>, <AiOutlineStar/>])}} 
       className='hover:text-orange-500 cursor-pointer'>{icon[0]}</span> 
       <span id='2' 
       onClick={()=>{seticon([<AiFillStar/>, <AiFillStar/>, <AiOutlineStar/>, <AiOutlineStar/>, <AiOutlineStar/>])}} 
       className='hover:text-orange-500 cursor-pointer'>{icon[1]}</span> 
       <span id='3' 
       onClick={()=>{seticon([<AiFillStar/>, <AiFillStar/>,<AiFillStar/>, <AiOutlineStar/>, <AiOutlineStar/>])}} 
       className='hover:text-orange-500 cursor-pointer'>{icon[2]}</span> 
       <span id='4' 
       onClick={()=>{seticon([<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiOutlineStar/>])}} 
       className='hover:text-orange-500 cursor-pointer'>{icon[3]}</span> 
       <span id='5' 
       onClick={()=>{seticon([<AiFillStar/>, <AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>])}} 
       className='hover:text-orange-500 cursor-pointer'>{icon[4]}</span> 

        
    </p>

   

    <button 
    onClick={hidePopup}
    class="inline-block w-full py-3 mt-6 text-sm font-bold text-white bg-pink-600 rounded shadow-xl"  >
      Submit
    </button>
  </div>
</section>

  )
}
