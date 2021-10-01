const express = require('express')
var app = express()
var router1 = require('./apiRouter.js')

app.get('/' , (req , res , next) => {
    res.json("alo")
})

app.use('/api1' , router1)

app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`Start port`)
})

