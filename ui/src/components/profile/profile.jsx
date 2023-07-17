import {useNavigate} from 'react-router-dom'
import {logout} from '../../reducer/loginSlice'
import {useDispatch,useSelector} from 'react-redux'
import ProfileComponent from './Profilecomponent'
import OrderStatus from './OrderStatus'
import OrderReceive from './OrderReceive'
import { useEffect } from 'react'


function Profile() {
 //const user = useSelector (state => state.login.user.name)
 const user = localStorage.getItem('user')
 
 const dispatch =useDispatch()
 const history = useNavigate()

 useEffect(()=>{
  if(user === null){
    history('/login')
  }
 })

 const logout = () => {
  // dispatch(logout())
  // history('/login')
 }

    return ( 
      
   
            <div className="w-full pt-20  ">
             
              <div className="w-full flex flex flex-col    md:flex-row">
              <div className="w-1/3 pr-3">
                <ProfileComponent/>
              </div>
              <div className="w-11/12 mt-20">
                <h1 class="font-bold pb-10 text-left text-3xl text-gray-900 ml-10">Orderd Product</h1>
                 <div className="flex w-11/12 ml-auto justify-between">
                
                  <OrderStatus item='one'/>
                  <OrderStatus item='two' />
                  <OrderStatus item='three' />

                  </div>
              
              </div>
             
              </div>
             
            </div>
          
  
  
     );
}

export default Profile;