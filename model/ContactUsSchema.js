const mongoose =require('mongoose');
const{Schema}=mongoose;
const ContactUsSchema=new Schema({

 name:{
   type:String,
   required:true
 },
 email:{
   type:String,
   required:true,
   uniqe:true
 },
 Subject:{
   type:String,
   required:true,
 },
 Message:{
   type:String,
   required:true,
 },
 date:{
   type:Date,
   default:Date.now
 },
});
module.exports=mongoose.model('contactUs', ContactUsSchema);