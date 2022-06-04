const  express= require("express")
const  app=express()
const  server=require("http").Server(app)
require('dotenv').config()
const {v4:uuidv4}=require("uuid")
app.set("view engine","ejs")

app.get("/",(req,res)=>{
res.redirect('/${uuidv4()}')
})

app.get("/:room",(req,res)=>{
    res.render("room",{roomid:req.params.room})
})


server.listen(process.env.port,()=>{
    console.log("listening  ragul")
  
})