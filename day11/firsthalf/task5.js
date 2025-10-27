function equalityChecker(obj1, obj2) {
    let first = []
    let second = []
    for(let [keys, values] of Object.entries(obj1)) {
        first.push(`${keys}, ${values}`)
       
    }
    for(let [keys, values] of Object.entries(obj2)) {
        second.push(`${keys}, ${values}`)
    }

    first = first.sort()
    second = second.sort()
    let flag = []
    if(first.length === second.length){
        for(let i = 0; i < first.length; i++){
            if(first[i] === second[i]){
                flag.push("Equal")
            }
            else{
                return "Not Equal"
            }
        }
        let final 
        for(let j = 0; j < flag.length; i++){
            if(flag[j] === "Equal"){
                // return "Equal"
                final = "Equal"
            }
            else{
                return "NOt equal"
            }
            return final
        }
    }
    else return "Not Equal"
    
}
console.log(equalityChecker({a: 1, b: 2}, {a: 1, b: 2}))
console.log(equalityChecker({ a: 1, b: 2 }, { b: 3, c: 4 }))
console.log(equalityChecker({ a: 1, b: 2 }, { b: 2, a: 1 }))
console.log(equalityChecker({a: 1, b: 2}, {a: 1 , b: 2, d: 3}))

//