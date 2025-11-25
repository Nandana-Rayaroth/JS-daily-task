import { MostFrq } from "./task2.js";

let TestCase = [
    {
        id: 1,
        input: [1, 2, 2, 3, 3, 3, 4],
        output: 3
    },
    {
        id: 2,
        input: [12, 43, 35, 12, 54, 23, 12, 54],
        output: 12
    },
    {
        id: 3,
        input: [23, 54, 23.23, 54, 23, 45, 68, 54],
        output: 54
    },
    {
        id: 4,
        input: [23, 45, 65, 76, 67, 67, 67],
        output: 67
    },
    {
        id: 5,
        input: [34, 34, 65, 76, 65, 34],
        output: 34
    }
]

TestCase.forEach(({id, input, output}) => {
    let result = MostFrq(input)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id, "Expected : ", output, "Got : ", result)
})