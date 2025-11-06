import { ArrayUtility } from "../utility.js"
function IndicesofTwo(arr, target){
    if(!Array.isArray(arr) || !Number.isInteger(target)) return 'Invalid input'

    let Ind = []
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number') return 'Invalid input'
        for(let j = 1; j < arr.length; j++){
            
            if(arr[i] + arr[j] === target){
                Ind.push(i, j)
                return Ind
            }
        }
    }
    return (Ind.indexOf(Ind[0]))
}

let TestCase = [
    {
        id : 1,
        input : [2, 7, 11, 15],
        target : 9,
        output : [0, 1]
    },
    {
        id : 2,
        input : [3, 4, 6],
        target : 1,
        output : -1
    },
    {
        id : 3,
        input : [5, 3, 1, 6, 7],
        target : 4,
        output : [1, 2]
    },
    {
        id : 4,
        input : [-2, -4, 5, 6, 3],
        target : -6,
        output : [0, 1]
    },
    {
        id : 5,
        input : [-2, 5, 6, 3, -4],
        target : -6,
        output : [0, 4]
    },
    {
        id : 6,
        input : [0, 3, 5, 6, 7, -1],
        target : 4,
        output : [2, 5]
    },
    {
        id : 7,
        input : [0, 0, 0, 0],
        target : 0,
        output : [0, 1]
    },
    {
        id : 8,
        input : "string",
        target : 3,
        output : 'Invalid input'
    },
    {
        id : 9,
        input : [2, 4, 6, 7],
        target : "hello",
        output : 'Invalid input'
    },
    {
        id : 10,
        input : "hello",
        target : "hi",
        output : 'Invalid input'
    },
    {
        id : 11,
        input : [23, 12, 54],
        target : null,
        output : 'Invalid input'
    },
    {
        id : 12,
        input : null,
        target : 2,
        output : 'Invalid input'
    },
    {
        id : 13,
        input : {},
        target : 3,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : [2, 1, 4, 6],
        target : {},
        output : 'Invalid input'
    },
    {
        id : 15,
        input : [{}],
        target : 2,
        output : 'Invalid input'
    },
    {
        id : 16,
        input : ["hello", "hi"],
        target : 2,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, target, output, id}) => {
    let result = IndicesofTwo(input, target)
    let flag = ArrayUtility(result, output)
    console.log(flag, " at ", id)
})