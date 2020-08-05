const fs = require("fs")

//stringify = convert object to string
//parse = convert string to object 


const dataBuffer = fs.readFileSync("onejs.json")
const dataJSON = JSON.parse(dataBuffer.toString())
dataJSON.name = "Srinivas"
dataJSON.age = 29
console.log(dataJSON)
console.log("age:", dataJSON.age )

fs.writeFileSync("onejs.json", JSON.stringify(dataJSON))

