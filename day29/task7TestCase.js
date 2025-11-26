"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task7_ts_1 = require("./task7.ts");
var TestCase = [
    {
        id: 1,
        input: "?name=John&age=20&active=true",
        output: { name: "John", age: "20", active: "true" },
    },
    {
        id: 2,
        input: "?name=John",
        output: { name: "John" },
    },
    {
        id: 3,
        input: "name=John&age=20&active=true",
        output: "Invalid URL",
    },
    {
        id: 4,
        input: "?nameJohn",
        output: "Invalid URL",
    },
    {
        id: 5,
        input: "",
        output: "Invalid URL",
    },
    {
        id: 6,
        input: "?nameJohn&age20&activetrue",
        output: "Invalid URL"
    },
    {
        id: 7,
        input: "bhgbuhuhp",
        output: "Invalid URL"
    }
];
TestCase.forEach(function (_a) {
    var input = _a.input, output = _a.output, id = _a.id;
    var result = (0, task7_ts_1.ConvertToObj)(input);
    if (JSON.stringify(result) === JSON.stringify(output))
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
