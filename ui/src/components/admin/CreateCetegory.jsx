import {createCetegory,getCetegory} from '../../reducer/productSlice'
import { useState ,useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Reset } from '../../reducer/productSlice'
import { reset } from '../../reducer/loginSlice'
import { useNavigate } from 'react-router'
import CreateSubCetegory from './CreateSubCetegory'
import {AiFillPlusCircle,AiFillDelete} from 'react-icons/ai'
import {toast} from 'react-toastify'



const  CreateCetegory = () =>{


    const { cetegory,cetsuccess , iscreated,subcetsuccess,cetegoryDelete ,message,rejectedCetegory} = useSelector( state => state.product)
    const [file,setFile] = useState(null);
    const dispatch = useDispatch()
    const history = useNavigate()
    const C= useRef()
    const cetegoryForm = new FormData()

    const onSubmit = (e) => {
        e.preventDefault()
       // cetegoryForm.append('file',file)
       // setFile(e.target.files[0])
       console.log(file)
        cetegoryForm.append('cetegory',C.current.value)
        cetegoryForm.append('icon',file)
        console.log(cetegoryForm)
      dispatch(createCetegory(cetegoryForm))
       //dispatch(Reset())  
      
    }  
//     useEffect(()=>{
//    // if(cetsuccess){
//         dispatch(getCetegory())  
//    // }
//    //dispatch(Reset())
//   //console.log("cetegory update")
//    },[])


// useEffect(()=>{
//  console.log('this is')
// },[cetegory])

   ////console.log(cetsuccess)
//   useEffect(()=>{
  
//        if(iscreated){
//         dispatch(getCetegory())
      
//         //console.log("is created")
//        }
    
//       dispatch(Reset()) 
   
//   },[iscreated,subcetsuccess])

  //notification for creating subcetegory
  const createsubcatsuccess = ()=> toast("Created Subcetegory Successfully")

//   useEffect(()=>{
//  subcetsuccess && createsubcatsuccess ()
//  subcetsuccess && dispatch(getCetegory())
//  dispatch(Reset())
// console.log("cetegory update")
// console.log(cetegory)
// console.log("subcat " + subcetsuccess)
//  },[subcetsuccess])

 //console.log(cetsuccess)

const  ToggleMenu = (id) =>{
   const Togglemenu =document.getElementById(id)
   //Togglemenu.classList.toggle('absolute')
   Togglemenu.classList.toggle('display-cetegory')

    // setTimeout(()=>{
        //Togglemenu.classList.toggle('visible')//},500) 
       // Togglemenu.classList.toggle('opacity-1')
    //    // delay(Togglemenu)
   
 }

 const [Subcetegory,setSubcetegory] = useState({cetegory:'',Sub:[]})

const CreateNotification = () => toast("Cetegory Created SuccesFully")


 useEffect(()=>{
   iscreated && CreateNotification()
   iscreated && dispatch(getCetegory());
   
 },[iscreated])


 const DeleteNotification = () => toast("Cetegory Deleted SuccesFully")
 const Show = () => toast(message)

 //Delete CETEGORY NOticication
 useEffect(()=>{
   cetegoryDelete && DeleteNotification()
   cetegoryDelete && dispatch(getCetegory());
   dispatch(Reset())
 },[cetegoryDelete])



 const rejectDeleteNotification = () => toast("you canot Delete now ! First Delete All SUbcetegory")
 useEffect(()=>{
   rejectedCetegory && rejectDeleteNotification()
   dispatch(Reset())

 },[rejectedCetegory])


 const handleFileChange = (e) => {
   console.log(URL.createObjectURL(e.target.files[0]))
   const url = URL.createObjectURL(e.target.files[0])
   document.getElementById('iconDisplay').src = url
   setFile(e.target.files[0])
   //console.log(e)
   
 }

    return(
        <div className="flex flex-col flex ml-4 pl-4" >
               
                  <div className='flex  p-4 '>
                              <form onSubmit={onSubmit} className="py-2 "enctype="multipart/form-data">
                               <div className='flex shadow  p-4'>
                                     <input 
                                     id='iconCetegory'
                                     type="file"
                                     className='hidden'
                                     onChange={handleFileChange} name="icon"  
                                      />

                                     <img 
                                     id='iconDisplay'
                                     onClick={()=>document.getElementById("iconCetegory").click()}
                                     className='w-40 h-40 border px-2 mx-2'
                                     src="https://icons-for-free.com/download-icon-camera+photo+upload+icon-1320184663794870720_512.png" alt=""
                                     />
                                
                                 <div className='flex flex-col items-center justify-center space-y-4'>
                                
                                       <input type="text" ref={C}  name='cetegory'  className="p-2 w-full outline-none border"placeholder="Create Cetegory" />
                                       <input type="submit"  className="bg-blue-400 p-2 px-4 w-full font-medium text-xl cursor-pointer text-white" name="" id="" />
                                 </div>

                               </div>
                              </form>

                              <div>
                                
                              </div>
                  </div>

         <div className='flex space-x-6 p-4'>

         <div className="w-96 shadow border ">
                
            
                <div className="flex flex-col w-full relative  p-2 ">
                   {cetegory.map(e=>{return (<div 
                   id={e.cetegory+'button'}
                   onClick={()=>setSubcetegory({cetegory:e.cetegory,Sub:e.subcetegory})}
                  
                   className='border-b'>
                               
                            <div  className='p-2  rounded font-medeum flex items-center justify-between cursor-pointer hover:text-white hover:bg-orange-600'>
                               <p className="text-md font-medium  hover:text-white "> {e.cetegory} </p>
                           
                            </div>
                   
                  
                   
                   </div>)})}
                </div>
     </div>


     <div className="shadow border w-96">
     <CreateSubCetegory cetegory={Subcetegory.cetegory} subC={Subcetegory.Sub} />
     </div>
         </div>
         
        </div>
    )

}

export default CreateCetegory