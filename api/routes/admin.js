const express = require('express')
const multer  = require ('multer')
const  path  = require ('path')
const productModel = require ( '../Models/product.js')
const CetegoryModel = require ( '../Models/cetegory.js')
const sharp = require ( 'sharp')

const router =express.Router()

const fileUpload =require('../controller/admin/admin.js')
const getAdmin = require ( '../controller/admin/admin.js')
const  {VerifyJWT}  = require ( '../middleware/generateJWT.js')

var root = path.resolve();


var diskStorage = multer.diskStorage({
     destination(req, file, cb) {
      cb (null,root+'/uploads/')
     },
     filename(req,file,cb) {
      const fileExt = path.extname(file.originalname)
      req.body.item="check"
      const middleName = file.originalname
                               .replace(fileExt,'')
                               .toLowerCase()
                               .split(" ")
                               .join("_")+"_"+Math.random().toFixed(32).split('.')[1]+"_"+Date.now()
 
 
                        
                                    
        const fileName =  middleName + fileExt
         req.body.add = fileName
      cb (null, fileName)
     }
})

const upload = multer({
     storage:diskStorage,
  //    limits: {
  //     fileSize: 4*1080*1080
  // },
   fileFilter(req,file,cb) {
       
       if(file.mimetype=== 'image/png' || file.mimetype === 'image/jpg' || file.mimetype ==='image/jpeg')
          {
          cb (null,true)
       }
        else {
          console.log("error")
          cb (new Error("not uploaded"))
       }
   }
    
     });





//localhost:4000/admin


router.post('/',VerifyJWT,upload.fields([
  {name:'filename',maxCount:1},{name:'detailsPhoto',maxCount:5}]),async(req,res)=>{
  //const { fileName: filename } = req.file;
  
  // console.log(req.files.detailsPhoto[0])
   //console.log('filed called')
    const{name,price,cetegory,subcetegory}=  req.body 
    const add =req.body.add
    //console.log (add)
  const detailsPhotoUrl=[req.files.detailsPhoto[0].filename,
                         req.files.detailsPhoto[1].filename,
                         req.files.detailsPhoto[2].filename,
                         req.files.detailsPhoto[3].filename,
                         req.files.detailsPhoto[4].filename
                        ]
    // console.log("changed location")
    //console.log(detailsPhotoUrl)    
  try {
     
   sharp(req.files.filename[0].path)
             .resize(225, 225)
             .jpeg({ quality: 90 })
             .toFile(root+`/uploads/resize/${req.files.filename[0].filename}.jpeg`,async(err,info)=>{
                          if(!err){
                              
                                    var ADD = 'photo/resize/' + req.files.filename[0].filename+ ".jpeg"
                                    // console.log(ADD)
                                    const product =  new productModel({
                                                                      name:name,
                                                                      cetegory:cetegory,
                                                                      subcetegory:subcetegory,
                                                                      price:price,
                                                                      url:ADD,
                                                                      detailsPhoto:[
                                                                                      req.files.detailsPhoto[0].filename,
                                                                                      req.files.detailsPhoto[1].filename,
                                                                                      req.files.detailsPhoto[2].filename,
                                                                                      req.files.detailsPhoto[3].filename,
                                                                                      req.files.detailsPhoto[4].filename
                                                                                    ]
                                                                    })
                                 await product.save()
                                  console.log('done uploded')
                                    res.status(200).send('File Uploaded Successfully')
                                
                                  
                                  //res.send(err)
                          }
                          else {
                                    console.log("Failed Shearping")
                                    res.status(500).send("File Upload Failed")
                            //res.send(info)
                          } 

               })}
   catch (error) {
   res.status(500).json({message:error.message})
  }
   
})

router.post('/update',(req,res) => {
  console.log(req.body.name)
  res.send(req.body)
})
//admin/createCetegory
router.post('/createCetegory',upload.single('icon'),VerifyJWT,async(req,res)=>{
    const {cetegory} = req.body
    console.log(req.body)
    const url ="photo/"+ req.body.add
    console.log(url)

     const Cetegory =cetegory.replace(/\s+/g, '').toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  
     console.log(Cetegory)
  
      try {
         const checkCetegory = await CetegoryModel.findOne({cetegory:Cetegory})
         console.log(checkCetegory)

        if(checkCetegory){
      //   const newCetegory =
          await checkCetegory.updateOne({url:url})
         // newCetegory.save(); 
         res.status(200).send('created Successfully')
         console.log("cetegory  created Successfully")
        }else{
         const newCetegotry= new CetegoryModel({
                                                 cetegory:Cetegory,
                                                 url:url
                                               })
        await newCetegotry.save();
        res.status(200).send('new cetegory saved')
        }
      } catch (error) {
         console.log(error)
         res.status(500)
         console.log("cetegory not created")
      }
})      
//router.get('/',fileUpload)
router.get('/getCetegory',async(req,res) => {
  try {
   const cetegory = await CetegoryModel.find()
   res.send(cetegory)
  } catch (error) {
   console.log(error)
  }
})

router.post('/deleteCetegory',async(req,res)=>{
  //console.log(req.body.cetegory)
  console.log("delete called")
  try {
    const cetegory = await CetegoryModel.find({cetegory : req.body.cetegory})
    if(cetegory[0].subcetegory.length <= 0)
     { 
      await CetegoryModel.deleteOne({cetegory:req.body.cetegory})
      res.status(200).send("delete Successfully")
     }

    else res.status(400).send("You have to delete all subcetegory first")
  } catch (error) {
    console.log(error)
  }
})

router.post('/deletesubcetegory',async(req,res)=>{
   //console.log(req.body.cetegory)
  // console.log("this is server subcetegory")
  // console.log("delete called")
  
 try {
  const product = await productModel.find({subcetegory:req.body.subcetegory})
  if(product.length <= 0){
    await CetegoryModel.updateOne({cetegory:req.body.cetegory},
      {
        $pull:{subcetegory : req.body.subcetegory}
      })
  console.log(product)
    res.status(200).send("Successfully removed")
  }

  else res.status(400).send("You canot delete Subcetegory at this moment. clear subcetegory and try again later")
 } catch (error) {
   console.log(error)
   res.status(400)
 }

})

   


router.post('/createSubCetegory',VerifyJWT,async(req,res)=>{
   console.log(req.body)
   const {cetegory,subcetegory} = req.body

    const Cetegory = cetegory.replace(/\s+/g, '').toLowerCase().split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    const SubCetegory  = subcetegory.replace(/\s+/g, '').toLowerCase().split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
     try {
        const checkCetegory = await CetegoryModel.findOne({cetegory:Cetegory})
 
       if(!checkCetegory.subcetegory.find(e =>  e === SubCetegory )){
         SubCetegory && checkCetegory.subcetegory.push(SubCetegory)
     
        await checkCetegory.save(); 
        res.status(200).send('update Successfully')
       }else{
        res.send("Already Exsist Cetegory")
       }
     } catch (error) {
        console.log(error)
        res.status(400)
        console.log("cetegory not created")
     }
})      
module.exports = router;