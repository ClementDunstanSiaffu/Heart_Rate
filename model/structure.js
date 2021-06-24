const mongoose = require('mongoose')

const heartSchema = mongoose.Schema({
    heartRate:{
        type:Number
    },
    temperature:{
        type:Number
    },
    date:{
        type:String
    },
    time:{
        type:String
    }
})

mongoose.model("HEART_RATE",heartSchema)