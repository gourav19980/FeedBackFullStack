const mongoose = require('mongoose');
const { Schema } = mongoose; 
//subDocument collection

const recipientSchema=new Schema({
    email:String,
    responded:{type:Boolean,default:false}
});

module.exports =recipientSchema;