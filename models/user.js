const mongoose= require("mongoose");
const { Schema } = mongoose;
// mongoose.Promise = global.Promise;


const userSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true})
module.exports= mongoose.model("User",userSchema)