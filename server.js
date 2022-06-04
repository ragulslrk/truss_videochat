const  express= require("express")
const  app=express()
const  server=require("http").Server(app)
const io=require("socket.io")(server)
require('dotenv').config()
const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
    debug: true
  });
 
const {v4:uuidV4}=require("uuid")
const { BroadcastChannel } = require("worker_threads")
app.set("view engine","ejs")
app.use(express.static("views"))


app.use('/peerjs', peerServer);

app.get("/",(req,res)=>{
res.redirect(`/${uuidV4()}`)
})
//route  to home page 
app.get("/:room",(req,res)=>{
    res.render("room",{roomid:req.params.room})
})

//socket io  ]
io.on('connection',(socket)=>{
  
    socket.on("join-room",(roomid,userid)=>{
       socket.join(roomid)
       
       socket.to(roomid).emit('user-connected',userid);
    })
})


server.listen(process.env.port,()=>{
    console.log("listening  ragul")
  
})