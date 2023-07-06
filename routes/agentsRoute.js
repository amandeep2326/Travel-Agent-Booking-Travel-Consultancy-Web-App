const express = require("express");
const router = express.Router();
const Agent = require('../models/agent')

router.get("/getallagents",async(req,res) =>{
    try {
        const agents = await Agent.find({})
        res.send(agents)
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

module.exports = router;