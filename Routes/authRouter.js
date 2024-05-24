const express=require("express");
const Router=express.Router();

const authController = require("../Controller/userController");

Router.post("/signUp", authController.RegisterUser);
Router.post("/login", authController.LoginUser);


module.exports=Router;