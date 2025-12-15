const mongoose=require('mongoose')
const bcrypt=require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email requried"],
    unique: [true, "Email already existed"],
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Please Enter password"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  subscribed:{
    type:String,
    default:false
  },
  freetrails:{
    type:Number,
    default:2,
  }
},
{timestamps:true}
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});



const User=mongoose.model("User",userSchema)

module.exports={User}