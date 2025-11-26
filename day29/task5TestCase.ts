import { UniqueSum } from "./task5.ts";

let TestCase = [
    {
        id: 1,
        input: [2, 5, 54,1, 2, 5],
        output: 55
    },
    {
        id: 2,
        input: [1, 2, 3, 2],
        output: 4
    },
    {
        id: 3,
        input: [0, 0, 0, 0],
        output: 0
    },
    {
        id: 4,
        input: [4, -3, 2, -3, 4],
        output: 2
    },
    {
        id: 5,
        input: [54],
        output: 54
    }
]

TestCase.forEach(({input, output, id}) => {
    let result = UniqueSum(input)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id, "Expected : ", output, "Got : ", result)
})