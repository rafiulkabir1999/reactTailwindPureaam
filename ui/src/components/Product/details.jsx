import React from 'react';

import { useNavigate, useParams } from 'react-router';
import {BsCartFill} from 'react-icons/bs'
import SingleReview from '../review/singleReview';
import {useState,useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import Review from './review';
import {Link} from 'react-router-dom'
import {addtoCart,removetoCart} from '../../reducer/cartReducer'

function PDetails() {
  
    const {id} = useParams()
    const [isAddedToCart,setAddedToCart] = useState(false)
    const [Product,setProduct] = useState({"url":'',"name":'',"price":'','cetegory':'','subcetegory':'','detailsPhoto':[]})
    const ProductDetails = useSelector(state => state.cart.Cetegory)
    const CartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    const history = useNavigate()
    //const API= 'https://api.pureaam.com'
    const API = 'http://localhost:4000/'
    useEffect(()=>{
      const find =  ProductDetails.filter(e=> e._id == id)[0]
     find && setProduct(find)
      console.log(find)
       console.log("this is find")
       console.log("ENd")
      },[ProductDetails])

      const find_in_Cart = ()=>{
        const data = CartItems.find(e => e._id === id )
        data && setAddedToCart(true)
     
      }
      useEffect(()=>{
          find_in_Cart();
      },[isAddedToCart])
       
    const [userReview,setUserReview]=useState([
        {Name:"User Unknown",Review:`The Reviews component is a composite of Comments and Rating components ready for use. 
        The Reviews Summary (Display) component provides a summary of an active or closed 
        instance of Reviews component for display elsewhere on the site`,Date:"23/12/2021",Receive:4,Ratting:4.5},
        {Name:"User Unknown",Review:`The Reviews component is a composite of Comments and Rating components ready for use. 
        The Reviews Summary (Display) component provides a summary of an active or closed 
        instance of Reviews component for display elsewhere on the site`,Date:"267/12/2021",Receive:6,Ratting:4.5},
        {Name:"User Unknown",Review:`The Reviews component is a composite of Comments and Rating components ready for use. 
        The Reviews Summary (Display) component provides a summary of an active or closed 
        instance of Reviews component for display elsewhere on the site`,Date:"23/12/2021",Receive:4,Ratting:4.5},
        {Name:"User Unknown",Review:`The Reviews component is a composite of Comments and Rating components ready for use. 
        The Reviews Summary (Display) component provides a summary of an active or closed 
        instance of Reviews component for display elsewhere on the site`,Date:"267/12/2021",Receive:6,Ratting:4.5}
     ]);

   const changeActiveImage = (url) =>{
        const Image = document.getElementById("Image")
        Image.src=url
   }

    return ( 
      
    <div className="max-w-screen-xl mx-auto md:pt-10">

    <div className="">
    <div 
   className='flex flex-col relative items-center bg-white  justify-center md:justify-between border-b-2 pb-10  md:flex-row pt-16 w-full 
             xl:space-x-6 
'>


     <div className="relative flex flex-col justify-center    mr-0    md:mx-0   ">

          <div className="w-96   xl:w-[400px]">
             <img id='Image'  src={`${API}${Product.url}`} className='w-96 h-96 p-2   mx-auto' alt="" />
             <div className="flex mt-auto  mt-5">
                      <div
                      onClick={()=>changeActiveImage(`http://localhost:4000/photo/${Product.detailsPhoto[0]}`)}
                      className=' w-1/5 h-18 rounded-full pl-2 pr-2 pt-2  flex justify-center   cursor-pointer border-white border-2  '>
                          <img className='w-14 h-14 border rounded-xl p-2' src={`http://localhost:4000/photo/${Product.detailsPhoto[0]}`} alt="" />
                      </div>

                      <div
                      onClick={()=>changeActiveImage(`http://localhost:4000/photo/${Product.detailsPhoto[1]}`)}
                      className=' w-1/5 h-18 rounded-full pl-2 pr-2 pt-2  flex justify-center   cursor-pointer border-white border-2  '>
                          <img className='w-14 h-14 border rounded-xl p-2' src={`http://localhost:4000/photo/${Product.detailsPhoto[1]}`} alt="" />
                      </div>

                      <div
                      onClick={()=>changeActiveImage(`http://localhost:4000/photo/${Product.detailsPhoto[2]}`)}
                      className=' w-1/5 h-18 rounded-full pl-2 pr-2 pt-2  flex justify-center   cursor-pointer border-white border-2  '>
                          <img className='w-14 h-14 border rounded-xl p-2' src={`http://localhost:4000/photo/${Product.detailsPhoto[2]}`} alt="" />
                      </div>

                      <div
                      onClick={()=>changeActiveImage(`http://localhost:4000/photo/${Product.detailsPhoto[3]}`)}
                      className=' w-1/5 h-18 rounded-full pl-2 pr-2 pt-2  flex justify-center   cursor-pointer border-white border-2  '>
                          <img className='w-14 h-14 border rounded-xl p-2' src={`http://localhost:4000/photo/${Product.detailsPhoto[3]}`} alt="" />
                      </div>

                      <div
                      onClick={()=>changeActiveImage(`http://localhost:4000/photo/${Product.detailsPhoto[4]}`)}
                      className=' w-1/5 h-18 rounded-full pl-2 pr-2 pt-2 flex justify-center  cursor-pointer border-white border-2  '>
                          <img className='w-14 h-14 border rounded-xl p-2' src={`http://localhost:4000/photo/${Product.detailsPhoto[4]}`} alt="" />
                      </div>
             </div>
          </div>

     
     </div>
    
    
    
    <div className=" grow w-11/12 m-0 mx-atuo  bg-white  flex-col  justify-evenly  rounded m-0  md:flex-row mt-1  ">


    <div className="flex-col justify-left xl">
          
            <Link to={`/cetegory/${Product.cetegory}`}>
            <p className='text-xs text-gray-500 text-left '>{Product.cetegory} / {Product.subcetegory}</p>
            </Link>
              <h2 className='p-2 font-bold text-blue-900 text-left text-2xl'>{Product.name}</h2>
              <h2 className='p-2 font-medium text-blue-900 text-md text-left'>{Product.price} TK</h2>
      
          
            <p className='text-left p-2 text-gray-700 text-md '>Recently, I came across an interesting problem I hadn’t encountered before. I wanted to pass more than one route parameter in a React URL route path, then access those parameters in a component upon redirect.</p>
        </div>



        <div className="flex-col   md:felx xl">

          <Review/>

        </div>

        <div className="flex    w-full space-x-4 mt-auto h-20">

                        
          
             {!isAddedToCart ?<div id='ADD_REMOVE'
                                  onClick={()=>{dispatch(addtoCart(Product));setAddedToCart(true) }} 
                                  className=' w-full cursor-pointer outline-none   text-white    font-medium   text-center  px-5 md:mt-auto xl:w-[40%] xl:px-2' >
                                                            
                                         <div   
                                                  className=' bg-blue-400 text-sm hover:bg-blue-800 text-white p-2 py-3 px-3 rounded'>
                                              <p>ADD TO CART</p>
                                        </div> 
                                               

                            </div>
										:
                              <div id='ADD_REMOVE'
                              onClick={()=>{dispatch(removetoCart(Product));setAddedToCart(false) }} 
                              className='w-full  cursor-pointer outline-none  text-white  text-center px-5 font-medium md:mt-auto xl:w-[40%]  xl:px-2' >
                                                          
                                                        
                                      <div   
                                      className='  text-sm bg-orange-600 text-white p-2 py-3 px-3 rounded   '>
                                          <p>IN YOUR CART</p>
                                      </div> 

                                </div>	}	


                                <div 
                                 
                                  onClick={()=>{dispatch(addtoCart(Product)); history('/cart') }} 
                                  className=' w-full cursor-pointer outline-none pb-  text-white    font-medium   text-center  px-5 md:mt-auto xl:w-[40%] xl:px-2' >
                                                            
                                         <div   
                                        className=' bg-blue-400  text-sm hover:bg-blue-800 text-white p-2 py-3 px-3 rounded '>
                                              <p>BUY NOW</p>
                                        </div> 
                            </div>
         


         
        </div>

        
                                         

        
    </div>
      <div className=' w-[30%] grow  h-[465px]  bg-gray-500 block  md:h-[465px] md:m-0'>
           <div className='bg-gray-200 h-[100%]'>
              <div className='px-8 py-2 bg-green-500 rounded'>hi world</div>
              <div className='px-8 py-2 bg-green-500 rounded'>hi world</div>
              <div className='px-8 py-2 bg-green-500 rounded'>hi world</div>
           </div>
        </div>
    
</div>

    </div>

    <div className="mt-10">
    <SingleReview UserReview={userReview}/>
    </div>

    </div>

            
      
     );
}

export default PDetails;