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

router.post("/getagentbyid",async(req,res) =>{
    const agentid = req.body.agentid
    try {
        const agent = await Agent.findOne({_id:agentid})
        res.send(agent)
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

module.exports = router;