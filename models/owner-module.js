const mongoose=require("mongoose");
const ownerSchema=mongoose.Schema({
  fullname:{
    type:String,
    required:true,
    minlength:3,
    maxlength:50,
    trim:true,

  },
  email:String,
  password:String,
  product:{
    typeof:Array,
    default:[]
  },
  gstin:Number,
  picture:String,
})
module.exports=mongoose.model("owner",ownerSchema);
