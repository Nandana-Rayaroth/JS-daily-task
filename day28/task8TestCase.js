"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task8_ts_1 = require("./task8.ts");
var TestCase = [
    {
        id: 1,
        input: { name: "John", age: 30 },
        output: "name=John&age=30"
    },
    {
        id: 2,
        input: { name: "Joseph", age: 35, isEmployee: "Yes" },
        output: "name=Joseph&age=35&isEmployee=Yes"
    },
    {
        id: 3,
        input: { name: "Amritha" },
        output: "name=Amritha"
    },
    {
        id: 4,
        input: {},
        output: "Invalid input"
    },
    {
        id: 5,
        input: { names: ["Amritha", "Archana"] },
        output: 'Invalid input'
    }
];
TestCase.forEach(function (_a) {
    var input = _a.input, output = _a.output, id = _a.id;
    var result = (0, task8_ts_1.toQueryString)(input);
    if (result === output)
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
