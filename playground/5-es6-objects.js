// object shorthand

const name = "Srini";
const userAge = 29;

const user = {
    name,
    age: userAge,
    sex: "Male"
}

console.log(user)

// object destructuring

const product = {
    name: "Red label",
    type: "Whisky",
    volume: "700ml"
}

const {name:productName, type: label, volume} = product
 console.log(productName, label, volume)

 const transaction = (type, {name, volume}) => {
    console.log(type, name, volume)
 }

 transaction("Whisky", product);