const express= require("express");
const { default: mongoose } = require("mongoose");
const env= require("dotenv").config();
const app= express();
const cors= require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port=300|| process.env.PORT;
const db_link=`mongodb+srv://himanshuee20a1358:PdXp9AAOERVELGhY@cluster0.tkdu5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const controller= require("./Controllers/Controller");
controller(app);

mongoose.connect(db_link).then(()=>{
     console.log("Database is connected");
})
app.listen(port,()=>{
     console.log("Server is running");
})  