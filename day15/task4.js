import { ArrayUtility } from "../utility.js"
function InterpretToNumber(arr){
    if(!Array.isArray(arr) || arr.length <= 0) return 'Invalid input'
    let num 
    let text = ""
    for(let i = 0; i < arr.length; i++){
        if(!Number.isInteger(arr[i]) || arr[i] < 0) return 'Invalid input'
        text += arr[i]
    }
    
    num = Number(text)
    num = num + 1
    let result = num.toString().split("")
    
    for(let i = 0; i < result.length; i++) result[i] = Number(result[i])
    return(result)
}

let TestCase = [
    {
        id : 1,
        input : [1, 2, 3],
        output : [1, 2, 4]
    },
    {
        id : 2,
        input : [9],
        output : [1, 0]
    },
    {
        id : 3,
        input : [4, 5, 7],
        output : [4, 5, 8]
    },
    {
        id : 4,
        input : [-3, 5, 67],
        output : 'Invalid input'
    },
    {
        id : 5,
        input : [2.3, 4.4],
        output : 'Invalid input'
    },
    {
        id : 6,
        input : [0, 0, 0],
        output : [1]
    },
    {
        id : 7,
        input : "hello",
        output : 'Invalid input'
    },
    {
        id : 8,
        input : 123,
        output : 'Invalid input'
    },
    {
        id : 9,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 10,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 11,
        input : {greet : "hello"},
        output : 'Invalid input'
    },
    {
        id : 12,
        input : [{greet : "hello"}],
        output : 'Invalid input'
    },
    {
        id : 13,
        input : [" ", " ", " "],
        output : 'Invalid input'
    },
    {
        id : 14,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : undefined,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output, id}) => {
    let result = InterpretToNumber(input)
    let flag = ArrayUtility(result, output)
    console.log(flag," at ", id)
})

