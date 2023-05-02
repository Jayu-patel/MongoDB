const getData = require("./mongo")

const deleteData= async ()=>{
    let data = await getData()
    let res = await data.deleteOne({data: "your data"})
    console.log(res)
}

deleteData()