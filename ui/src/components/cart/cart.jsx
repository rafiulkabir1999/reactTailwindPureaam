import {useDispatch, useSelector} from 'react-redux'
import React, { useRef } from 'react';
import Item from './item';
import {useAuth0} from '@auth0/auth0-react' 
import {Navigate} from 'react-router-dom'
import {Order} from '../../reducer/cartReducer'
import { useState } from 'react';

function Cart() {
   
   const Dist = useRef() 
   const upozila = useRef()
   const Home = useRef()
    const dispatch = useDispatch()
    const [payment,paymentWay] = useState()
    const CartItem=useSelector(state=>state.cart.items)
    const [address,setAddress] = useState({dist:'',upozila:''})
    const total=()=>{
        //const T=CartItem.map(e=>e.price)
        let result=0;
        for(let i of CartItem){
         result=parseInt(i.price)*i.quantity + result 
        }
        return result;
       
    }
   
   const confirmOrder = (e) => {
       e.preventDefault()
      const O = {
        'name':'', 
        'phone':'',
        'dist' : Dist.current.value,
        'upozila' : address.upozila,
        'home':Home.current.value,
        'order' : CartItem,
        'payment':payment
      }
      //setOrder(order)
     // alert(paymentMethod.current.value)
       dispatch(Order(O))
     // console.log(order)
   }
  
  // const SetAddress = e => {
  //      setAddress({e.target.})
  // }

   const setPayment = e =>{
    paymentWay(e.target.value)
    
   }

    return ( 
      <div className=''>
     
     <section className=" pt-14  text-gray-600  md:px-4" x-data="app">
     <div className="md:pt-10  ">
         
         <div className="w-full max-w-screen-xl mx-auto bg-white  rounded  ">
            
 
             <div className="overflow-x-auto pl-3  relative flex flex-col md:flex-row ">
                 <div className="flex flex-col w-full md:w-3/4 md:px-6">

             

                 <div className="hidden justify-between  md:flex  md:pt-3">
                  <p className=" w-36 items-center font-medium text-gray-600  p-2 text-left  md:w-96">Product Details</p>
                  <p className="w-28 text-center py-2  font-medium text-gray-600   md:w-38">Quantity</p>
                  <p className="w-10  text-left py-2 font-medium text-gray-600   md:w-24">Total Price</p>
                 </div>

                    <table className="table-auto w-full border-0  ">
                
                     <Item details={CartItem}/>  
                    

                    </table>  
                 </div>






                 <form onSubmit={confirmOrder} className="flex flex-col shadow-md  bg-gray-50 w-full  md:px-6  md:w-1/4">
                    <h2 className='text-xl text-gray-600 border-b-2 text-left p-2 py-4 font-medium '>Order Summery</h2>
                   
                    <input 
                     onChange={(e)=>setAddress({dist : Dist.current.value})}
                    ref={Dist}
                      className='p-2 font-medium text-gray-600 mt-4 outline-none' placeholder='District' name="dist"   id="" required>
                       
                    </input>

                   
                    <input
                    onChange={(e)=>setAddress({upozila : upozila.current.value})}
                    className='p-2 text-gray-600 font-medium mt-4 outline-none ' ref={upozila} name="upozila" id=""placeholder='Upozila' required>
                       
                      
                    </input>

                    <textarea 
                             ref={Home}
                             className='mt-4 outline-none p-2' name="" id="" cols="10" rows="5" 
                              placeholder='Home Address :' required>

                    </textarea>

      <h2 className='text-left font-medium mt-4'>Payment Method</h2>              
    <div className="flex w-full space-x-6 p-2">
      <input 
          onChange={setPayment}
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio" 
          name="paymentMethod"   
          id="Bkash"
          value='Bkash'
       required  />
      <label className="form-check-label cursor-pointer inline-block text-gray-800" for="Bkash">
       Bkash
      </label>
    </div>


    <div className="flex w-full space-x-6 p-2">
      <input 
       onChange = {setPayment}
      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
      type="radio" 
      name="paymentMethod" 
      id="Nogod"
      value='Nogod' />
      <label className="form-check-label cursor-pointer inline-block text-gray-800" for="Nogod">
        Nogod
      </label>
    </div>


    <div className="flex w-full space-x-6 p-2">
      <input 
       onChange={ setPayment}
       className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
       type="radio"
        name="paymentMethod" 
        id="Rocket"
        value='Rocket'
        />
      <label className="form-check-label cursor-pointer inline-block text-gray-800" for="Rocket">
        Rocket
      </label>
    </div>

    <div className="flex w-full space-x-6 p-2">
      <input 
       onChange={ setPayment}
      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
       type="radio" 
       name="paymentMethod" 
       id="Cash"
       value='Cash'
       />
      <label className="form-check-label cursor-pointer inline-block text-gray-800" for="Cash">
       Cash on Delivery
      </label>
    </div>

                    <div className="flex w-full flex-col mt-auto p-4 font-medium  text-xl border-t items-center  border-gray-100  ">
                                        
                                         <div className="flex w-full py-4 text-md text-gray-600 justify-between">
                                             <div className='text-md'>Total</div>
                                         <div x-text="total.toFixed(2)">
                                         {total()} TK</div> 
                                          </div>
                     <button 
                           
                            type='submit' 
                           className="bg-blue-600 text-white  py-1 w-full hover:bg-blue-700">Confirm Order
                    </button>
                     </div>

                 </form>
                 
                      
             </div>
 
           
 
 
 
             
         </div>
     </div>
    </section> 


</div>
      
     );
}

export default Cart;