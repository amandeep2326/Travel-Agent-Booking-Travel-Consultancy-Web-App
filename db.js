const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://amandeepsinghee20a1142:Amandeep1234@cluster0.dkuhr9h.mongodb.net/travel-agent-booking'

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error',()=>{
    console.log('Mongodb connection failed')
})

connection.on('connected',()=>{
    console.log('Mongodb connection successful')
})
 
module.exports = mongoose