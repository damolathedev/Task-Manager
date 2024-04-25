const connectDb = require('./db/connect')
const express =require('express')
const app = express()
const tasks = require('./route/route')
require('dotenv').config()
const notfound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

// Middleware
app.use(express.static('./public'))
app.use(express.json())

// route

app.use('/api/v1/tasks', tasks)
app.use(notfound)
app.use(errorHandler)

const port = process.env.PORT || 3000

const start= async()=>{
    try {
        await connectDb(process.env.MONGOOSE_URI)
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}....`);
        })
    } catch (error) {
        console.log(error);
    }
}


start()
