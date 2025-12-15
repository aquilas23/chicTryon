const {User}=require('../models/UserModel')
const SignUpController = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = await User.create({ fullname, email, password });

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });
  } catch (err) {
    // extract validation errors
    // console.log(err)
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({ message: messages[0] }); // send first readable error
    }

    res.status(500).json({ message: "Server Error" });
  }
};

module.exports={SignUpController}