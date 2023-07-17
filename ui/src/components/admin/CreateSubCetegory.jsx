import {createSubCetegory,getCetegory,deleteCetegory,deleteSubCetegory, getSubCetegory} from '../../reducer/productSlice'
import { useState ,useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Reset } from '../../reducer/productSlice'
import { reset } from '../../reducer/loginSlice'
import { useNavigate } from 'react-router'
import {AiFillFileAdd,AiFillDelete} from 'react-icons/ai'
import { toast } from 'react-toastify'





const  CreateSubCetegory = (props) =>{
    //ipopop[;iikhj]
    const { cetegory,cetsuccess , iscreated ,subcetloading ,subcetsuccess , DeleteSC ,rejectedsubCetegory} = useSelector( state => state.product)
     const dispatch = useDispatch()
    const history = useNavigate()
    const Subcetegory= useRef()


//handle subcetegory create form
const onSubmit = (e) => {
        e.preventDefault()
       // setCetegory(C.current.value)
       //console.log(Subcetegory.current.value)

       dispatch(createSubCetegory({"cetegory":props.cetegory,"subcetegory":Subcetegory.current.value}))
       //dispatch(Reset())  
      
    }  

 const [s,set] = useState([])

// useEffect(()=>{
//     console.log(cetegory)
//   cetegory && Object.keys(cetegory).forEach(function(key, index) {
//      if(cetegory[index].cetegory == props.cetegory) console.log(cetegory[index])
//      //set([cetegory[index].subcetegory])//set(cetegory)
//   });
// },[])


//taing all cetegory form redux store and set is in state using usestate hook to render in ui
useEffect(()=>{
    cetegory && cetegory.map( e => {
        if(e.cetegory == props.cetegory)
        set(e.subcetegory)
    })
   
})


//create subcetegory success
const createsubcatsuccess = ()=> toast("Created Subcetegory Successfully")

    useEffect(()=>{
   subcetsuccess && createsubcatsuccess ()
   dispatch(getCetegory())
   dispatch(Reset())
  console.log("cetegory update")
   },[subcetloading,subcetsuccess])
   //console.log(cetsuccess)


   //delete sub cetegory succesfull
const delete_S_Cetegory = () => toast("Delete successfully")
  useEffect(() => {
    DeleteSC && delete_S_Cetegory()
    dispatch(Reset())
    DeleteSC && dispatch(getCetegory())
  },[DeleteSC])

  //delete subcetegory failed
  const delete_S_Cetegory_failed = () => toast("Delete all Product's from subcetegory First")
  useEffect(() => {
    rejectedsubCetegory && delete_S_Cetegory_failed()
    dispatch(Reset())
  },[rejectedsubCetegory])



    return(
        <div className="w-full pt-4">
          <div className='p-4'>
          {props.cetegory ?               <p className='font-bold text-xl'>{props.cetegory}</p> : <></>}
              <div 
              onClick={()=>dispatch(deleteCetegory({"cetegory":props.cetegory}))} 
              
              className='text-left pb-3 hover:text-red-900 cursor-pointer text-2xl flex items-center space-x-2  text-red-400 '
              ><AiFillDelete/> <span className='text-sm'>Delete this cetegory</span></div>
          
           <form onSubmit={onSubmit} className="flex justify-center w-full ">
           
            <input type="text" ref={Subcetegory}  name='cetegory'  className="outline-none bg-gray-100 grow text-center py-2"placeholder="Create SubCetegory" />
         
                <button type="submit"  className="bg-blue-400 p-2 grow flex justify-center items-center text-white text-2xl " name="" id="" >
               
                <AiFillFileAdd/>
            </button>
           </form>

          </div>
   
             <div className="flex flex-col w-full p-2 ">
                {s.map((e,index)=>{return (<div className='p-2 flex items-center text-left border-b justify-between px-4 '>
                    <span className=' rounded-full font-medium  '>{index+1}</span>
                     <span className='font-medium text-gray-600 text-md '> {  e}</span>
                     <div 
              onClick={()=>dispatch(deleteSubCetegory({"subcetegory":e,"cetegory":props.cetegory}))} 
              
              className='text-left pb-3 hover:text-red-900 cursor-pointer text-2xl flex items-center space-x-2  text-red-400 '
              ><AiFillDelete/></div>
                     </div>)})}
             </div>
         
        </div>
    )

}

export default CreateSubCetegory