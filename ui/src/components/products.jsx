import React, { useState } from "react";
import Product from "./product";
import {AiFillDownCircle} from 'react-icons/ai'
import {fetchProduct} from '../reducer/cartReducer'
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import SixProduct from "./Product/sixproduct";
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";
import { BsPhoneVibrate } from "react-icons/bs";
import {getCetegory} from '../reducer/productSlice'


function Products() {
      const item = useParams()
      const dispatch = useDispatch()
      const ProductIsLoading = useSelector(state=>state.cart.loading)
      const cetegoryRedux = useSelector(state=>state.product.cetegory)
      const {Cetegory,Result} = useSelector(state => state.cart)
      const [nameSUB,setSub] = useState()
      const [c,setc] = useState()
      
      const Resultarray=[]
       
       //console.log(nameSUB)
      const setanotherSubCetegory = () => {
           
              ////console.log(nameSUB,Result)
            nameSUB && nameSUB.map(e=>{
                Resultarray[e]=find_product(e)
              
              }) 
              
        
      }


    const    find_product = (subcetegory) =>{
         const serial_product = []
         Result.map(e=>{
          if( e.subcetegory===subcetegory) serial_product.push(e)
          
         })

        
          ////console.log(serial_product)
          return serial_product ;
      }
      
    
      setanotherSubCetegory()

      const Item = item.item

      useEffect(()=>{
            dispatch(fetchProduct(Item))
           },[])

      useEffect(()=>{
            Result &&  findout_subcetegory(Result)
      },[Result])
        

    const findout_subcetegory = (item) =>{
        const name_Subcetegory=[]
        item.map(e=>{
            name_Subcetegory.push(e.subcetegory)
        })
        const unique = [...new Set (name_Subcetegory)]
       // //console.log("This is Name")
        ////console.log(name_Subcetegory)
        setSub(unique)
    }

    useEffect(()=>{
      // if(cetsuccess){
           dispatch(getCetegory())  
      // }
      ////console.log(cetegoryRedux)
      //dispatch(Reset())
    // //console.log("cetegory update")
      },[])

      const [bg,setbg] = useState('navWatch')

     const  selectedItem = (button) => {
          const older = document.getElementById(bg)
          const newer = document.getElementById(button)
          older.style.backgroundColor  = 'white'
          newer.style.backgroundColor  = '#f3f4f6'
          setbg(button)
     }





    return ( 
       <div className="max-w-screen-xl mx-auto flex  pt-14 ">
                
                <div className="   border-r  hidden bg-white md:w-[140px] xl:w-[180px]  md:block">
                  <div className="flex flex-col pl-2  justify-left text-left   min-h-screen ">

                         {cetegoryRedux.map(e => {
                           
                           return(
                               <div 
                                id={"nav"+e.cetegory}  
                                onClick={()=>{selectedItem('nav'+e.cetegory); dispatch(fetchProduct(e.cetegory))}}
                                className="items-center  flex flex-row space-x-2  rounded-sm  cursor-pointer ">
                                     <img 
                                              className="w-8 h-8  xl:w-8 xl:h-8 xl:p-1  xl:m-1 "
                                              src={`http://localhost:4000/${e.url}`} alt="" />
                                      
                                    <span className="text-gray-600 font-medium text-sm  xl:block xl:px-2">{e.cetegory}</span>
                              </div>
                           )
                         })

                         }
                             

                  </div>

                </div>

               <div className="w-full  bg-white md:w-10/12  md:grow">

                   
                 
                        { 
                            nameSUB && nameSUB.map( e =>{
                                return(<SixProduct cetegory={item.item} subcetegory={e} element={Resultarray[e]}/>)
                              })

                          
                          }
                
               
     
               </div>

                 


       </div>
     );
}

export default Products;