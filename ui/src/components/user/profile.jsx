import { useDispatch,useSelector } from "react-redux";
import { reset} from '../../reducer/loginSlice'
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { useEffect } from "react";
import Admin from '../admin/dashboard'
import UserProfile from '../profile/profile'
const Profile = () =>{

  const {success,pending,error} = useSelector(state => state.login);
  //const {Type,name} = useSelector(state => state.login.user);
  const {Type , name} = JSON.parse(localStorage.getItem('user'))

  const dispatch = useDispatch()
  const history = useNavigate()

 useEffect(()=>{

  if(!success && !pending && ! error)
  {
    //history('/logout')
   // logout_notify();
}

if(name === null ){
  history('/login')
}
 },[success,pending,error,name])
 
   
 



  return(
  <div className="container mx-auto">
    

     
      {Type ==='general'?<UserProfile/>:<></> }   
      {Type === 'admin' ? <Admin/> : <></>}
     
        
 
  </div>
  )
}
export default Profile;