function equalityChecker(obj1, obj2) {
    if(typeof obj1 !== "object" || typeof obj2 !== "object") return "Invalid input"

    let first = []
    let second = []
    for(let [keys, values] of Object.entries(obj1)) {
        if((keys || values) === "") return 'Invalid input'
        first.push(`${keys}, ${values}`)
       
    }
    for(let [keys, values] of Object.entries(obj2)) {
        if((keys || values) === "") return 'Invalid input'
        second.push(`${keys}, ${values}`)
    }

    first = first.sort()
    second = second.sort()
    let flag = []
    if(first.length <= 0 || second.length <= 0) return 'Invalid input'
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
        for(let j = 0; j < flag.length; j++){
            if(flag[j] === "Equal"){
                // return "Equal"
                final = "Equal"
            }
            else{
                return "Not equal"
            }
            
        }
        return final;
    }
    else return "Not Equal"
    
}

const TestCase = [
  {
    id: 1,
    input1: { a: 1, b: 2 },
    input2: { a: 1, b: 2 },
    output: "Equal",
  },
  {
    id: 2,
    input1: { a: 1, b: 2 },
    input2: { b: 3, c: 4 },
    output: "Not Equal",
  },
  {
    id: 3,
    input1: { a: 1, b: 2 },
    input2: { b: 2, a: 1 },
    output: "Equal",
  },
  {
    id: 4,
    input1: { a: 1, b: 2 },
    input2: { a: 1, b: 2, d: 3 },
    output: "Not Equal",
  },
  {
    id: 5,
    input1: "hello",
    input2: { a: 1, b: 3 },
    output: "Invalid input",
  },
  {
    id: 6,
    input1: { a: 1, b: 3 },
    input2: "hello",
    output: "Invalid input",
  },
  {
    id: 7,
    input1: "hello",
    input2: "hello",
    output: "Invalid input",
  },
  {
    id: 8,
    input1: "   ",
    input2: { a: 1, b: 3 },
    output: "Invalid input",
  },
  {
    id: 9,
    input1: { a: 1, b: 3 },
    input2: "     ",
    output: "Invalid input",
  },
  {
    id: 10,
    input1: {},
    input2: { a: 1, b: 3 },
    output: "Invalid input",
  },
  {
    id: 11,
    input1: {},
    input2: {},
    output: "Invalid input",
  },
  {
    id: 12,
    input1: 234,
    input2: 256,
    output: "Invalid input",
  },
  {
    id: 13,
    input1: { a: 2, b: { c: 1, d: 3 }, e: 4 },
    input2: { a: 2, b: { c: 1, d: 3 }, e: 4 },
    output: "Equal",
  },
  {
    id: 14,
    input1: { a: 2, b: { c: 1, d: 3 }, e: 4 },
    input2: { a: 3, b: 5 },
    output: "Not Equal",
  },
  {
    id: 15,
    input1: [],
    input2: [],
    output: "Invalid input",
  },
  {
    id: 16,
    input1: { a: 1, b: 3, c: [1, 2, 4] },
    input2: { a: 1, b: 3, c: [1, 2, 4] },
    output : 'Equal'
  },
];

TestCase.forEach(({input1, input2, output}) => {
    let result = equalityChecker(input1, input2)
    if(result === output) console.log("Passed")
    else console.log("Failed"); 
})

//