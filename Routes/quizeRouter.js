const express=reqyire("express")

const RouterQ=express.Router();

const quizeController=require("../Controller/quizeController")


RouterQ.post('/:id',quizeController.Quize)

module.exports=RouterQ;
