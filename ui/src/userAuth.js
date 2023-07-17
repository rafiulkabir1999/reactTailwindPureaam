import  Login  from "./components/user/Login"
import { Outlet } from "react-router"
import { useSelector } from "react-redux"


export const UserAuth = () => {
  
  


    const user = localStorage.getItem("user");
    const auth = JSON.parse(user)
    if(auth && auth.name){
        return true;
    }
    else return false;
   
 // return user && user.name

}

const ProtectedRoute = () => {
    const L =UserAuth();
   
    return L ? <Outlet/> : <Login/> 
}

export default ProtectedRoute;