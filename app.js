const express= require('express')
const app=  express()
const path= require('path')
const socketio= require ('socket.io')
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, "public")))
const http= require ('http')
const server= http.createServer(app)
const io= socketio(server)



io.on('connection',(socket)=>{
    socket.on("send-location",(data)=>{
        io.emit("recieve-location",{
            id: socket.id,
            ...data
        })
    })
    socket.on("disconnect",()=>{
        io.emit("user-disconnected",socket.id)
    })
})

app.get('/',(req,res)=>{
    res.render('index')
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

