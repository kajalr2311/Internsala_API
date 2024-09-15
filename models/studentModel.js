
const  mongoose = require ("mongoose")

const studentModel = new  mongoose.Schema(
    {
  email:{
    type: String,
    unique: true,
    required :[true ,"email is requried"],
    match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },

  password: {
    type:String,
    select: false,
    maxLength:[15,"password should not excced more than 15 characters"],
    minLength:[6,"password should have atleast more than 6 characters"],
    // match:[]
  }
} ,
{timestamps:true}

);
const student = mongoose.model("student", studentModel);

module.exports = student;