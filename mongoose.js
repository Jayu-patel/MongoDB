const mongoose = require('mongoose')
// OR
// import { connect, Schema, model } from 'mongoose'

mongoose.connect('Link')
const productShcema = new mongoose.Schema({
    name : String,
    type: String
})

//save in database
//
const saveDB=async()=>{
    const porductModel = mongoose.model('product',productShcema)
    let data = new porductModel({name:"911 turbo s",type:"2WD"})
    let res = await data.save()
    console.log(res)
}

//update in database
//
const updateDB=async()=>{
    const porductModel = mongoose.model('product',productShcema)
    let data = await porductModel.updateOne(
        {name: 'GTR R35 Nismo'},
        {
            $set: {
                type: '4WD'
            }
        }
    )
    console.log(data)
}

//delete from database
//
const deleteDB=async()=>{
    const porductModel = mongoose.model('product',productShcema)
    let data = await porductModel.deleteOne({name: '911 turbo s'})
    console.log(data)
}

const findDB=async()=>{
    const porductModel = mongoose.model('product',productShcema)
    let data = await porductModel.find()
    console.log(data)
}
