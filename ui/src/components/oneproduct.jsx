import React from 'react';
import {AiOutlineStar,AiFillStar,AiFillPlusCircle,AiFillDelete,AiFillHeart} from 'react-icons/ai'
import {FaStarHalfAlt} from 'react-icons/fa'
import {BsCartFill,BsCartXFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { removetoCart,addtoCart, decrement, increment } from '../reducer/cartReducer'
import { useState } from 'react';
import { useEffect } from 'react';



function Onepro(props) {

    const dispatch = useDispatch()
   
    const [icon,seticon] = useState(false)
	const find_in_cart = useSelector(state => state.cart.items)
	
    const pro= props.element
 
	const find_Cart = () => {
		const data=find_in_cart.find(e => e._id === pro._id )
	    data && seticon(true)
		console.log("test")
	}
	
	useEffect(()=>{
	find_Cart()
	},[icon])
  
    const hideproduct = (item) =>{
        document.getElementById(item).style.display='none'
    }
    return ( 

   <div id={pro._id} className="max-w-2xl mx-auto hover:shadow-md mb-5 ">


	<div className="bg-white   max-w-sm  mt-2 ">
	
       <div className="shadow rounded">
	   <Link to={`/productdetails/${pro._id}`}> 
                         <div className="flex justify-center">
						 <img className="rounded-t-lg pt-3 h-[220px]" src={`http://localhost:4000/${pro.url}`} alt="product image"/>
						 </div>
         </Link>
			
        
			<div className="xl:mx">
				<a href="#">
					<h3 className="text-gray-900 font-bold text-md tracking-tight text-center pb-2">{pro.name}</h3>
					<p className='text-xs p-0 space-y-0 	
					      leading-3 px-2 pb-3 text-gray-400 text-center	'>
							this product is beautifull you can use this product very undoutedly
							</p>
				</a>


				<div className="flex items-center  mb-2  justify-center">
					<svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
				</div>


				<div className="flex   justify-around pb-4">
					<p className='line-through font-medium decoration-gray-500'>511 TK</p>
					<span className="text-sm font-bold text-gray-600 ">  {pro.price} TK</span> 
			   </div>
			   
				
	       </div>
					
                   
			
			</div> 
			
			{/* {!icon ?<div id='ADD_REMOVE'
			        onClick={()=>{dispatch(addtoCart(pro));seticon(true) }} 
					className=' cursor-pointer outline-none pb-6  text-white    font-medium   text-center  px-5 xl:px-2' >
                                        
                                        <div   className=' bg-button-product text-sm hover:text-orange-400 font-bold text-white p-2 px-4 '>
										    <p>ADD TO CART</p>
										</div> 
                                               

                 </div>
										:
			    <div id='ADD_REMOVE'onClick={()=>{dispatch(removetoCart(pro));seticon(false) }} 
				className=' cursor-pointer outline-none pb-6  text-white  text-center px-5 font-medium  xl:px-2' >
                                        
                                      
										<div   className='  text-sm bg-orange-500 text-white p-2 px-4 xl:px  '>
										    <p>IN YOUR CART</p>
										</div> 

               </div>	}						 */}


	</div>

</div>

          
     );
}

export default Onepro;