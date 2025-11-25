"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task5_ts_1 = require("./task5.ts");
var testCase = [
    {
        id: 1,
        ArrayOne: [1, 2, 3],
        ArrayTwo: [2, 3, 4],
        output: [2, 3]
    },
    {
        id: 2,
        ArrayOne: [12, 54, 65, 34],
        ArrayTwo: [54, 65, 23],
        output: [54, 65]
    },
    {
        id: 3,
        ArrayOne: ["hello", "hi", "good", "night"],
        ArrayTwo: ["hi", "good", "now"],
        output: ["hi", "good"]
    },
    {
        id: 4,
        ArrayOne: ["hello", undefined, "hi"],
        ArrayTwo: ["hello", "hi"],
        output: 'Invalid input'
    },
    {
        id: 5,
        ArrayOne: ["hello", "hi", " "],
        ArrayTwo: ["hi", "hello"],
        output: 'Invalid input'
    },
    {
        id: 6,
        ArrayOne: ["hello", "hi", "good", "morning"],
        ArrayTwo: ["hello", " ", "good"],
        output: "Invalid input"
    },
    {
        id: 7,
        ArrayOne: [3, 2, 5, 9],
        ArrayTwo: [54, 2, 9, 4, 1],
        output: [2, 9]
    },
    {
        id: 8,
        ArrayOne: [],
        ArrayTwo: [34, 23, 65],
        output: 'Invalid input'
    },
    {
        id: 9,
        ArrayOne: [3, 54, 12],
        ArrayTwo: [],
        output: 'Invalid input'
    }
];
testCase.forEach(function (_a) {
    var id = _a.id, ArrayOne = _a.ArrayOne, ArrayTwo = _a.ArrayTwo, output = _a.output;
    var result = (0, task5_ts_1.Intersection)(ArrayOne, ArrayTwo);
    if (JSON.stringify(result) === JSON.stringify(output))
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
