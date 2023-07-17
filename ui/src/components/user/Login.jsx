import{Link , Navigate, useNavigate} from 'react-router-dom'
import { useRef } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Login, reset} from '../../reducer/loginSlice'
import axios from 'axios';
import { useEffect } from 'react';
import {  toast } from 'react-toastify';



function Signup() {
  const history = useNavigate();
  
 
  const {success,pending,error } = useSelector(state => state.login);
  const dispatch = useDispatch();
  const phone=useRef();
  const password=useRef();
  
  

  const onSubmit = (e) =>{
       e.preventDefault();
       const LOGIN = {
        phone:phone.current.value,
        password:password.current.value
       }

       dispatch(Login(LOGIN))
  }

const notify = () => toast.success('Successfully Log in to gifsy', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });

const Error_notify = () => toast.error('Login failed Try Again', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });
const user = localStorage.getItem('user')
  useEffect(()=>{
    //console.log(user.name)
    //console.log("This is Called")
    
    if(user != null){
      history('/profile')
    }

  },[user])

 useEffect(()=>{

 if(success){
  notify();
  history('/profile')
}

if(error && user === null){
 Error_notify();
 history('/login')
}
 
  dispatch(reset())

 },[success,pending,error,history,dispatch])


    return ( 
  <div class="grid min-h-screen place-items-center ">
  <div class="w-full p-12 bg-white sm:w-8/12 md:w-1/4   shadow-xl border-t rounded">
    <h1 class="text-xl font-semibold">Login</h1>
    <form class="mt-6 md:my-10" onSubmit={onSubmit}>
     
      <label for="phone" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Phone</label>
      <input ref={phone} id="phone" type="number" name="phone" placeholder="+880" autocomplete="email" class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
      <input ref={password} id="password" type="password" name="password" placeholder="********" autocomplete="new-password" class="rounded  block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-blue-500 rounded shadow-lg focus:outline-none hover:bg-blue-900 hover:shadow-none">
        Log In
      </button>
      <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Forgot Password?</p>

      <Link to="/signup">
      <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-green-500 shadow-lg focus:outline-none rounded hover:bg-green-900 hover:shadow-none md:w-1/2">
        Create a new Account
      </button>
      </Link>
    </form>
  </div>
</div>
       

     );
}

export default Signup;