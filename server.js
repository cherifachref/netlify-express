// require express
const express = require("express")


// create instance
const app = express()

// require dotenv
require("dotenv").config()

// middleware global
app.use(express.json({limit: '200mb'}))

app.get('/',(req,res)=>{
    res.send('hello achref ch')
})

// create PORT
const PORT = process.env.PORT || 5000



// create server
app.listen(PORT,(err=>err
    ? console.error(err)
    : console.log(`server runing on port ${PORT} ...`)
    ))