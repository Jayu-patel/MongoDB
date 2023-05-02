const getData = require('./mongo')

const mainFun= async()=>{
    let data = await getData()
    data = await data.find({}).toArray()
    console.log(data)
}

mainFun()