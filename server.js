const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require("./Routes/authRouter");
const QuizRouter=require("./Routes/quizeRouter")


require('dotenv').config()

const dataBase_Link = process.env.MONGODB_URI;

const app = express();

app.use(cors()) ;
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

mongoose
    .connect(dataBase_Link)
    .then(()=> {
        console.log("DB connected successfully");
    })
    .catch(function (error) {
        console.log("Somthing is Error to connecting to MongoDB:", error);
});

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/auth",QuizRouter)
