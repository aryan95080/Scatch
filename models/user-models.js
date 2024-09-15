const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
  fullname:String,
  email:String,
  password:String,
  cart:{
    typeof:Array,
    default:[]
  },
  isAdmin:Boolean,
  order:{
    typeof:Array,
    default:[]
  },
  contact:Number,
  picture:String,
})
module.exports=mongoose.model("user",userSchema);
