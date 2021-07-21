const mongoose = require('mongoose')
const Heart_Rate = mongoose.model("HEART_RATE")

exports.leta = (req,res)=>{
    const {temperature,heartRate} = req.params
    const heart_rate = new Heart_Rate()
    const date = new Date()
    const currentDate = date.toLocaleDateString("en-us",{timeZone:"Africa/Nairobi"})
    const currentTime = date.toLocaleTimeString("en-us",{timeZone:"Africa/Nairobi"})
    heart_rate.heartRate = heartRate;
    heart_rate.temperature = temperature;
    heart_rate.date = currentDate;
    heart_rate.time = currentTime;
    heart_rate.save((err,docs)=>{
        if(!err){
            res.send("SUCCESS")
        }
    })
}

exports.pata = (req,res)=>{
    Heart_Rate.find((err,docs)=>{
        if (!err){
            res.json(docs)
        }
    })
}