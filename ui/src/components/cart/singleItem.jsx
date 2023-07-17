import React from "react";
import {useDispatch} from 'react-redux'
import {removetoCart,addQuantity,removeQuantity} from '../../reducer/cartReducer'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";



function SingleItem(props) {
    const [quantity,setQuantity] = useState(1)
    const dispatch=useDispatch();
    const Item=props.item;
    useEffect(() => {
        //setQuantity
    })
    return ( 
                          
        <tr className="flex   w-full  justify-between  md:">
        <td class="p-0 md:p-2 flex w-36 items-center md:w-96">
            <Link to={`/productdetails/${Item._id}`}>
                 <img className='w-12 h-12 md:w-24 md:h-24' src={`http://localhost:4000/` + Item.url}  alt="" />
            </Link>
            <div class=" py-3 font-medium text-gray-800 text-left flex flex-col h-full  cursor-pointer justify-between pl-2 md:pl-2 md:py-4">
                {Item.name}
                <p className="text-gray-400 text-xs"> {Item.price} tk</p>
                <p onClick={()=>dispatch(removetoCart(Item))} className="text-red-400 hover:text-red-500">Remove</p>
            </div>
          
        </td>
      
        <td class="p-2 flex items-center px-0  w-20 md:w-38  ">
            <div className="border flex ">
                    <button onClick={()=> dispatch(removeQuantity(Item))}  className="p-1 font-bold bg-gray-100 md:p-2">
                        <p className="font-bold text-xl cursor-pointer "> <AiOutlineMinus/></p>
                        </button>

                    <div 
                    className=" flex text-center justify-center items-center border-l border-r w-6 p-1 font-bold md:w-10">
                        {Item.quantity}
                    </div>
                    
                    <button  
                    onClick={()=>{dispatch(addQuantity(Item)); 
                        setQuantity(quantity =>{if(quantity < 10)return quantity + 1 ; else return quantity})}} 
                    className="p-1 font-bold bg-gray-100 md:p-2">
                        <p className="font-bold text-xl cursor-pointer "> <AiOutlinePlus/></p>
                        </button>
            </div>
        </td>
        <td class="p-0 flex items-center md:p-2 w-10 md:w-24">
            
            <div class=" font-medium text-gray-500 flex items-center">
               
                <span> {Item.price * Item.quantity}</span> 
               
            </div>
        </td>

   
    </tr>
     );
}

export default SingleItem;