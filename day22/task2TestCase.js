"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task2_ts_1 = require("./task2.ts");
var TestCase = [
    {
        id: 1,
        input: "A, B, C",
        output: [
            ["A", "B", "C"],
            ["B", "C", "A"],
            ["C", "A", "B"],
        ],
    },
    {
        id: 2,
        input: "A, B, C, D",
        output: [
            ['A', 'B', 'C', 'D'],
            ['B', 'C', 'D', 'A'],
            ['C', 'D', 'A', 'B'],
            ['D', 'A', 'B', 'C']
        ]
    },
    {
        id: 3,
        input: "A, B",
        output: [
            ['A', 'B'],
            ['B', 'A']
        ]
    },
    {
        id: 4,
        input: "A",
        output: [["A"]]
    },
    {
        id: 5,
        input: "",
        output: 'Invalid input'
    },
    {
        id: 6,
        input: " ",
        output: 'Invalid input'
    },
    {
        id: 7,
        input: "1, 2, 4",
        output: [['1', '2', '4'], ['2', '4', '1'], ['4', '1', '2']]
    }
];
TestCase.forEach(function (_a) {
    var input = _a.input, output = _a.output, id = _a.id;
    var result = (0, task2_ts_1.SeatingArrangement)(input);
    if (JSON.stringify(result) === JSON.stringify(output)) {
        console.log("Passed at ", id);
    }
    else {
        console.log("Failed at ", id, result, output);
    }
});
