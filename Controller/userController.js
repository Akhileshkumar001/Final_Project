const User=require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const RegisterUser=async (req,res,next)=>{
    try{
        const {name,password,email} = req.body;
        
        if(!name||!email||!password){
            return res.status(400).json({
                errorMessage:"Bad Request"
            });
        }

        const Email=email.toLowerCase();
        const isExistngUser=await User.findOne({email:Email})
            if(isExistngUser){
                return res.status(409).json({
                    message:"This email already exist"
                })
            }

        const UserData=new User({
            name,
            email:Email,
            password
        });
        await UserData.save();
        res.status(200).json({
            message:"User register Successfully"
        });
        
    }
    catch(error){
        next(error)
    }
}

const LoginUser=async(req,res,next)=>{
    try{
        const{email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({
                message:"Bad Request ",
            })
        }

        const Email=email.toLowerCase();
        const DetailOfuser=await User.findOne({email:Email});
        if(!DetailOfuser){
            return res.status(409).json({
                message:"this email doesn't exist"
            })
        }
        const IsPassworedMatched=await bcrypt.compare(password,DetailOfuser.password);
        if(!IsPassworedMatched){
            return res.status.json({
                message:"Invailed credential"
            })
        }
        // const token = jwt.sign(
        //     { userId: DetailOfuser._id },
        //     process.env.SECRET_KEY,
        //     { ExpiresIn: "40h" }
        // );

        res.status(200).json({
            message: "loggedIn Successfully",
            // token: token,
            // userId: DetailOfuser._id,
        });

    }catch(error){
        next(error)
    }
}

module.exports={
    RegisterUser,
    LoginUser,
}
