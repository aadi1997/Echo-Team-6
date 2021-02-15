const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
     name : {
        type: String,
        //required: true
    }
        ,
     designation: {
         type: String,
         //required: true
        }
         ,
     shortbio: {
         type: String,
        //required: true
    },
    // tags: {
    //     type: [String],
    //     //required: true},
    // bagde: {
    //     type: String,
    //     //required: true},
    //userimage: {
      //  type: String,
        //required: true},
    // totalVotes: {
    //     type: Number,
    //     default:0
    // },

    // questionCount: {
    //     type: Number,
    //     default:0
    // },

    // answerCount: {
    //     type: Number,
    //     default:0
    // },
    // topQuestion: String,
    // topAnswer: [String],
    // subscriptions: [String],
    email : {
        type: String,
        required: true},
    password: {
       type: String,
        required: true},
        photo: {
            type: String
        }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;