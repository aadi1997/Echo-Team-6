const express=require('express');
const expressjwt=require('express-jwt')
const jwt=require('jsonwebtoken');
const {OAuth2Client}= require('google-auth-library');
const client= new OAuth2Client('601534516278-jpkuqoe0ckbt48o9kohl8ueg18miktjd.apps.googleusercontent.com');
const authRoute=express.Router();
const User = require('../models/User');

// authRoute.get('/', (req,res,next)=>{
// res.send('hiii')
// })
authRoute.post('/login',async (req,res)=>{
   const access=false;
   const token=req.body.tokenId;
   
    client.verifyIdToken({idToken:token,audience:'601534516278-jpkuqoe0ckbt48o9kohl8ueg18miktjd.apps.googleusercontent.com'}).then(response=>{
        const {email_verified,name,email}=response.payload;
        if (email_verified){
            User.findOne({email}).exec((err,user)=>{
                if(err){
                    console.log(err)
                    return res.status(400).json({
                        error:'Something went wrong..'
                       
                    })
                }else{
                    if (user){
                        const token=jwt.sign({_id:user._id},process.env.JWT_SIGNIN_KEY,{expiresIn:'7d'});
                        const {_id,name,email}=user;
                        res.json({
                            token,
                            user:{_id,name,email},
                            access:true
                        })
                      }else{
                        let password=email+process.env.JWT_SIGNIN_KEY;
                        let newUser=new User({name,email,password});
                        newUser.save((err,data)=>{
                            if(err){
                                return res.status(400).json({
                                    error:'Something went wrong..'
                                })
                            }
                            const token=jwt.sign({_id:user._id},process.env.JWT_SIGNIN_KEY,{expiresIn:'7d'});
                            const {_id,name,email}=user;
                            res.json({
                                token,
                                user:{_id,name,email},
                                access:true
                            })
                        })
                      }
                }
            })
        }
    })
});
module.exports=authRoute;
