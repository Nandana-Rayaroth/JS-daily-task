"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task4_ts_1 = require("./task4.ts");
var testCase = [
    {
        id: 1,
        input: "hello_world_from_js",
        output: "helloWorldFromJs"
    },
    {
        id: 2,
        input: "hi_from_css",
        output: "hiFromCss"
    },
    {
        id: 3,
        input: "hEllo_from_js",
        output: "Invalid snake case"
    },
    {
        id: 4,
        input: "hello_From_js",
        output: "Invalid snake case"
    },
    {
        id: 5,
        input: "hello from_js",
        output: "Invalid snake case"
    },
    {
        id: 6,
        input: "HELLO_FROM_JS",
        output: "Invalid snake case"
    }
];
testCase.forEach(function (_a) {
    var input = _a.input, output = _a.output, id = _a.id;
    var result = (0, task4_ts_1.CamelCase)(input);
    if (result === output)
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
