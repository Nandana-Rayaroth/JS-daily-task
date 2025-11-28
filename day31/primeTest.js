"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prime_ts_1 = require("./prime.ts");
var TestCase = [
    {
        id: 1,
        input: 10,
        output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
    },
    {
        id: 2,
        input: 12,
        output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37],
    },
    {
        id: 3,
        input: 50,
        output: [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
            71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
            151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
        ],
    },
    {
        id: 4,
        input: 30,
        output: [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
            71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
        ],
    },
    {
        id: 5,
        input: 5,
        output: [2, 3, 5, 7, 11],
    },
    {
        id: 6,
        input: 1,
        output: 2,
    },
    {
        id: 7,
        input: 0,
        output: "Invalid input",
    },
    {
        id: 8,
        input: 5.4,
        output: "Invalid input",
    },
    {
        id: 9,
        input: -32,
        output: "Invalid input",
    },
];
TestCase.forEach(function (_a) {
    var id = _a.id, input = _a.input, output = _a.output;
    var result = (0, prime_ts_1.GetPrime)(input);
    if (JSON.stringify(result) === JSON.stringify(output))
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id);
});
