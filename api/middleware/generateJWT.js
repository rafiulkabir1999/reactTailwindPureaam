const jwt = require('jsonwebtoken')

 const generateJWT = (data) =>{

    var token = jwt.sign({data },process.env.JWT_SECRET);
    console.log(token)
    return token;


}

 const VerifyJWT= (req,res,next) => {
    const token = req.headers['cookie']
      const TOKEN= token && token.split('=')[1]
      jwt.verify(TOKEN,process.env.JWT_SECRET,(err,result)=>{
        if(err){
            res.status(403)
            res.send('Not Authorised')
        }
        else {
            //console.log("this is jwt veryfy")
            //console.log(result)
            next();
        }
      })
    

}
 const j = {generateJWT,VerifyJWT}
module.exports = j;
//module.exports = VerifyJWT;