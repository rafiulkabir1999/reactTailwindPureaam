import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {Register , reset} from '../../reducer/userSlice'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillEye} from'react-icons/ai'
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function Signup() {

const history = useNavigate()
const { success , loading , error , message } = useSelector (state => state.register)
const [userData,setUserData]=useState({
  name:'',
  phone:'',
  password:'',
  confirm_password:''
})


const {name,phone,password,confirm_password}=userData;
const dispatch=useDispatch()

  const onchange=(e)=>{
     setUserData(state=>({
      ...state,[e.target.name]:[e.target.value]
     }))

    

  }

useEffect(()=>{

  if(success){
  CreatedSuccessfully();
  history('/login')
  }

  if(error){
    RegisterFailed();
    
    }

    dispatch(reset())

},[success , error , history ,message])

 const RegisterFailed = () => toast.error("Register Failed", {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });

 const CreatedSuccessfully = () => toast.success('Account Created successfully', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });
  

  const SeePassword =()=> {
    const status = document.getElementById("password")
    const type = status.getAttribute('type')=='password'?'text':'password'
    status.setAttribute('type',type)
  }
  const submit =(e)=>{
    e.preventDefault()
    
   //CreatedSuccessfully()
   
    if(userData.confirm_password[0] == userData.password[0]){
      
      if(userData.phone.toString().length===11){
        dispatch(Register(userData))
      }
      else{
        const cp=document.getElementById("phone")
        cp.classList.add("border")
        cp.classList.add("border-rose-600")
      }

    }
    else{
        //const cp=document.getElementById("password-confirm")
        const cp=document.getElementById("password-confirm")
         cp.classList.add("border")
         cp.classList.add("border-rose-600")
    }

  }

 
    return ( 
        
<div class="grid min-h-screen place-items-center">
  <div class="w-full p-12 bg-white sm:w-full md:w-1/2 lg:w-5/12 border rounded">
    <h1 class="text-xl font-semibold">Create Account <span class="font-normal">please fill in your information to continue</span></h1>
    
     
 

     {loading==true?  
<div role="status" className="flex justify-center p-5">
    <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
 :
     <form  onSubmit={submit} class="mt-6">
            {success === true ? <label  class="block text-xs font-semibold text-gray-600 uppercase text-green-400 p-3">
                                       {message.message}
            </label>:<span></span>}
            {error === true ? <label class="block text-xs font-semibold text-gray-600 uppercase text-red-400 p-3">
                                       user SignUP Failed
            </label>:<span></span>}
            
          <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Name</label>
          <input id="firstname" 
                 type="text" 
                 name="name"  
                 value={name}
                 placeholder="John" 
                 utocomplete="given-name" 
                 class="block w-full p-3 mt-2 text-gray-70
          0 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300
           focus:shadow-inner" onChange={onchange} required />
      

      <label for="phone" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Phone</label>
            <input id="phone" 
            type="number"
             name="phone"
             value={phone} 
             onChange={onchange}
             placeholder="+880" 
             autocomplete="email" 
             class="block w-full p-3 mt-2 text-gray-700
             bg-gray-200 appearance-none focus:outline-none
              focus:bg-gray-300 focus:shadow-inner" required />

      <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase" >Password</label>
      <div className="relative">
      <input id="password" 
      type="password" 
      name="password" 
      value={password}
      onChange={onchange}
      placeholder="********" 
      autocomplete="new-password"
      class="rounded  block w-full p-3 mt-2 text-gray-700 bg-gray-200 
       appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner relative" required />
      
        <span 
        className="absolute right-0 cursor-pointer p-4 top-0  flex items-center hover:text-gray-600 "
        onClick={()=>SeePassword()}
        > <AiFillEye/></span>
      </div>

      <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
             <input id="password-confirm"
              type="password" 
              name="confirm_password" 
              value={confirm_password}
              onChange={onchange}
              placeholder="********" 
               
              class="block w-full p-3
              mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none 
              focus:bg-gray-300 focus:shadow-inner"  required />

      <button 
      type='submit'
      class="w-full py-3 mt-6 font-medium tracking-widest 
      text-white uppercase bg-blue-500 shadow-lg focus:outline-none 
      hover:bg-blue-900 hover:shadow-none" 
      onSubmit={submit}>
        Sign up
      </button>

     <Link to='/login'>
     <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
     </Link>
    </form>}
  </div>
</div>
     );
}

export default Signup;