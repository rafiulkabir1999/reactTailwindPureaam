import React from 'react'
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

export default function UploadProduct() {

    const [img,setImage] = useState({fileurl:"./images.png"})
    const [isNameValid,setNameValid] = useState()
    const [isFileValid,setFileValid] = useState()
    const [findText,setfindText] = useState()
    const [isDetailsValid,setDetailsValid] = useState()
    const [detailsPhoto,setDetailsPhoto] = useState([])
    const [url,seturl] = useState()
    const [subc,setsubc] =useState('Watch')
    //const [arr,setarr] = useState([])

    const history = useNavigate()
    const Name=useRef()
    const price=useRef()
    const details = useRef()
    const cetegoryINPUT=useRef()
    const SubCetegory=useRef()
    const dispatch = useDispatch()
    const fileImage = new FormData();

    

    const {loading, success , error,cetegory,iscreated,cetegoryDelete} = useSelector(state => state.product)
    const [option,setoption] = useState(['this'])
   useEffect(()=>{ 
    if(success){
        toast.success('product uploaded', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        //console.log("called")
        history('/')
        setImage({fileurl:"./images.png",file:''})
        setDetailsPhoto(null)
       }

    if(iscreated){
      toast.success('Cetegory Created Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    if(cetegoryDelete){
      toast.success('Cetegory Deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    if(error){
        //console.log("Uploading Failed")
    }
       dispatch(Reset())
      

   },[success,error,loading,dispatch,iscreated,cetegoryDelete])
  
   const setMultipleFile = (e)=> {
    const firstimg = document.getElementById('details1')
    const secondimg = document.getElementById('details2')
    const thirdimg = document.getElementById('details3')
    const fourimg = document.getElementById('details4')
    const fiveimg =document.getElementById('details5')

    firstimg.src=URL.createObjectURL(e.target.files[0])
    secondimg.src=URL.createObjectURL(e.target.files[1])
    thirdimg.src=URL.createObjectURL(e.target.files[2])
    fourimg.src=URL.createObjectURL(e.target.files[3])
    fiveimg.src=URL.createObjectURL(e.target.files[4])

         setDetailsPhoto(e.target.files) 
      
      }
   
    const onSubmit = (e) => {
    e.preventDefault();
         fileImage.append('filename',img.file) 
         fileImage.append("name",Name.current.value)
         fileImage.append("price",price.current.value)  
         fileImage.append("cetegory",cetegoryINPUT.current.value)
         fileImage.append("subcetegory",SubCetegory.current.value) 
         for (const key of Object.keys(detailsPhoto)) {
          fileImage.append('detailsPhoto', detailsPhoto[key])
         }
  
         console.log(Name.current.value.length)
         const Rejex =/^[a-zA-Z0-9 ]+$/
        

        
       if(detailsPhoto.length<4){
          //document.getElementById('nameId').classList.add('border-red-400')
          setFileValid({'errorMessage':'must have to select 4 files'})
         // alert('hi')
        }
       else if((Name.current.value.length) > 20){
         document.getElementById('nameId').classList.add('border-red-400')
         setNameValid({'errorMessage':'name must be less then 15 charecter'})
        // alert('hi')
       }
       else if(details.current.value.length <50 || details.current.value.length > 150){
        document.getElementById('w3review').classList.add('border-red-400','border-2')
        setDetailsValid({'errorMessage':'details text must more than 50 and less than 125 '})
       // alert('hi')
      }
      else if(!Rejex.test(Name.current.value)){
        document.getElementById('nameId').classList.add('border-red-400')
        setNameValid({'errorMessage':'only use a-z '})
       // alert('hi')
      }
       else { 
        img.file && detailsPhoto && dispatch(UploadFile(fileImage))
        document.getElementById('nameId').classList.remove('border-red-400')
        setNameValid(null)
        setFileValid(null)
      }

      
        //dispatch(UploadFile(info))
       

    }

    const openFile =() => {
        const File = document.getElementById('file')
        File.click();
    }

     const handleChangeImage = e => {
        setImage({fileurl: URL.createObjectURL(e.target.files[0]),file:e.target.files[0]})
        ////console.log(e.target.files[0].name)

        const lastDot = e.target.files[0].name.lastIndexOf('.');
        const fileName = e.target.files[0].name.substring(0, lastDot);
        const ext = e.target.files[0].name.substring(lastDot + 1);
        const ImgNameUrl = fileName.toLowerCase().split(" ").join("_")
         seturl(ImgNameUrl)
        //seturl(e.target.files[0].name)
      }
      
      
    //setTimeout(function(){document.getElementById('notification').style.display='none'},5000)

    const changeIMG =() =>{
           document.getElementById("img").src=img.fileurl
           //console.log(img.file)
          // fileImage.append('filename',img.file) 
           
           
    }
    

    const findtextleft = (e) => {
      if(parseInt(e.target.value.length) > 0){
        const leftword = 150 - parseInt(e.target.value.length)
        setfindText(leftword)
      }
     
      // console.log(e.target.value)
      // console.log(typeof(e.target.value))
      // console.log(findText)
    }
//    setTimeout(()=>{
//     document.getElementById('notification').style.display='none'
//    },10000)

      useEffect(()=>{
          changeIMG();  
      }, [img])


      useEffect(()=>{
        const data =  cetegory.find(e=> e.cetegory === subc)
        //console.log("Data")
       // //console.log(data)
       if(data){
        setoption(data.subcetegory)
       }
  
       //console.log(option)

      })

      
      const onchangeHandeler = () => {
          //setsubc(e.current.value)
          setsubc(cetegoryINPUT.current.value)
        //alert("changed")
      }
  return (
    
    <div  className=" flex m-4 p-4  ">
    <form onSubmit={onSubmit} enctype="multipart/form-data" className='flex bg-white  p-4 pt-5 w-full space-x-6 border max-h-[500px] '>
       <div className="flex flex-col   ">
                             
                           <img 
                               onClick={()=>openFile()}  
                               id='img'
                               src=''
                               className='w-72 h-72 cursor-pointer m-2 mx-auto' alt=""  />

                 
                           
                               <input 
                               type='file'
                           
                               accept="image/*"
                               onChange={handleChangeImage}
                               id='file' 
                               
                               className="p-2 hidden" 
                             
                               />


                             <div className="flex flex-col m-2">
                             <input 
                                     type="file" 
                                     name='detaisPhoto' 
                                     onChange={setMultipleFile} multiple 
                                     accept='image/*'
                                     className='border-none'
                                     required />
                               { isFileValid != null ? <span className='text-red-500 p-1 text-left font-medium text-sm'>{isFileValid.errorMessage}</span>:<></>}  
                             </div>

                               <div className="flex py-2 space-x-4 m-2">
                                   <img className='w-14 h-14 bg-red-200 border-2 rounded-md' id='details1' src='./images.png' alt="" />
                                   <img className='w-14 h-14 bg-red-200 border-2 rounded-md' id='details2' src='./images.png' alt="" />
                                   <img className='w-14 h-14 bg-red-200 border-2 rounded-md' id='details3' src='./images.png' alt="" />
                                   <img className='w-14 h-14 bg-red-200 border-2 rounded-md' id='details4' src='./images.png' alt="" />
                                   <img className='w-14 h-14 bg-red-200 border-2 rounded-md' id='details5' src='./images.png' alt="" />
                               </div>
       </div>


        <div className="flex flex-col shadow border p-4 grow overflow-y-scroll ">
                     <div className=" p-2 flex flex-col">
                               <input 
                                       ref={Name}  
                                       id='nameId' 
                                       className='outline-none border-2   rounded p-2 ' 
                                       type="text" 
                                       placeholder="Product Name/Model"
                                       required />

                           { isNameValid != null ? <span className='text-red-500 p-1 text-left font-medium text-sm'>{isNameValid.errorMessage}</span>:<></>}  
                       </div>
                       
                       <select 
                               ref={cetegoryINPUT}  
                               onChange={onchangeHandeler} 
                               name="0" id="" 
                               className=' outline-none  m-2 rounded p-2 bg-gray-100 font-medium text-gray-600 ' 
                               required>
                             
                             {cetegory.map(e => {return(<option>{e.cetegory}</option>)})}

                         </select>

                         <select 
                               ref={SubCetegory} 
                               name="0" 
                               id="" 
                               className=' m-2 rounded p-2 text-gray-600 font-medium bg-gray-100'
                                 required>
                             
                           {option.map(e => {return (<option>{e}</option>)})}

                         </select>


                       <input 
                             ref={price}  
                             className='outline-none border-2 m-2 rounded p-2' 
                             type="number" 
                             placeholder="Price" 
                             required/>

                         <div className="m-2 flex flex-col relative">
                                       <textarea
                                             onChange={findtextleft} 
                                             ref={details}
                                             id="w3review" 
                                             name="w3review" 
                                             rows="5" 
                                             cols="" 
                                             className='bg-gray-100 p-2  rounded text-black' 
                                             placeholder='Product detais here'>
                                       
                                       </textarea>
                                   <span className='absolute text-xs p-2 text-green-400 top-0 right-0'>{findText}</span> 
                                       { isDetailsValid != null ? <span className='text-red-500 p-1 text-left font-medium text-sm'>{isDetailsValid.errorMessage}</span>:<></>}  
                         </div>  
                         <input type="submit" className='outline-none bg-blue-400 rounded  m-2 p-2 cursor-pointer'/>
       
       
       
        </div>
         

           
       

       </form>
       

 </div>
  )
}
