const  express=require('express')
const mongoose=require('mongoose');
const cors= require('cors');
const  EmployeeModel=require('./models/Employee')
const app =express;
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1/employee:27017");
app.post('/register',(req,res)=>{

})
app.lisen(3000,()=>{
    console.log("server is running")
})