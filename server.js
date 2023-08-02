const express = require('express');

const app = express();
const dbConfig = require('./db')
const agentsRoute = require('./routes/agentsRoute')
const usersRoute = require('./routes/usersRoute')
app.use(express.json());
app.use('/api/agents',agentsRoute)
app.use('/api/users',usersRoute)
const port = process.env.PORT || 5000;
app.listen(port,() => console.log('Node server started using nodemon'));