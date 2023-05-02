const getData = require('./mongo')

const insert= async()=>{
    const db = await getData()
    const res = db.insertMany([
        {
            height: '5.7',
            weight: "70KG"
        },
        {
            city: "Valsad"
        }
    ])
}

insert()