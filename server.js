const  express= require("express")
const  app=express()
const  server=require("http").Server(app)
require('dotenv').config()
app.set("view engine","ejs")

app.get("/",(req,res)=>{
res.render("room")
})


server.listen(process.env.port,()=>{
    console.log("listening  ragul")
  
})