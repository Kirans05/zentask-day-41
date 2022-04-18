const express = require("express");
const req = require("express/lib/request");
const app = express();
app.use(express.json());

const port = process.env.PORT || 4000

const roomDetails = {};

//list of room details
var list = []


// creating a room
app.post("/create",async (req,res)=>{
    roomDetails.push(req.body)
    res.send("room created")
})


// book room
app.post("/bookRoom",async (req,res)=>{
    if(req.body){
        let filtervalue = list.filter(item => item.roomId == req.body.roomId)
        if(filtervalue.length > 0){
            res.send("RoomId already booked")
        }else{
            list.push(req.body)
            res.send("room booked successful")
        }
    }else{
        res.send("server Problem Try again")
    }
})

// list of rooms
app.get("/displayroom",async (req,res)=>{
    if(list.length){
        res.send(list)
    }else{
        res.send("No rooms booked")
    }
})

// custmeros
app.get("/customers",async (req,res)=>{
    if(list.length){
        res.send(list)
    }else{
        res.send("No rooms booked")
    }
})

app.listen(port);
