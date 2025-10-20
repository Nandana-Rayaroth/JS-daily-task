
let user = {
    user_id : 1,
    name : {
        first_name: "Archana"
    }
}

// let secondObj = Object.assign({...user})
// secondObj.name.last_name = "Joseph"
// console.log(secondObj)
// console.log(user)

let secondObj = Object.assign(user)
secondObj.name.last_name = "Joseph"
console.log(secondObj)
console.log(user)

let secondSpred = {...user}
secondSpred.name.middile = "Marya"
console.log(secondSpred)
console.log(user)


