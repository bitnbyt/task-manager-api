const app = require('./app')

const port = process.env.PORT 


// listener
app.listen(port,() => {
    console.log("lisening to port no" + port)
})
