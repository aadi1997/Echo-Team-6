const express= require('express');
const User = require('../models/User');
const usersRoute = express.Router();
const ObjectId=require('mongodb');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path=require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './frontend/public/uploads');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
let upload = multer({ storage, fileFilter });


usersRoute.get('/:id', async(req,res)=>{
    
    try{
        //console.log(req.params.id)
        // const _id =await ObjectId(req.params.id);
        // console.log(_id);
        const founduser=await User.findById(req.params.id);
        if(!founduser){
            return res.status(404).send();
        }
        else{
            res.send(founduser);
        }
    }
    catch(err){
        console.log(err);
    }
    
});

usersRoute.patch('/:id', upload.single('photo') , async(req,res)=>{
    try{
        const designation=req.body.designation
       // console.log(req.body)
        const shortbio=req.body.shortbio
        const photo=req.file.originalname
        //console.log(photo)
        const newData={
            designation,
            shortbio,
           photo
       }
       
        console.log('hi', newData)
        const updateuser=await User.findByIdAndUpdate(req.params.id,newData,{
            new:true
    });
        res.send(updateuser);
    }
    catch(err){
        res.status(400).send(err);
    }
 
})
module.exports = usersRoute;