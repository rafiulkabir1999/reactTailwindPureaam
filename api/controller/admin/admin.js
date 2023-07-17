
 const fileUpload = async(req,res) => {
    //console.log(req.body)
    res.send("called and File Uploaded");

}

 const getAdmin = async(req,res) => {
    res.send("called and Admin");

}

module.exports =fileUpload;
module.exports = getAdmin