const  mongoose=require('mongoose')
const EmployeeShchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const  EmployeeModel=mongoose.model("employees",EmployeeShchema)
module.exports = EmployeeModel