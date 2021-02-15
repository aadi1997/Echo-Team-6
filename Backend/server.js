const express = require('express');
const app = express();
require('./config/dbConnect')();
var cors = require('cors')
const User = require('./models/User');
const usersRoute = require('./routes/usersRoute');
const authRoute = require('./routes/authRoute');
const dotenv = require('dotenv');
dotenv.config()
const PORT = process.env.PORT || 5000;
//const morgan=require('morgan')
app.use(cors());
//app.use(morgan('dev'))
// app.options("*",function(req,res,next){
//     res.header("Access-Control-Allow-Origin", req.get("Origin")||"*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//      //other headers here
//       res.status(200).end();
//   });
// app.use((req,res,next)=>{
//     console.log('hello',req)
//     next();
// })
app.use(express.json());
// app.use((req,res,next)=>{
//     console.log('he',req.body)
//     next();
// })
// app.get('/',(req,res,next)=>{
//     res.send('hello world')
// })
app.use('/api', authRoute);
app.use('/api/users', usersRoute);
/*const fileupload= require('./middleware/fileupload');

app.get('/',function(req,res){
    res.sendFile(__dirname+"/");

});

app.post('/uploads', function(req,res){
    upload(req,res,function(err)
    {
        if(err){
            return res.end("ERROR UPLOADING");
        }
        res.end("file is uploaded successfully");
    });
});*/





app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})


