const express = require('express')
const getData = require('./mongo')
const app = express()

app.get('/', async (req,res)=>{
    let data = await getData()
    data = await data.find().toArray()
    res.send(data)
})

app.listen(4545)