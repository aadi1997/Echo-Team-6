const mongoose = require('mongoose');

const dbConnect = () =>
{
   mongoose.connect('mongodb+srv://userdb:userdb123@cluster0.2zmlq.mongodb.net/test',{
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(()=> console.log(`dbconnected`))
    .catch((err)=> console.log(err));
    
};
module.exports=dbConnect;