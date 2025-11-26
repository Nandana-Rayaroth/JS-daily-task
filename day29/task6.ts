export function CommonKey(obj1 : {}, obj2: {}) : string[] | string{
    let key1 : string[] = Object.keys(obj1)
    let key2 : string[] = Object.keys(obj2)
    if(key1.length === 0 || key2.length === 0) return "Invalid input"
    let result : string[] = []
    let small : string[]
    let large : string[]
    key1.length > key2.length ? small = key2 : small = key1
    JSON.stringify(small) === JSON.stringify(key1) ? large = key2 : large = key1
    for(let i = 0; i < small.length; i++){
        if(large.includes(small[i])) result.push(small[i])
    }
    if(result.length !== 0) return result
    else return "No common keys"
}

// console.log(CommonKey({name: "Brad", age: "24"}, {name: "Titan", place: "mars"}))