"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task8_ts_1 = require("./task8.ts");
var TestCase = [
    {
        id: 1,
        input: "Room 45 on floor 3",
        output: "Room ## on floor #",
    },
    {
        id: 2,
        input: "Room43 at floor3",
        output: "Room## at floor#",
    },
    {
        id: 3,
        input: "#fref43",
        output: "#fref##",
    },
    {
        id: 4,
        input: "ABV46 nklfj 543",
        output: "ABV## nklfj ###",
    },
    {
        id: 5,
        input: "AFRnbr562",
        output: "AFRnbr###",
    },
    {
        id: 6,
        input: "afsgergw",
        output: "afsgergw",
    },
    {
        id: 7,
        input: "",
        output: "Invalid input"
    },
    {
        id: 8,
        input: "345234",
        output: "######"
    }
];
TestCase.forEach(function (_a) {
    var input = _a.input, output = _a.output, id = _a.id;
    var result = (0, task8_ts_1.removeDigit)(input);
    if (result === output)
        console.log("Passed at ", id);
    else
        console.log("Failed at", id, "Expected : ", output, "Got: ", result);
});
