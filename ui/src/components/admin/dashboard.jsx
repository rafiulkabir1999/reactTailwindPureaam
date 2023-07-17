import { useState,useEffect } from 'react'
import {useRef} from 'react'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { UploadFile } from '../../reducer/productSlice'
import {BiLoaderAlt} from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify';
import { Reset } from '../../reducer/productSlice'
import Available from './available'
import { Navigate, useNavigate } from 'react-router-dom'
import CreateCetegory from './CreateCetegory'
import ProfileComponent from '../profile/Profilecomponent'
import {getCetegory} from '../../reducer/productSlice'
import ReturnSubC from './ReturnSubC'
import UploadProduct from './uploadProduct'
import UpdateProduct from './updateProduct'
import NewPost from './Newpost'

function Dashboard() {
   
    const [img,setImage] = useState({fileurl:"./images.png"})
    const [isNameValid,setNameValid] = useState()
    const [isFileValid,setFileValid] = useState()
    const [findText,setfindText] = useState()
    const [isDetailsValid,setDetailsValid] = useState()
    const [detailsPhoto,setDetailsPhoto] = useState([])
    const [url,seturl] = useState()
    const [subc,setsubc] =useState('Watch')
    //const [arr,setarr] = useState([])


    const {loading, success , error,cetegory,iscreated,cetegoryDelete} = useSelector(state => state.product)
    const [option,setoption] = useState(['this'])
  
   

      useEffect(()=>{
        const data =  cetegory.find(e=> e.cetegory === subc)
        //console.log("Data")
       // //console.log(data)
       if(data){
        setoption(data.subcetegory)
       }
  
       //console.log(option)

      })


   const [view,setView] = useState('cetegory')
   const history = useNavigate()
   const {name,phone,Type} = useSelector(state => state.login.user)
   
   const logout =()=>{
       localStorage.removeItem('user')
       history('/login')
   }

    return ( 
    
        <div className="container  mx-auto">
            <div className="flex bg-yellow pt-14"> 
           
                    <div className="w-80  "> 
                    <h3 className='font-bold pt-5 text-3xl bg-gray-500'>Dashboard</h3>
                            <div class="container mx-auto bg-gray-500 ">
                    

                                            <div class=" relative flex flex-col  rounded-lg  mx-auto h-[90vh] ">
                                                 
                                                 <div className='py-4'>
                                                        <h1 class="font-bold text-left px-4 text-xl text-gray-900">Name :{name ? name : "Name" }</h1>
                                                        <p class=" text-sm text-left px-4 text-gray-900 font-bold text-xl">Phone :{phone ? phone : "Phone" }</p>
                                                 </div>
                                                
                                                <div class="">
                                                   
                                                   
                                                    <div className='text-bold text-xl text-left font-bold px-5 my-5'>
                                                     Management
                                                    </div>

                                                    <div class="flex  flex-col text-left my-3 px-10 font-bold">
                                                        <div 
                                                                        onClick={()=>{setView('cetegory')}}
                                                                        className="text-white  hover:bg-gray-400 px-2 py-1 cursor-pointer">Cetegory
                                                        </div>

                                                        <div 
                                                        onClick={()=>{setView('dashboard')}}
                                                        className="text-white hover:bg-gray-400 px-2 py-1 cursor-pointer">New Product
                                                        </div>


                                                        <div 
                                                          onClick={()=>{setView('update')}}
                                                        className="text-white hover:bg-gray-400 px-2 py-1 cursor-pointer">Update</div>

<div 
                                                          onClick={()=>{setView('newpost')}}
                                                        className="text-white hover:bg-gray-400 px-2 py-1 cursor-pointer">New Post</div>


                                                        <div 
                                                        className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</div>
                                                    </div>

                                                   

                                                         
                                                  
                                                </div> 

                                                <div  class="mt-auto w-full border-t b border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block bg-gray-100 transition  duration-150 overflow-hidden">
                                                                
                                                                <button onClick={logout} className='p-2 px-4 border bg-white text-gray-600'>Log Out</button>
                                                                
                                                 </div>
                                            </div>

                                        
                                    </div>

                    </div>

            {(()=>{
                if (view == 'cetegory') {
                    return(
                    <div  className=" flex  w-full ">
                    <CreateCetegory/>
                    </div>
                 )}

                else if ( view == 'dashboard') {return (
                    
                     <div className='flex w-full'>
                         <UploadProduct/>
                     </div>
                     )}

                else if ( view == 'update') {return (
                    <div className="flex w-full">
                         <UpdateProduct/>
                    </div>
                       )}

                       else if ( view == 'newpost') {return (
                        <div className="flex w-full">
                             <NewPost/>
                        </div>
                           )}
            })()}


            </div>
        </div>
       
     )
        }

export default Dashboard;