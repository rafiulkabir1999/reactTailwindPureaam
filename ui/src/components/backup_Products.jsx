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


function Products() {
      const item = useParams()
      const dispatch = useDispatch()
      const ProductIsLoading = useSelector(state=>state.cart.loading)
      const {Cetegory,Result} = useSelector(state => state.cart)
      const [nameSUB,setSub] = useState()
      const [c,setc] = useState()
      const SubCetegory = {
            Men:[],
            Women:[],
            Boy:[],
            Girl:[],
            Baby:[],
            All:[]
           }

      const setAllSubCetegory = () => {
            let i=0;
      Cetegory.map(e => {
          
            if(e.subcetegory === 'Men'){
                //  if(i<6) {
                       
                        SubCetegory.Men.push(e)
                  //      i++;
                 // }
                 // else return;
            }
            if(e.subcetegory==='Women'){SubCetegory.Women.push(e)}
            if(e.subcetegory==='Girl'){SubCetegory.Girl.push(e)}
            if(e.subcetegory==='Boy'){SubCetegory.Boy.push(e)}
            if(e.subcetegory==='Baby'){SubCetegory.Baby.push(e)}
            if(e.subcetegory==='All'){SubCetegory.All.push(e)}
           
      })

      

      }
      const setanotherSubCetegory = () => {
          c.hasWonProperty('')
      }
      
      setAllSubCetegory()
      setanotherSubCetegory()
      const Item = item.item
      useEffect(()=>{
            dispatch(fetchProduct(Item))
          
           },[])

      useEffect(()=>{
              findout_subcetegory(Result)
      },[Result])
        

    const findout_subcetegory = (item) =>{
        const name_Subcetegory=[]
        item.map(e=>{
            name_Subcetegory.push(e.subcetegory)
        })
        console.log("This is Name")
        console.log(name_Subcetegory)
        setSub(name_Subcetegory)
    }

    return ( 
       <div className="container mx-auto flex ">
                
                <div className="grow pt-16 mr-2 hidden   md:block">
                  <div className="flex flex-col bg-white justify-left text-left  p-2 h-screen ">

                   

                              <div onClick={()=> dispatch(fetchProduct('Watch'))}
                              className="items-center flex flex-row space-x-2 pt-2 pl-2  cursor-pointer">
                                                <img className="w-10 p-2 h-10"src="../../icon/smart-watch.png" alt="" />
                                                <span className="text-gray-600 font-medium">Watch</span>
                              </div>

                              <div onClick={()=> dispatch(fetchProduct('Cake'))}
                              className="items-center flex flex-row space-x-2 pt-2 pl-2  cursor-pointer">
                                                <img className="w-10 p-2 h-10"src="../../icon/cake.png" alt="" />
                                                <span className="text-gray-600 font-medium">Cake</span>
                              </div>
                              <div onClick={()=> dispatch(fetchProduct('Chocolate'))}
                              className="items-center flex flex-row space-x-2 pt-2 pl-2  cursor-pointer">
                                                <img className="w-10 h-10 p-2"src="../../icon/chocolate-bar.png" alt="" />
                                                <span className="text-gray-600 font-medium">Chocolate</span>
                              </div>

                              <div onClick={()=> dispatch(fetchProduct('Balloon'))}
                              className="items-center flex flex-row space-x-2 pt-2 pl-2  cursor-pointer">
                                                <img className="w-10 h-10 p-2"src="../../icon/air-balloons.png" alt="" />
                                                <span className="text-gray-600 font-medium">Balloons</span>
                              </div>
                              <div onClick={()=> dispatch(fetchProduct('Toy'))}
                              className="items-center flex flex-row space-x-2 pt-2 pl-2  cursor-pointer">
                                                <img className="w-10 p-2 h-10"src="../../icon/teddy-bear.png" alt="" />
                                                <span className="text-gray-600 font-medium">Toy</span>
                              </div>

                              <div onClick={()=> dispatch(fetchProduct('Sunglass'))}
                              className="items-center flex flex-row space-x-2 pt-2 pl-2  cursor-pointer">
                                                <img className="w-10 p-2 h-10"src="../../icon/sunglasses.png" alt="" />
                                                <span className="text-gray-600 font-medium">Sunglass</span>
                              </div>
                              <div onClick={()=> dispatch(fetchProduct('Jewelery'))}
                              className="items-center flex flex-row space-x-2 pt-2 pl-2  cursor-pointer">
                                                <img className="w-10 h-10 p-2"src="../../icon/necklace.png" alt="" />
                                                <span className="text-gray-600 font-medium">Jewelery</span>
                              </div>

                              <div onClick={()=> dispatch(fetchProduct('Electronics'))}
                              className="items-center flex flex-row space-x-2 pt-2 pl-2  cursor-pointer">
                                                <img className="w-10 h-10 p-2"src="../../icon/headphones.png" alt="" />
                                                <span className="text-gray-600 font-medium">Electronics</span>
                              </div>
                              <div onClick={()=> dispatch(fetchProduct('HomeDecoretor'))}
                              className="items-center flex flex-row space-x-2 pt-2 pl-2  cursor-pointer">
                                                <img className="w-10 h-10 p-2"src="../../icon/house-decoration.png" alt="" />
                                                <span className="text-gray-600 font-medium">Home Decoretor</span>
                              </div>



                             

                       
                  </div>

                </div>

               <div className="w-full pt-14 md:pt-14 md:w-10/12">

                   
                    { SubCetegory.All.length === 0 ? <></>  : 
                    <SixProduct cetegory={item.item} subcetegory='All' element={SubCetegory.All} />  }
                     
                   { SubCetegory.Men.length === 0 ? <><p>No Product</p></> : <SixProduct cetegory={item.item} subcetegory='Men' element={SubCetegory.Men} />}
                   { SubCetegory.Women.length === 0 ? <></> : <SixProduct cetegory={item.item} subcetegory='Women' element={SubCetegory.Women} />}
                    { SubCetegory.Boy.length === 0 ?<></>: <SixProduct cetegory={item.item} subcetegory='Boy' element={SubCetegory.Boy} />}
                   { SubCetegory.Girl.length === 0 ? <></>: <SixProduct cetegory={item.item} subcetegory='Girl' element={SubCetegory.Girl} />}
                   { SubCetegory.Baby.length === 0 ? <></>: <SixProduct cetegory={item.item} subcetegory='Baby' element={SubCetegory.Baby} />}
     
               </div>

               

              


       </div>
     );
}

export default Products;