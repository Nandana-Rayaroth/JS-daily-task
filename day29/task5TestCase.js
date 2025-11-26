"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task5_ts_1 = require("./task5.ts");
var TestCase = [
    {
        id: 1,
        input: [2, 5, 54, 1, 2, 5],
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
];
TestCase.forEach(function (_a) {
    var input = _a.input, output = _a.output, id = _a.id;
    var result = (0, task5_ts_1.UniqueSum)(input);
    if (result === output)
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
