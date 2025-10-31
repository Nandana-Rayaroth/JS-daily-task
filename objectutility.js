export function objectEquality(obj1, obj2){
    let first = []
    let second = []

    for(let [keys, values] of Object.entries(obj1)) {
        first.push(keys, values)
    }
    for(let [keys, values] of Object.entries(obj2)) {
        second.push(keys, values)
    }
    first = first.sort()
    second = second.sort()
    if(first.length === second.length){
        for(let i = 0; i < first.length; i++){
            if(first[i] !== second[i]) {
                // if(Array.isArray(first[i] && Array.isArray(second[i]))){
                //     console.log("this is array")
                // }
                if(JSON.stringify(second) !== JSON.stringify(first)) return "Failed"
                // else return("Failed", typeof(first[i], typeof(second[i])))
                
            }
        }
        return("Passed")
    }
    else return("Failed")
}

console.log(
  objectEquality(
    {
      name: "JavaScript",
      country: "US",
      dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
    },
    {
      name: "JavaScript",
      country: "US",
      dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
    }
  )
);

// console.log(objectEquality({name: "Nandana", age : 12}, {name : "Nandana", age : 12}))
// console.log(objectEquality({ a: 1, b: 2 }, { a: 1, b: 2 }));
// console.log(objectEquality({ a: 1, b: 2 }, { b: 3, c: 4 }));
// console.log(objectEquality({ a: 1, b: 2 }, { b: 2, a: 1 }));
// console.log(objectEquality({ a: 1, b: 2 }, { a: 1, b: 2, d: 3 }));