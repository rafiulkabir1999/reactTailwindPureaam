const user = require( '../../Models/user.js')
const bcrypt = require( 'bcrypt')
const { generateJWT } = require( '../../middleware/generateJWT.js')


//user/signup
 const Signup = async(req,res)=>{

    const {name,phone,password}=req.body

    try {
        const check = await user.findOne({phone:phone[0]})
        const salt = await bcrypt.genSalt()       
        const Password= await bcrypt.hash(password.toString(),salt)
        
        const person={
        name:name[0],
        phone:phone[0],
        password:Password
        } 
        

        if(check!=null){
            console.log("called Already exit")
            res.status(400)
            res.json("User already registered")
        }
        else{
            const User =new user(person)
            await User.save() 
            res.status(200).json("User Successfully Signup")
        }
        //console.log("database saved")
       
    } catch (error) {
        res.status(409).json(error.message)
    }
    
    
}

//user/login
 const Login = async(req,res) => {
        console.log(req.body)
    const { phone , password } = req.body
    const user_in_db = await user.findOne({phone:phone})
           if(user_in_db && (await bcrypt.compare(password, user_in_db.password)) ) { 

                  res.cookie('jwt',generateJWT(user_in_db),{
                    expire:new Date(Date.now() + 25892000000 ),
                    httpOnly:true,
                        })
                       
                        const user= {
                           name: user_in_db.name,
                           phone:user_in_db.phone,
                           Type:user_in_db.type
                        }
                        res.json(user)
                    
                }
                else{
                 res.status(400) 
                 res.json("Invalid Creadential")
                }

}
const u = {Login,Signup}
module.exports = u 
//module.exports = Signup