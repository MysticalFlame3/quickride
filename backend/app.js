const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require('cors')
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes')
const cookieparser = require('cookie-parser')






const app = express()
app.use(cors())
app.use(express.json());
app.use(cookieparser())


app.get('/', (req,res) =>{
    res.send("hello world")
})

connectToDb();

app.use('/users',userRoutes)

module.exports = app