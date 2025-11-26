"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task3_js_1 = require("./task3.js");
var TestCase = [
    {
        id: 1,
        input: [
            { key: "a", value: 1 },
            { key: "b", value: 2 },
        ],
        output: { a: 1, b: 2 },
    },
    {
        id: 2,
        input: [
            { key: "Joseph", value: 34 },
            { key: "Angel", value: 32 },
        ],
        output: { Joseph: 34, Angel: 32 },
    },
    {
        id: 3,
        input: [
            { name: "Anjana", age: 32 },
            { name: "Arjun", age: 53 },
        ],
        output: { Anjana: 32, Arjun: 53 },
    },
    {
        id: 4,
        input: [
            { key: "Arun", value: 23 },
            { key: "Abishek", value: 53 },
            { key: "Arjun", value: 43 },
            { key: "Amritha", value: 52 },
        ],
        output: { Arun: 23, Abishek: 53, Arjun: 43, Amritha: 52 },
    },
    {
        id: 5,
        input: [{ key: "", value: 32 }, { key: "Amritha", value: 53 }],
        output: "Invalid input"
    },
    {
        id: 6,
        input: [{ name: "Archana", age: 41, isEmployee: "Employee", value: true }, { name: "Amritha", age: 19, isStundet: "Student", value: false }],
        output: { Archana: 41, Employee: true, Amritha: 19, Student: false }
    },
    {
        id: 7,
        input: [{ name: "Archana", stream: "Management", name2: "Ashikha", stream2: "" }],
        output: "Invalid input"
    }
];
TestCase.forEach(function (_a) {
    var input = _a.input, output = _a.output, id = _a.id;
    var result = (0, task3_js_1.ToSingleObject)(input);
    if (JSON.stringify(result) === JSON.stringify(output))
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
