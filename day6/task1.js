import { ArrayUtility } from "../utility.js"
function Rearrange(arr) {
    if(!Array.isArray(arr) || arr.length === 0 ) return 'Invalid input'

    let temp = []
    for(let i = 0; i < arr.length; i++){
        if (typeof arr[i] !== "number")
          return "Invalid input";
        if(arr[i] % 2 === 0) {
            temp.push(arr[i])
        }
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            temp.push(arr[i])
        }
    }
    return(temp)
}

// console.log(Rearrange([3, 2, 4, 1, 5, 8]))
// console.log(Rearrange([4, 8, 1, 8, 5, 2]))

const TestCase = [
    {
        id : 1,
        input : [3, 2, 4, 1, 5, 8],
        output : [2, 4, 8, 3, 1, 5]
    },
    {
        id : 2, 
        input : [4, 8, 1, 8, 5, 2],
        output : [4, 8, 8, 2, 1, 5]
    },
    {
        id : 3,
        input : [" ", " ", " "],
        output : 'Invalid input'
    },
    {
        id : 4,
        input : [0, 0, 0, 3, 4],
        output : [0, 0, 0, 4, 3]
    },
    {
        id : 5,
        input : ["hello", "hi"],
        output : 'Invalid input'
    },
    {
        id : 6,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 7,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 8,
        input : {greet : 'hello'},
        output : 'Invalid input'
    },
    {
        id : 9,
        input : "hello everyone",
        output : 'Invalid input'
    },
    {
        id : 10,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 11,
        input : [ -2, -3, -4, -5],
        output : [-2, -4, -3, -5]
    },
    {
        id : 12,
        input : 2341,
        output : 'Invalid input'
    },
    {
        id : 13,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : true,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output}) => {
    let result = Rearrange(input)
    let flag = ArrayUtility(result, output)
    console.log(flag)
})

// 