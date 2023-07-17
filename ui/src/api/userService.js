import axios from "axios";
import {UserAuth} from '../userAuth.js'
const API="https://api.pureaam.com"
const Localhost = 'http://localhost:4000'
const RandomAPI="https://randomuser.me/api/"


const register=async(userdata)=>{
    const response = await axios.post(API+"/user/signup",userdata)
   
    return response.data
}

const login = async(data) =>{
    const response = await axios.post(Localhost+"/user/login",data,{withCredentials:true})
    return response.data
}



const userRegister={
    register,
    login
}

export default userRegister;