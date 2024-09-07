const mongoose=require("mongoose");
const schema= mongoose.Schema({
    id: {
         type:Number
    },
    name:String,
    age:  Number,
    gender: String,
    address:  Object,
    email:  String,
    phone: String,
    courses: Array,
    gpa:  Number,
    image:  String,
});

const Model= mongoose.model("schema",schema);

module.exports=Model;