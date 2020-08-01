require('dotenv').config();
const multer = require("multer");
const path = require('path');


const storageType = {
    local: multer.diskStorage({
        destination: path.resolve(__dirname, '..','..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null,`${name}-${Date.now()}${ext}`);
        }
    }),
//    google:
}


module.exports = {
 destination: path.resolve(__dirname,"..","..","uploads"),
 storage: storageType['local'],
 limits: {
     fileSize: 2 * 1024 * 1024
 },
 fileFilter : (req, res, cb) => {
     const allowedMimes = [
         "image/jpeg",
         "image/pjpeg",
         "image/png",
         "image/gif",
         "image/jpg",
     ];

     if(allowedMimes.includes(file.mimetype)){
         cb(null, true)
     }else{
         cb(new Error("Invalid file type"))
     }
 }
}