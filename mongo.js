const {MongoClient} = require('mongodb')
const path = 'mongodb://127.0.0.1'

const client = new MongoClient(path)

const getData= async()=>{
    let res = await client.connect()
    let db = res.db('database')
    return db.collection('data2')
}

module.exports = getData