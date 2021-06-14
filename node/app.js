const express=require("express")
const app=express()
const router=require("./routes/api")
const env=require("dotenv")
env.config()
const mongoose=require("mongoose")
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const cors=require("cors")
app.use(cors())
app.use("/",router)

const connectinParams={
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}
mongoose.connect(process.env.MONGO_DB,connectinParams)
.then(()=>{
    console.log("connect to db");
})
.catch((err)=>{
    console.log("error:",err);
})

app.listen(8080,()=>{console.log("listening");})