
const socket = io('/')
const  video_grid=document.getElementById("video-grid")
const video=document.createElement("video")
video.muted=true

const peer = new Peer(undefined, {
    path: '/peerjs',
    host: '/',
    port: '4242'
  })


navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then((stream)=>{
    addvideostream(video,stream)
})

peer.on('open',(id)=>{
    
socket.emit('join-room',roomid,id);

})
 
socket.on('user-connected',(userId)=>{
    
connectNewuser(userId)
})  
const connectNewuser=(userId)=>{
console.log(userId)
}
const  addvideostream=(uservideo,userstream)=>{
    uservideo.srcObject = userstream
    uservideo.addEventListener('loadedmetadata', () => {
      uservideo.play()
    })
    video_grid.append(video)
}
