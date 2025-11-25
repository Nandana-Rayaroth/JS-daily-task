import { toQueryString } from "./task8.ts";

let TestCase = [
    {
        id: 1,
        input : {name : "John", age : 30},
        output : "name=John&age=30"
    },
    {
        id: 2,
        input : {name : "Joseph", age: 35, isEmployee : "Yes"},
        output : "name=Joseph&age=35&isEmployee=Yes"
    },
    {
        id: 3,
        input : {name : "Amritha"},
        output : "name=Amritha"
    },
    {
        id: 4,
        input: {},
        output : "Invalid input"
    },
    {
        id : 5,
        input : {names : ["Amritha", "Archana"]},
        output : 'Invalid input'
    },
    
]

TestCase.forEach(({input, output, id}) => {
    let result = toQueryString(input)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id, "Expected : ", output, "Got : ", result)
})