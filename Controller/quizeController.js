const Quize = require("../models/quizeModel")


const Quize = async(req,res,next)=>{
    try{
        const IDquiz=req.params.id;
        const DetailsOfQuiz=await Quize.FindByID(IDquiz)

        if(!DetailsOfQuiz){
            return res.status(404).json({message:"quize is not available"})
        }
        res.json(DetailsOfQuiz)

    }
    catch(error){
        next("error");
    }
}

module.exports={
    Quize,
}