"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task6_js_1 = require("./task6.js");
var TestCase = [
    {
        id: 1,
        input: "aaabbbbcc",
        code: "encrypt",
        output: "a3b4c2",
    },
    {
        id: 2,
        input: "a3b4c2",
        code: "decrypt",
        output: "aaabbbbcc",
    },
    {
        id: 3,
        input: "aaabbccbb",
        code: "encrypt",
        output: "a3b2c2b2",
    },
    {
        id: 4,
        input: "a3b2c2b2",
        code: "decrypt",
        output: "aaabbccbb",
    },
    {
        id: 5,
        input: "aaabbccbb",
        code: "enrpt",
        output: "Invalid input",
    },
    {
        id: 6,
        input: "a3b2c2b2",
        code: "decpt",
        output: "Invalid input",
    },
    {
        id: 7,
        input: "aaabbccbb",
        code: "decrypt",
        output: "Invalid code",
    },
    {
        id: 7,
        input: "a3b2c2b2",
        code: "encrypt",
        output: "a131b121c121b121",
    },
    {
        id: 8,
        input: "",
        code: "encrypt",
        output: "Invalid input"
    },
    {
        id: 9,
        input: "",
        code: "decrypt",
        output: "Invalid input"
    },
    {
        id: 10,
        input: "aaabbbccc",
        code: "",
        output: "Invalid input"
    },
    {
        id: 11,
        input: "a3b5c1",
        code: "",
        output: "Invalid input"
    }
];
TestCase.forEach(function (_a) {
    var id = _a.id, input = _a.input, code = _a.code, output = _a.output;
    var result = (0, task6_js_1.StringDecode)(input, code);
    if (result === output)
        console.log("Passed at", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
