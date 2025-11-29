"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task4_js_1 = require("./task4.js");
var TestCase = [
    {
        id: 1,
        input: "Hello {{name}}, you have {{count}} new messages.",
        obj: {
            name: "John",
            count: 3,
        },
        output: "Hello John, you have 3 new messages.",
    },
    {
        id: 2,
        input: "Welcome to {{name}}, You have so many {{item}} here, also we arranged {{complement}}",
        obj: { name: "Wonderland", item: "fun", complement: "food" },
        output: "Welcome to Wonderland, You have so many fun here, also we arranged food",
    },
    {
        id: 3,
        input: "Happy {{event}} {{person}}",
        obj: { event: "birthday", person: "ABC" },
        output: "Happy birthday ABC",
    },
    {
        id: 4,
        input: "Hi hello {event} {{person}}",
        obj: { event: "birthday", person: "ABC" },
        output: "Hi hello {event} ABC",
    },
    {
        id: 5,
        input: "Happy {{evn}} {{person}}",
        obj: { event: "birthday", person: "ABC" },
        output: "Happy {{evn}} ABC",
    },
];
TestCase.forEach(function (_a) {
    var id = _a.id, input = _a.input, obj = _a.obj, output = _a.output;
    var result = (0, task4_js_1.templateParser)(input, obj);
    if (result === output)
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, "Expected : ", output, "Got : ", result);
});
