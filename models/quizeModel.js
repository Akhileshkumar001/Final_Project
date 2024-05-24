const mongoose=require("mongoose")
const{Schema}=mangoose;

const questSchema=new Schema(
    {
        questionNum:{
            type:Number,
            required:true,
        },
        questionName:{
            type:String,
            required:true,
        },
        options:{
            type:[String],
            required:true
        },
        correctOptn:{
            type:String,
            required:true
        }
    },{
        _id:flase
    }
)

const quizeSchema=new Schema(
    {
        quizeName:{
            type:String,
            required:true,
        },
        quizeType:{
            type:string,
            required:true,
            eNumber:["q&a","poll"],
            default:"text"
        },
        
        optionsType:{
            eNumber:["text","image","text+image"],
            type:String,
            default:"text",
            required:true
        },
        questions:{
            type:[questionSchema],
            required:true,
        },
        timer:{
            type:Number,
            default:0
        },
        refuserid:{
            type:mongoose.ObjectID,
            required:true
        } 
    },
    {timestamps:{createdAt:"createdAt",updatedAt:"updatedAt"}}
);

module.exports=mongoose.model("Quiz",quizeSchema)