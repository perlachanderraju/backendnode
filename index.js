const express = require("express");
const mongoose=require("mongoose")
const dotEnv=require("dotenv")
const vendorRoutes=require('./routes/vendorRoutes')
const firmRoutes=require('./routes/firmRoutes')
const productRoutes=require('./routes/productRoutes')
const bodyParser=require('body-parser')
const cors = require('cors')
const path=require('path')
const app=express()

const PORT = process.env.PORT || 4000;

dotEnv.config()
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("mongodb connected successfully"))
    .catch((error)=>console.log(error))

app.use(bodyParser.json());
app.use('/vendor',vendorRoutes)
app.use('/firm',firmRoutes)
app.use('/product',productRoutes)
app.use('/uploads',express.static('uploads'));

app.listen(PORT,()=>{
    console.log(`server started runnng at:${PORT}`)
})

app.use("/",(req,res)=>{
    res.send("welcome to suby")
})
