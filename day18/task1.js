"use strict";
function LastTen(n) {
    if (Math.round(n) !== n || n <= 0 || typeof (n) !== "number")
        return 'Invalid input';
    let sum = 0n;
    for (let i = 1n; i <= BigInt(n); i++) {
        sum += (i ** i);
    }
    let result = sum.toString().slice(-10);
    return result.padStart(10, '0');
}
// console.log(LastTen(10))
// console.log(LastTen(1000))
let TestCase = [
    {
        id: 1,
        Input: 10,
        output: '0405071317'
    },
    {
        id: 2,
        Input: 1000,
        output: 9110846700
    },
    {
        id: 3,
        Input: 3,
        output: '0000000032'
    },
    {
        id: 4,
        Input: 5.3,
        output: 'Invalid input'
    },
    {
        id: 5,
        Input: -24,
        output: 'Invalid input'
    },
    {
        id: 6,
        Input: 0,
        output: 'Invalid input'
    },
    {
        id: 7,
        Input: [12, 43],
        output: 'Invalid input'
    },
    {
        id: 8,
        Input: null,
        output: 'Invalid input'
    }
];
TestCase.forEach(({ Input, output, id }) => {
    let result = LastTen(Input);
    if (result.toString() === output.toString())
        console.log("Passed at ", id);
    else
        console.log("Failed at ", id, result);
});
