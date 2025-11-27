"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linearsearch_ts_1 = require("./linearsearch.ts");
var TestCase = [
    {
        id: 1,
        input: [7, 12, 9, 11, 3],
        item: 11,
        output: "Value 11 found at index 3"
    },
    {
        id: 2,
        input: [81, 54, 32, 1, 98, 43],
        item: 43,
        output: "Value 43 found at index 5"
    },
    {
        id: 3,
        input: [81, 54, 32, 1, 98, 43],
        item: 100,
        output: "Value 100 is not found"
    },
    {
        id: 4,
        input: [2, 43, 54, 65, 76, 87],
        item: 54,
        output: "Value 54 found at index 2"
    },
    {
        id: 5,
        input: [],
        item: 43,
        output: "Invalid input"
    }
];
TestCase.forEach(function (_a) {
    var input = _a.input, output = _a.output, id = _a.id, item = _a.item;
    var result = (0, linearsearch_ts_1.LinearSearch)(input, item);
    if (result === output)
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
