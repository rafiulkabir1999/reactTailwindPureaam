import {useDispatch,useSelector} from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';
import {fetchProduct} from '../../reducer/cartReducer'
import {AiFillDownCircle,AiFillUpCircle,AiFillPlusCircle,AiFillMinusCircle,AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import Product from '../product';
import {BiLoaderAlt} from 'react-icons/bi'

function SixProduct(props) {

   
    const For = props.subcetegory
    const element =props.element
    // const dispatch = useDispatch();
    // const product = useSelector(state=>state.cart.Product)
    // const Cetegory = useSelector(state => state.cart.Cetegory)
    const ProductIsLoading = useSelector(state=>state.cart.loading)

    const [show,setshow] = useState(true)
    
 //console.log(show)

const showHide = (target) => {
  const item = document.getElementById(target) 
  item.classList.toggle('hightzero') 
  item.classList.toggle('md:hightzero')
  item.classList.toggle('opacity-0')
  item.classList.remove('setHightFull')
  

}



  const setHightScreen = (target) =>{

    const item = document.getElementById(target) 
    item.classList.toggle('setHightFull') 
   item.classList.toggle('md:setHightFull')
  // item.classList.toggle('h-auto') 
   // item.classList.toggle('md:h-auto')
 }



    return ( 
    <div  className="flex flex-col    md:bg-gray-50  m-2    ">
        
        <div  className="flex items-center bg-gray-100 justify-between p-1  text-white   rounded  md:text-green-400   md:bg-gray-100 md:py-1">
                 <div className="flex items-center  ">

                   {show === true ?    <div id={props.subcetegory + "icon"} onClick={() => {showHide(props.subcetegory) ; setshow(false)}} 
                         className=' bg-white  rounded   text-2xl   p-1 cursor-pointer text-green-600 md:p-2 md:ml-1'>

                          <span className='  text-sm text-green-800 bg-white' ><AiOutlineMinus/></span>  </div>:

                           <div 
                           id={props.subcetegory + "icon"} 
                           onClick={() => {showHide(props.subcetegory) ; setshow(true)}} 
                           className='text-white bg-yellow-400 rounded   text-2xl   p-1 cursor-pointer text-white md:p-2 md:ml-1'>
  
                            <span className='text-white  text-sm' ><AiOutlinePlus/></span>  </div>}
                        
                        <div>
                          <p className="text-left text-sm  px-3  font-700  font-sans font-bold md:p-1 md:px-3 text-gray-500"> {props.subcetegory} </p>
                      </div>
                 </div>

              

                  <div className="flex justify-center  space-x-2 items-center  ">

                      

                      <div className="text-sm px-2 flex bg-white items-center border">
                        <p className='text-gray-400 py-1 font-bold '>Total <span className=' pl-2 text-orange-400 font-bold'>{props.element.length}</span></p>
                      </div>


                      <span className="p-1 text-white md:text-orange-400 text-sm hiddedn hidden md:block">See More</span>
                      <span className="text-3xl pb-1 text-yellow-500 hover:bg-orange-500 rounded-full cursor-pointer hidden md:block" onClick={()=>setHightScreen(props.subcetegory)}><AiFillDownCircle/></span>
                  </div>
      
        </div>
      
              
            
              <div id={For} 
                  className='   overflow-hidden w-full    transition-all duration-500  ease  relative mt-0  md:h-[24rem]  '>
                      {ProductIsLoading == true?
                       <div className=" flex items-center justify-center md:h-[26rem] md:my-auto">
                        <span class=" flex  text-yellow-400 text-3xl p-4 ">
                        <div className="lds-spinner">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        

                         </div>
                      </span>
                    </div>

                        :
                   
                      <div className='bg-white'>
                        <Product P={element}/> 
                            <div className="hidden md:block">
                               <div className="flex justify-end pt-5"> 
                               <span className="p-1 text-white md:text-red-500 text-sm hiddedn hidden md:block">See Less</span>
                               <span className="text-3xl pb-1 text-red-400 bg-red-600 rounded-full cursor-pointer hidden md:block" onClick={()=>setHightScreen(props.subcetegory)}><AiFillUpCircle/></span></div>
                            </div>
                      </div> 
                   
                     
 
                      }
                     
                 </div>
                 
                
              </div>
      
     );
}

export default SixProduct;