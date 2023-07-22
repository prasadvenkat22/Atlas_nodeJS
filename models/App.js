const mongoose= require('mongoose')
const App=  mongoose.Schema
(    {
        AppName:{type:String,required:[true,"Please Enter APP Name"],unique: true },
        Description: {type:String, required:false},
        Imageurl: {type:String, required:false},
        AppID: {type:Number, required:true, unique: true },
        CreatedAt:{ type:Date,default:Date.now },
        Createdby: {type:String, required:false, unique: true },
    },
        {timestamps:true}
)

const Apps = mongoose.model('App', App)
module.exports =Apps;
