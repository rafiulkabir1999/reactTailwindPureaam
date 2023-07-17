import { Link} from 'react-router-dom'
import {useDispatch, usedispatch,useSelector} from 'react-redux'
import {getCetegory} from '../../reducer/productSlice'
import {useEffect} from 'react'
import {FiMonitor} from 'react-icons/fi'
import {RiTShirt2Line} from 'react-icons/ri'
import {GiLipstick} from 'react-icons/gi'
import { AiOutlineStar} from 'react-icons/ai'

function Box() {

    const {cetegory,cetloading} = useSelector(state => state.product)
    const dispatch = useDispatch()
    useEffect(()=>{
        // if(cetsuccess){
             dispatch(getCetegory())  
        // }
        //dispatch(Reset())
       //console.log("cetegory update")
        },[])
      const API='http://api.pureaam.com'
      const localhost ='http://localhost:4000'
    return (
       <div className="grow ">
                
    
          


                
         {cetloading ?   <div className=" flex items-center justify-center md:h-[26rem] md:my-auto">
                        <span class=" flex items-center mx-auto  text-yellow-400 text-3xl p-4 ">
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
                    </div>  :
             
           
                 


                    <div class="grow grid grid-cols-4 col-span-4 px-5  mx-auto pt-5 md:grid-cols-7 xl:grid-cols-9  gap-2 md:gap-1   rounded-md  ">

                      {cetegory.map(e=>{
                        return(        
                          <Link to={`cetegory/${e.cetegory}`}> 
                                <div className="w-42 h-42  glass border text-white rounded-xl xl:rounded-none
                                  cursor-pointer relative flex  justify-center md:h-40 p-3  md:px-5 md:py-5
                                  bg-white hover:shadow-md md:rounded-md  hover:bg-orange-300 ">
                                    <div className='relative'>
                                        <img className='w-14 h-14 md:w-20 md:h-20 ' src={`${localhost}/${e.url}`}/>
                                        <p className=' text-gray-800 pt-1 font-medium  md:block font-semibold   text-xs md:text-base'>{e.cetegory}</p>
                                    </div>
                                </div>
                          </Link>)
                      })}

                      </div>
                
            
            }
            
       </div>
      );
}

export default Box;
