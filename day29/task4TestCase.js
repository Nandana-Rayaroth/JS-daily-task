"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task4_ts_1 = require("./task4.ts");
var TestCase = [
    {
        id: 1,
        input: 9000,
        output: "2 hours 30 minutes ",
    },
    {
        id: 2,
        input: 39721,
        output: "11 hours 2 minutes 1 second",
    },
    {
        id: 3,
        input: 3209,
        output: "53 minutes 29 seconds",
    },
    {
        id: 4,
        input: 60,
        output: "1 minute",
    },
    {
        id: 5,
        input: 3600,
        output: "1 hour",
    },
    {
        id: 6,
        input: 1800,
        output: "30 minutes ",
    },
    {
        id: 7,
        input: 43,
        output: "43 seconds",
    },
    {
        id: 8,
        input: 32905,
        output: "9 hours 8 minutes 25 seconds",
    },
    {
        id: 9,
        input: 0,
        output: "Invalid input"
    },
    {
        id: 10,
        input: -34,
        output: "Invalid input"
    },
    {
        id: 11,
        input: 34.21,
        output: "Invalid input"
    }
];
TestCase.forEach(function (_a) {
    var id = _a.id, input = _a.input, output = _a.output;
    var result = (0, task4_ts_1.timeText)(input);
    if (result.trim() === output.trim())
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
