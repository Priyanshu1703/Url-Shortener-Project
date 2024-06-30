const mongoose =require('mongoose');

const url_schema=mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true,
    },
    visitHistory:[{timestamps:{type:Number}}]
},{timestamps:true});

const Url=mongoose.model('url_data',url_schema); //url_data is the collection name

module.exports=Url;