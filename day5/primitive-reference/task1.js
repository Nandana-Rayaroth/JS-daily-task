
let a = 54

let user = {
    username : "Archana",
    userId : 2
}

let copiedA = a
copiedA = 545
let newObj = {...user}
newObj.userStatus = true

console.log(copiedA)
console.log(newObj)
console.log(user)
console.log(a)

