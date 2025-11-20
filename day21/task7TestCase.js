"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task7_ts_1 = require("./task7.ts");
var TestCase = [
    {
        id: 1,
        Input: ["test@mail.com", "abc@", "ok@gmail.com"],
        output: ["test@mail.com", "ok@gmail.com"],
    },
    {
        id: 2,
        Input: ["he@llo@gamil.com", "hi@gmail.com"],
        output: ["hi@gmail.com"],
    },
    {
        id: 3,
        Input: ["@gmail.com", "hello@gmail.com"],
        output: ["hello@gmail.com"],
    },
    {
        id: 4,
        Input: [
            "hello2.-_3@gmail.com",
            "hello!!!@gmail.com",
            "hello#gmail.com",
            "hi&hello@gamail.com",
        ],
        output: ["hello2.-_3@gmail.com"],
    },
    {
        id: 5,
        Input: [".hello@gmail.com", "hi@gmail.com.", "ok.ay@gmail.com"],
        output: ["ok.ay@gmail.com"],
    },
    {
        id: 6,
        Input: ["hello...@gmail.com", "hello@gmail.com"],
        output: ["hello@gmail.com"]
    }
];
TestCase.forEach(function (_a) {
    var Input = _a.Input, output = _a.output, id = _a.id;
    var result = (0, task7_ts_1.validEmail)(Input);
    if (JSON.stringify(result) === JSON.stringify(output))
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected: ", output, "Got : ", result);
});
