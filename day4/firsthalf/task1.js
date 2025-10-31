import { ArrayUtility } from "../../utility.js"
function flatArray(arr) {
    if(!Array.isArray(arr) || arr.length === 0) return 'Invalid input'
    for(let i = 0; i < arr.length; i++){
        if(arr[i].toString().trim() === "") return 'Invalid input'
    }
    return arr.flat(Infinity)
}

const TestCase = [
    {
        id : 1,
        input : [1, 2, [3, 4], 5],
        output : [1, 2, 3, 4, 5]
    },
    {
        id : 2,
        input : [1, 2, [3, [4]], 5],
        output : [1, 2, 3, 4, 5]
    },
    {
        id : 3,
        input : [1, [2, [3, [4,5,6], 7], 8, 9]],
        output : [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
        id : 4,
        input : [],
        output : "Invalid input"
    },
    {
        id: 5,
        input : ["          "],
        output :"Invalid input"
    },
    {
        id :6,
        input : [" ", [" "], " "],
        output : 'Invalid input'
    },
    {
        id : 7,
        input : "",
        output : "Invalid input"
    },
    {
        id: 8,
        input : "         ",
        output : 'Invalid input'
    },
    {
        id : 9,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 10,
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 11,
        input : true,
        output : 'Invalid input'
    },
    {
        id : 12,
        input : 123,
        output : 'Invalid input'
    },
    {
        id : 13,
        input : "hello",
        output : 'Invalid input'
    },
    {
        id : 14,
        input : ["hi", "hello", ["everyone"]],
        output : ["hi", "hello", "everyone"]
    },
    {
        id : 15,
        input : {greet: "hello"},
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output}) => {
    let result = flatArray(input)
    let flag = ArrayUtility(result, output)
    console.log(flag)
})

// 