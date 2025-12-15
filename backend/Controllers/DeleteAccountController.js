const {User}=require("../models/UserModel")

const DeleteAccountController=async(req,res)=>{
    try{
        const userId=req.user
        const data=await User.findByIdAndDelete(userId)
        console.log("thisis deelete")
        return res.status(200).send({message:"Account deleted successfully!"})
    }catch(err){
        return res.status(500).send({message:"Internal server error"})
    }
}

module.exports={DeleteAccountController}