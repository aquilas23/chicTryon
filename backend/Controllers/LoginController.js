const { User } = require("../models/UserModel");
const jwt=require("jsonwebtoken");

const bcrypt=require("bcrypt");

const LoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await User.findOne({ email });
    if(!data){
       return res.status(400).json({ message: "User not found" });
    }
    console.log(data);
    const match=await bcrypt.compare(password,data.password)
    console.log(match)
    if(!match){
        return res.status(400).json({message:"Invalid password"})
    }
    const token=jwt.sign(
            {id:data._id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
    )

    return res.status(200).json({
        message:"Login Successs",
        token,
        user:{
            id:data._id,
            email:data.email,
            name:data.fullname
        }
    })

  } catch (err) {
    console.log(err);
   res.status(500).json({ message: "Server error", error: err.message });
  }

  console.log("this is login controller", email, password);

  //   res.send("this is login controller");
};

module.exports = { LoginController };
