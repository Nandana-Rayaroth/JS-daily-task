"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Partition(arr, fn) {
    if (!Array.isArray(arr) || arr.length <= 0 || !fn)
        return 'Invalid input';
    let result = [];
    let firstPart = [];
    let secondPart = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]))
            firstPart.push(arr[i]);
        else
            secondPart.push(arr[i]);
    }
    if (firstPart.length > 0)
        result.push(firstPart);
    if (secondPart.length > 0)
        result.push(secondPart);
    return (result);
}
// console.log(Partition([1, 2, 3, 4], (x: number) =>x % 2 === 0))
let TestCase = [
    {
        id: 1,
        InputArray: [1, 2, 3, 4],
        InputFunction: (x) => x % 2 === 0,
        output: [
            [2, 4],
            [1, 3],
        ],
    },
    {
        id: 2,
        InputArray: [12, 34, 56, 67, 78],
        InputFunction: (x) => x % 2 === 0,
        output: [[12, 34, 56, 78], [67]],
    },
    {
        id: 3,
        InputArray: [1, 2, 3, 4],
        InputFunction: (x) => x === 2,
        output: [[2], [1, 3, 4]],
    },
    {
        id: 4,
        InputArray: [12, 89, 42, 58, 36],
        InputFunction: (x) => x === 0,
        output: [[12, 89, 42, 58, 36]],
    },
    {
        id: 5,
        InputArray: [],
        InputFunction: (x) => x === 2,
        output: "Invalid input",
    },
    {
        id: 6,
        InputArray: [12, "34", "56", 23, "90"],
        InputFunction: (x) => typeof x === "string",
        output: [
            ["34", "56", "90"],
            [12, 23],
        ],
    },
    {
        id: 7,
        InputArray: [1, { greet: "hello" }, 45, { greet: "hi" }],
        InputFunction: (x) => typeof x === "object",
        output: [
            [{ greet: "hello" }, { greet: "hi" }],
            [1, 45],
        ],
    },
    {
        id: 8,
        InputArray: [32, 12, [43, 56], 90],
        InputFunction: (x) => typeof x === "number",
        output: [[32, 12, 90], [[43, 56]]],
    },
    {
        id: 9,
        InputArray: ["hello", "hi", 54, 89, "morning"],
        InputFunction: (x) => typeof x === 'number',
        output: [[54, 89], ["hello", "hi", "morning"]]
    },
    {
        id: 10,
        InputArray: [21, "hello", 45, "hi"],
        InputFunction: (x) => typeof x === 'number',
        output: [[21, 45], ["hello", "hi"]]
    }
];
TestCase.forEach(({ InputArray, InputFunction, output, id }) => {
    let result = Partition(InputArray, InputFunction);
    if (JSON.stringify(result) === JSON.stringify(output))
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, result, output);
});
//# sourceMappingURL=task1.js.map