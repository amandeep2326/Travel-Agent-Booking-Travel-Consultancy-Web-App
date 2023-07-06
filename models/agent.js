const mongoose = require("mongoose")

const agentSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    maxcount : {
        type: Number,
        required:true
    },
    phonenumber : {
        type: Number,
        required:true
    },
    costperday : {
        type:Number,
        required:true
    },
    imageurls : [],
    currentbookings : [],
    type : {
        type: String,
        required : true
    },
    description : {
        type: String,
        required:true
    }
} , {
    timestamps:true,
})

const agentModel = mongoose.model('travel-agents',agentSchema)

 module.exports = agentModel