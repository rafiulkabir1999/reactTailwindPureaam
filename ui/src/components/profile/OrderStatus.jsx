import React from 'react'
import OrderReceive from './OrderReceive'

import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
import { useState } from 'react';


export default function OrderStatus(props) {


 const showReview = () => {
    
    const show = document.getElementById(props.item)
    show.style.display='block'
    show.style.height='auto'
    
 }
 const [icon,seticon]=useState(
    [
        <AiOutlineStar/>,
        <AiOutlineStar/>,
        <AiOutlineStar/>,
        <AiOutlineStar/>,
        <AiOutlineStar/>
    ]
);


 const  submit = () =>{
       const popup = document.getElementById(props.item)
      const Block =  document.getElementById(props.item)
      Block.style.display='none'
      Block.style.hight='0px'
       document.getElementById(props.item + 'receive').classList.add('bg-gray-300' ,'hover:bg-gray-300')
       popup.style.height='0px';
       popup.style.display='none'
  }    


  return (


<article  className="w-1/4 relative block p-6 text-center shadow-xl bg-gray-50 rounded-xl z-0 h-96">
                        <div  className='absolute z-50 bg-white top-0 left-0'>
                            
                                    <section id={props.item} class="shadow-2xl h-96 hidden">
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
                                    onClick={submit}
                                    class="inline-block w-full py-3 mt-6 text-sm font-bold text-white bg-pink-600 rounded shadow-xl"  >
                                    Submit
                                    </button>
                    </div>
</section>
     </div>
      <h5 className="text-3xl font-bold text-blue-600">Order Id</h5>

      <h6 className="mt-1 text-sm text-gray-900">Perfect for Small Businesses</h6>

  <div className="mt-4 text-gray-900">
        <h6>
        <span className="text-2xl">$</span>
        <span className="inline text-5xl font-bold">9</span>
    
        </h6>


  </div>

  <ul className="mt-8 space-y-2.5 text-gray-900">
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline w-6 h-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>

      Free Updates to the Hub
    </li>




    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline w-6 h-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>

      New & Additional Features
    </li>

    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline w-6 h-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>

                    Customisable Admin UI
    </li>
  </ul>

  <button
   id={props.item+"receive"}
    className="inline-block px-8 py-3 mt-8 text-sm font-medium text-white bg-blue-600 rounded transition hover:bg-blue-700 hover:shadow-xl active:bg-blue-500 focus:outline-none focus:ring"
   onClick={showReview}
  >
   Receive
  </button>



</article>

  )
}
