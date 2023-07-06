const express = require('express');

const app = express();
const dbConfig = require('./db')
const agentsRoute = require('./routes/agentsRoute')

app.use('/api/agents',agentsRoute)
const port = process.env.PORT || 5000;
app.listen(port,() => console.log('Node server started using nodemon'));