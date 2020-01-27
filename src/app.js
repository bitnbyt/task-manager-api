const express = require('express')
require('./db/mongoose')
const userRoute = require('./routers/user')
const taskRoute = require('./routers/tasks')

const app = express()

app.use(express.json()) // parse the incoming json data to object. 
app.use(userRoute)
app.use(taskRoute)

module.exports = app


