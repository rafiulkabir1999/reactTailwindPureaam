import React from 'react';
import {Link} from 'react-router-dom'
import {MdAccountCircle} from 'react-icons/md'
import {BsCartFill} from 'react-icons/bs'
import {IoMdNotifications} from 'react-icons/io'
import {AiOutlineMenu} from 'react-icons/ai'
import { useAuth0 } from '@auth0/auth0-react';
import {useDispatch, usedispatch,useSelector} from 'react-redux'
import {getCetegory} from '../reducer/productSlice'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {fetchProduct} from '../reducer/cartReducer'



function Nav() {
    const history = useNavigate()
    const cart = useSelector((state) => state.cart.total)

    const toggle=()=>{
        const location=document.getElementById("Menu");
        const Menu=document.getElementById("MenuUI");
       const Background=document.getElementById("Back");

        Background.classList.toggle("hide")
        Menu.classList.toggle("Menu")
        location.classList.toggle('open')
    }


    const cetegory = useSelector(state => state.product.cetegory)
    const dispatch = useDispatch()
    useEffect(()=>{
             dispatch(getCetegory())  
        },[history])

    


    return ( 
        //Nav 
        <div className='w-full border-b fixed z-10  shadow-sm bg-white  '>
            <nav className=" w-full max-w-screen-xl mx-auto  relative">
            <div className="flex bg-white  text-black  items-center justify-center md:justify-between">
                
                <div className="p-2 ">
                   <Link to='/'>  <img className="w-10 h-10 rounded-md"src="../pureaamlogo_big.png" alt="" /> </Link>
                </div>

                <div className="hidden  space-x-6 md:flex">
                   <Link to='/'>  <p className="p-3 bg-gray-50 font-semi rounded-md font-semibold  hover:text-orange-500 cursor-pointer md:px-6">Home</p></Link>
                    
                    
                     <Link to='/about'> <p className="p-3 font-semi rounded-full font-semibold  hover:text-orange-500 cursor-pointer">About Us</p></Link>
                     <Link to='/review'> <p className="p-3 font-semi rounded-full font-semibold hover:text-orange-500 cursor-pointer">Review</p></Link>
                     <Link to='/order'><p className="p-3 font-semi rounded-full font-semibold  hover:text-orange-500 cursor-pointer">Order</p></Link> 
                </div>

                 <div className="flex justify-end  items-center  grow md:justify-center md:grow-0">

                    <Link to='#'className='w-10 h-10 p-1  rounded-full  mx-1 text-gray-700  relative'>
                       <span className='flex items-center justify-center h-full text-xl hover:'> <IoMdNotifications/></span>
                       <span className='bg-red-500  text-sm rounded-full absolute top-2 animate-ping right-2 w-1 h-1 flex items-center justify-center p-1'></span>
                       <span className='absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full'></span>
                        </Link>

                    <Link to="/cart" className='w-10 h-10 p-1  rounded-full  mx-1  relative' >
                        <span className='flex items-center justify-center h-full text-xl text-gray-700 hover:'> <BsCartFill/> </span>
                        {cart===0 ? <span ></span>:
                        <div 
                        className='  bg-red-500  text-sm  text-white z-100 rounded-full absolute -top-1 -right-1  w-5 h-5 flex items-center justify-center  font-bold text-white '>
                             <span className='animate-ping rounded-full bg-red-500 w-4 h-4 absolute'></span>
                             {cart}
                       
                        </div>}
                      
 
                        </Link>

                    < span className='w-10 h-10 p-1 text-gray-700 rounded-full  mx-1  relative cursor-pointer' >
                            <Link to='/login'> <span  className='flex items-center justify-center h-full text-xl '>
                          <MdAccountCircle/>
                                </span></Link>
                            
                       </span >
                 </div>



                <button id="Menu"  class=" w-10 h-10 rounded-full p-1 mr-2 flex hover:bg-gray-100 justify-center items center text-green-400 text-center block md:hidden" onClick={toggle}>
                       
                       <span className='flex items-center justify-center h-full text-xl text green-400  '><AiOutlineMenu/></span>
               </button>


               
            </div>

          
             <div id="MenuUI" className="Menu z-10 in-out h-screen absolute top-0 flex  transition-transform duration-300 w-full z-100 md:hidden">
                    <div className='w-3/4 bg-white flex-col justify-center pb-3 shadow-md  height  pt-0 '> 
                     <div className='p-4 w-full  bg-green-400 text-white font-bold w-full h-14'>Gift Bazar</div>
                         <div className="flex w-full">
                       
                            <Link to='/'>  <p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">Home</p></Link>
                            <Link to='/products'><p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">Products</p></Link> 
                            <Link to='/about'> <p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">About Us</p></Link>
                            <Link to='/review'> <p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">Review</p></Link>
                            <Link to='/order'><p className="p-3 font-semi rounded-full font-semibold hover:text-green-400 cursor-pointer">Order</p></Link> 
                         </div>
                            
                              <div className='flex flex-col overflow-y-scroll h-screen'>
                    {cetegory.map(e=>{
            return(        
             
                   
                        <div onClick={()=>{history(`/cetegory/${e.cetegory}`);dispatch(fetchProduct(e.cetegory))}} className='relative flex pl-4  pb-4 items-center'>
                            <img className='w-10 h-10' src={`http://api.pureaam.com/${e.url}`}/>
                            <p className='  pl-6 text-gray-800   font-xs font-sans font-medium md:hidden xl:block'>{e.cetegory}</p>
                        </div>
                   
            )
          })}
                    </div>
                            
                            
                                                </div>

                    <div id='Back' className="bg-black opacity-60  transform-opacity duration-1000 w-2/5 bg-black" onClick={toggle}>

                    </div>

                  
                </div>
                

        </nav>

        </div>
     );
}

export
 default Nav;