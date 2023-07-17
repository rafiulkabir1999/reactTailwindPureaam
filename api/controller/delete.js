const fs = require("fs");
const product = require('../Models/product.js')

// const remove = (req, res) => {
//   const fileName = req.params.name;
//   const directoryPath = __basedir + "/resources/static/assets/uploads/";

//   fs.unlink(directoryPath + fileName, (err) => {
//     if (err) {
//       res.status(500).send({
//         message: "Could not delete the file. " + err,
//       });
//     }

//     res.status(200).send({
//       message: "File is deleted.",
//     });
//   });
// };

const removeSync = async(req, res) => {
  //const fileName = req.params.name;
  const directoryPath = __dirname ;

  const details = await product.findOne({_id:req.params.id})
  console.log(directoryPath)
  const url = {
    profile:details.url,
    details:details.detailsPhoto
  }
res.send(url)
//   try {
     

//     fs.unlinkSync(directoryPath + fileName);

//     res.status(200).send({
//       message: "File is deleted.",
//     });
//   } catch (err) {
//     res.status(500).send({
//       message: "Could not delete the file. " + err,
//     });
//   }

};

module.exports = {
 // remove,
  removeSync,
};