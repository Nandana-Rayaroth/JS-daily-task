"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task6_ts_1 = require("./task6.ts");
var TestCase = [
    {
        id: 1,
        pattern: "abba",
        str: "dog cat cat dog",
        output: true,
    },
    {
        id: 2,
        pattern: "abaa",
        str: "dog cat cat dog",
        output: false,
    },
    {
        id: 3,
        pattern: "acdadc",
        str: "dog cat rat dog rat cat",
        output: true,
    },
    {
        id: 4,
        pattern: "edfg",
        str: "dog cat rat dog",
        output: false,
    },
    {
        id: 5,
        pattern: "edfg",
        str: "cat rat dog",
        output: false,
    },
    {
        id: 6,
        pattern: "abcd",
        str: "cat rat dog fish",
        output: true,
    },
    {
        id: 7,
        pattern: "Aba",
        str: "dog rat cat",
        output: true,
    },
    {
        id: 8,
        pattern: "*** ** * ** ***",
        str: "cat dog rat dog cat",
        output: "Spaces in patterns are not alloweded",
    },
    {
        id: 9,
        pattern: "*#$*",
        str: "cat rat dog cat",
        output: true
    },
    {
        id: 10,
        pattern: "%$#$%",
        str: "cat dog rat dog cat",
        output: true
    }
];
TestCase.forEach(function (_a) {
    var pattern = _a.pattern, str = _a.str, output = _a.output, id = _a.id;
    var result = (0, task6_ts_1.wordPattern)(pattern, str);
    if (result === output)
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected: ", output, "Got : ", result);
});
