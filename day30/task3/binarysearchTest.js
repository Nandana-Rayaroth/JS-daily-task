"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binarysearch_ts_1 = require("./binarysearch.ts");
var TestCase = [
    {
        id: 1,
        input: [2, 3, 5, 7, 11, 15, 25],
        item: 15,
        output: "Value 15 found",
    },
    {
        id: 2,
        input: [43, 54, 65, 76, 87],
        item: 86,
        output: "Value 86 not found",
    },
    {
        id: 3,
        input: [12, 23, 32, 43, 54, 65, 76],
        item: 32,
        output: "Value 32 found",
    },
    {
        id: 4,
        input: [12, 23, 32, 43, 54, 65, 76],
        item: 0,
        output: "Value 0 not found"
    },
    {
        id: 5,
        input: [76, 65, 54, 43, 32, 23, 12],
        item: 32,
        output: "Value 32 found"
    },
    {
        id: 6,
        input: [53, 13, 54, 65, 23, 254],
        item: 490,
        output: "Invalid input"
    },
    {
        id: 7,
        input: [],
        item: 43,
        output: "Invalid input"
    },
    {
        id: 8,
        input: [-33, -54, -65, -86],
        item: -65,
        output: "Value -65 found"
    },
];
TestCase.forEach(function (_a) {
    var id = _a.id, input = _a.input, item = _a.item, output = _a.output;
    var result = (0, binarysearch_ts_1.BinarySearch)(input, item);
    if (result === output)
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
