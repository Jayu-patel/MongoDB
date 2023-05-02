const getData = require('./mongo')

const update= async ()=>{
    let data = await getData()
    let res = await data.updateOne(
        {name: "Jay s patel"},
        {
            $set: {name: "Jay patel"}
        }
    )
    console.log(res)
}

update()