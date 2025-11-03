import { objectEquality } from "../objectutility.js";
function WordFrequency(senctance) {
    if(typeof senctance !== "string" || senctance.length === 0 || senctance.trim() === "") return 'Invalid input'

    let lower = senctance.toLowerCase().replaceAll(/[.,!@#$%&*]/g, "");
    let splitted = lower.split(" ")

    let count = {}
    for(let i of splitted) {
        count[i] = (count[i] || 0 )+1
    }
    return(count)
}

// console.log(WordFrequency("Hello hello world, world!"))
// console.log(WordFrequency("number from missing number"))

const TestCase = [
    {
        id : 1,
        input : "hello Hello world, world!",
        output : {hello: 2, world: 2}
    },
    {
        id : 2,
        input : "number from missing number",
        output : {number: 2, from: 1, missing: 1}
    },
    {
        id : 3,
        input : "wow woooow wow",
        output : {wow: 2, woooow: 1}
    },
    {
        id : 4,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 5,
        input : "  ",
        output : 'Invalid input'
    },
    {
        id : 6,
        input : [" ", " ", " "],
        output : 'Invalid input'
    },
    {
        id : 7,
        input : ["hello", "hi"],
        output : 'Invalid input'
    },
    {
        id :8,
        input : [{greet : "hello"}],
        output : 'Invalid input'
    },
    {
        id : 9,
        input : {greet : "hello"},
        output : "Invalid input"
    },
    {
        id : 10,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 11,
        input : {greet : "hello"},
        output : 'Invalid input'
    },
    {
        id : 12,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 13,
        input : 1234,
        output : 'Invalid input'
    },
    {
        id: 14,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : [            ],
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output}) => {
    let result = WordFrequency(input)
    let flag = objectEquality(result, output)
    console.log(flag)
})

// 