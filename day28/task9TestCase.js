"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task9_ts_1 = require("./task9.ts");
var TestCase = [
    {
        id: 1,
        input: [12, 43, 13, 54],
        output: "Unsorted",
    },
    {
        id: 2,
        input: [12, 43, 65],
        output: "ascending",
    },
    {
        id: 3,
        input: [65, 34, 23, 12],
        output: "descending"
    },
    {
        id: 4,
        input: [],
        output: "Invalid input"
    },
    {
        id: 5,
        input: [1, 1, 1],
        output: "ascending"
    },
    {
        id: 6,
        input: [3.2, 5.4, 0.23],
        output: "Unsorted"
    },
    {
        id: 7,
        input: [-43, -32, -26, -12],
        output: "ascending"
    }
];
TestCase.forEach(function (_a) {
    var input = _a.input, id = _a.id, output = _a.output;
    var result = (0, task9_ts_1.findSortType)(input);
    if (result === output)
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
