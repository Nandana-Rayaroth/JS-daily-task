import { RemoveFalsy } from "./task6.ts";

let TestCase = [
    {
        id: 1,
        input : [1, 0, 2, "", 3, null, 4],
        output : [1, 2, 3, 4]
    },
    {
        id : 2,
        input : [23, undefined, 98],
        output: [23, 98]
    },
    {
        id : 3,
        input: [43, 23, 64, false],
        output : [43, 23, 64]
    },
    {
        id : 4,
        input : ["hello", 43, "hi", ""],
        output : ["hello", 43, "hi"]
    },
    {
        id : 5,
        input : ["hello", "hi", null],
        output : ["hello", "hi"]
    },
    {
        id : 6,
        input : [NaN, 34, 13, "hello", "bye"],
        output : [34, 13, "hello", "bye"]
    },
    {
        id : 7,
        input : [false, 0, "", null, undefined, NaN],
        output : []
    }
]

TestCase.forEach(({input, output, id}) => {
    let result = RemoveFalsy(input)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed at ", id , "Expected : ", output, "Got : ", result)
})