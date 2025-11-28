"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gcd_ts_1 = require("./gcd.ts");
var TestCase = [
    {
        id: 1,
        a: 120,
        b: 25,
        output: 5
    },
    {
        id: 2,
        a: 25,
        b: 120,
        output: 5
    },
    {
        id: 3,
        a: 56,
        b: 12,
        output: 4
    },
    {
        id: 4,
        a: 210,
        b: 45,
        output: 15
    },
    {
        id: 5,
        a: 45,
        b: -24,
        output: 3
    },
    {
        id: 6,
        a: 54,
        b: -24,
        output: 6
    },
    {
        id: 7,
        a: 45.8,
        b: 25,
        output: "Invalid input"
    },
    {
        id: 8,
        a: 45,
        b: 20.54,
        output: "Invalid input"
    },
    {
        id: 9,
        a: 234.3,
        b: 65.43,
        output: "Invalid input"
    }
];
TestCase.forEach(function (_a) {
    var id = _a.id, a = _a.a, b = _a.b, output = _a.output;
    var result = (0, gcd_ts_1.Checker)(a, b);
    if (result === output)
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
