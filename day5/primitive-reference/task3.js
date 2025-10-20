
let Original = {
    user: {name: "John", age: 25}
}

let deepClone = JSON.parse(JSON.stringify(Original))
deepClone.userId = 1

console.log(deepClone)
console.log(Original)