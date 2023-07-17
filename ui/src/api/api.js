import axios from "axios"
const URL = "http://localhost:4000"
const API ='https://api.pureaam.com'

export const UserSignUp=(user)=>{
        axios.post(API+"/user/signup", {
            Name: user.name,
            Phone: user.phone,
            Password:user.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
