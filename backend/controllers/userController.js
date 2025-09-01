// ye connected he user routes me and token is authenticated middleware me se hoga logic ye is authenitcted part message controleer me bhi use ho raha he ye se leke   token generate on login

import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


// registration  part
export const register = async (req,res) => {
  try {
    const {fullName, username, password, confirmPassword, gender} = req.body;
    if (!fullName || !username|| !password || !confirmPassword || !gender) {
        return res.status(400).json({message:"All fields are required"})
    }
    if (password !== confirmPassword) {
          return res.status(400).json({message:"Password didnot match"})
    }
    const user = await User.findOne({username});
    if (user) {
        return res.status(400).json({message:"username already exist"})
    }
    //easy password you cant give here
    const haashedPassword = await bcrypt.hash(password,10)
    //profilephoto
             const maleprofilephoto =`https://avatar.iran.liara.run/public/boy?username=${username}`
              const femaleprofilephoto =`https://avatar.iran.liara.run/public/girl?username=${username}`
    await User.create({
        fullName,
        username,
        password:haashedPassword,
        profilePhoto: gender === "male" ? maleprofilephoto : femaleprofilephoto  ,
        gender
    })
  return res.status(201).json({
    message:"Account created successfully",
    success:true
  })
  } catch (error) {
    console.log(error);
    
  }
}



// login part
export const login = async(req,res) => {
  try {
    const {username , password} =req.body
     if (!username || !password) {
        return res.status(400).json({message:"All fields are required"})
    }
    const user = await User.findOne({username})
    if(!user){
      return res.status(400).json({
        message:"incorrect username and password",
        success:false
      })
    }
           const isPasswordMatch = await bcrypt.compare(password , user.password)
      
  if(!isPasswordMatch){
      return res.status(400).json({
        message:"incorrect username and password",
        success:false
      })
    }
    const tokenData ={
      userId:user._id
    }
    const token = await jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn: '1d'})
       return res.status(200).cookie("token",token,{maxAge:1*24*60*1000, httpONLY:true, sameSite: 'strict'}).json({
        _id:user._id,
         fullName:user.username,
        username:user.fullName,
        profilePhoto:user.profilePhoto
       
       })

  } catch (error) {
    console.log(error);
    
  }
}


// logout

export const logout = (req,res) => {
  try {
    return res.status(200).cookie("token", "",{maxAge:0}).json({
      message:"logged out successfully"
    })
  } catch (error) {
    console.log(error);
    
  }
}
// bhai ye data me is authenticated se le raha hu waha jab me token me req.id liya waha other user ko dekhne ke liye
  export const  getOtherUsers = async(req,res) =>{
    try {
      const loggedInUserId = req.id
      const otherUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password")  // $ne matlab not equal to wo database me check ke liye lia gaya he
        return res.status(200).json(otherUsers)
    } catch (error) {
      console.log(error);
      
    }
  }