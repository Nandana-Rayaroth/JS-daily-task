import { UniqArr } from "./task1.ts";

let testCase = [
    {
        id: 1,
        input: [12, 34, 65, 12, 43, 46, 56, 56, 34, 43],
        output: [12, 34, 65, 43, 46, 56]
    },
    {
        id: 2,
        input: ["a", "b", "c", "d", "a", "b"],
        output: ["a", "b", "c", "d"]
    },
    {
        id: 3,
        input: ["a", "B", "c", "b", "d", "a"],
        output: ["a", "B", "c", "b", "d"]
    },
    {
        id: 4,
        input: [12, 43, 54, 43],
        output: [12, 43, 54]
    },
    {
        id: 5,
        input: [54, 54, 23, 23, 23, 54],
        output: [54, 23]
    }
]

testCase.forEach(({input, output, id}) => {
    let result = UniqArr(input)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed at ", id, "Expected : ", output , "Got : ", result)
})