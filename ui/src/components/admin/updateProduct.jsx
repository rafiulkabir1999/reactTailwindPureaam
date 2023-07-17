import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {fetch_product_search } from '../../reducer/cartReducer'
import { updateProduct } from '../../reducer/productSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {toast} from 'react-toastify'
import {Reset } from '../../reducer/cartReducer'


export default function UpdateProduct() {



const search = useRef();
const dispatch = useDispatch()
const { searchProduct , searchProductrejected} = useSelector( state => state.cart)
const {cetegory} = useSelector(state=> state.product)

const [searchedItem,setSearchedItem] = useState(null)

//for sowing reject sms after not founding product in search update section
const showRejectedMessage = () => toast("No product found")
useEffect(()=>{
  searchProductrejected && showRejectedMessage()
  dispatch(Reset())
})

const search_product = (e) => {
    e.preventDefault();
  //calling api for search product
 dispatch( fetch_product_search(search.current.value)).then(res=>{
// set the intial state for products after calling api
  setSearchedItem(res.payload)
  
 
})

}  

// handle change function take the input form input field and set it in useState hook
const handleChange = (e,index) => {

  setSearchedItem(state => {
    return{
      ...state,
      [index] : {
        ...state[index],
        [e.target.name]:[e.target.value]
      }
    }
  })
   console.log(e.target.value)
}
 
    
const handleSubmit = (update) => {
  // const data = {
  //   name : update.name[0],
  //   price: update.price[0],
  //   cetegory:update.cetegory[0],
  //   subcetegory: update.subcetegory[0]
  // }
  console.log(update)
 dispatch(updateProduct(update))
}
  

 

 
  return (
  <div className="mt-10  ml-10 ">
    <form action="post"
    className='text-left' onSubmit={search_product}>
        <input type="text" className='p-2 outline-none bg-gray-100' ref={search} />
        <button type='submit' className='p-2 bg-green-600 px-4 text-white'>Search</button>
    </form>

    
    
   
    
    <div className='pt-6 rounded grid grid-cols-4 gap-4 '>

   

      { searchedItem  && searchProduct.map((e,index) => {
           return  <div
           id={index}
           className='shadow border p-4'>
              <img className='mx-auto h-40' src={"http://localhost:4000/" + e.url} alt="" />
              <div className='flex flex-col'>

               <label
               className='text-left  font-bold text-md'
               htmlFor="">Name</label>


               <input
               name='name'
               onChange={(event)=>handleChange(event,index)}
               className=' outline-none border-b mb-2 '
               type="text" 
               value={searchedItem[index].name || "" } />  
               
                

               <label
               className='text-left  font-bold text-md'
               htmlFor="">Cetegory</label>

              
                    <div>
                                    <select
                                    name='cetegroy'
                                    onChange={(event)=>handleChange(event,index)}
                                    
                                    >
                                      {cetegory.map(e => {
                                        return <option value={e.cetegory}>{e.cetegory}</option>
                                      })}
                                    </select>
                                  </div>

               <label
               className='text-left  font-bold text-md'
               htmlFor="">Cetegory</label>

               <input
               name='subcetegory'
                onChange={(event)=>handleChange(event,index)}
               className=' outline-none border-b  mb-2 m'
               type="text" value={searchedItem[index].subcetegory || ""} />  

               
               
               <label
               className='text-left  font-bold text-md'
               htmlFor="">Price</label>

               <input
               name='price'
               type='number'
                  onChange={(event)=>handleChange(event,index)}
               className=' outline-none border-b mb-2 '
                value={searchedItem[index].price || ""}/>  
               
               
               

              
              </div>

              <div>

                      <button 
                      onClick={()=>handleSubmit(searchedItem[index])}
                      className='bg-red-500 p-2 m-2 text-white px-6 rounded hover:bg-red-600'>Delete</button>


                      <button 
                      onClick={()=>handleSubmit(searchedItem[index])}
                      className='bg-blue-500 p-2 m-2 text-white px-6 rounded'>Modify</button>

              </div>
           
              
           
      </div>} )
        
  
      
      
      }
     
    

  </div>
  </div>
  )
}
