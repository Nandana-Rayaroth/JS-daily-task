import { isAmstrong } from "./task3.ts";

let testCase = [
    {
        id: 1,
        input: 153,
        output: "True"
    },
    {
        id: 2,
        input: 123,
        output: "False"
    },
    {
        id: 3,
        input: 1634,
        output: "True"
    }, 
    {
        id: 4,
        input: 370,
        output: "True"
    },
    {
        id: 5,
        input: 34.435,
        output: "False"
    },
    {
        id: 6,
        input: -342,
        output: "False"
    },
    {
        id: 9,
        input: 0.40,
        output: "False"
    },
    {
        id: 10,
        input: 0,
        output: "True"
    }
]

testCase.forEach(({id, input, output}) => {
    let result = isAmstrong(input)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id, "expected : ", output, "Got : ", result)
})