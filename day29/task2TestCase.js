"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task2_ts_1 = require("./task2.ts");
var TestCase = [
    {
        id: 1,
        input: [1, 2, 3, 4, 5],
        num: 2,
        output: [4, 5, 1, 2, 3]
    },
    {
        id: 2,
        input: [2, 4, 65, 76, 23, 6, 5],
        num: 3,
        output: [23, 6, 5, 2, 4, 65, 76]
    },
    {
        id: 3,
        input: [32, 31, 54, 65, 76, 86, 763, 53],
        num: 6,
        output: [53, 32, 31, 54, 65, 76, 86, 763]
    },
    {
        id: 4,
        input: [43, 35, 65, 76, 86],
        num: 9,
        output: "Invalid input"
    },
    {
        id: 5,
        input: [43, 35, 65, 76, 86],
        num: -32,
        output: "Invalid input"
    }
];
TestCase.forEach(function (_a) {
    var input = _a.input, num = _a.num, id = _a.id, output = _a.output;
    var result = (0, task2_ts_1.Rotate)(input, num);
    if (JSON.stringify(result) === JSON.stringify(output))
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
