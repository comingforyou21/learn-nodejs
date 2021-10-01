const express = require('express')
var router = express.Router()


router.get('/alo1',(req , res) => {
    res.json("alo1")
})

router.get('/alo2',(req , res) => {
    res.json("alo2")
})

router.get('/:id' , (req , res) => {
    res.send("id la : " + req.params.id)
})


module.exports = router