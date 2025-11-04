import { ArrayUtility } from "../utility.js"
function AscendSort(arr) {
    if(!Array.isArray(arr)|| arr.length <= 0) return 'Invalid input'
    let temp = []
    let length = arr.length
    let sample = arr
    for(let i = 0; i < length; i++){
        if(typeof arr[i] !== 'number') return 'Invalid input'
        let minVal = Math.min(...sample)
        temp.push(minVal)
        sample = sample.filter((element) => element !== minVal)
    }
    return(temp)

}   

let TestCase = [
    {
        id : 1,
        input : [5, 4, 1, 2, 3],
        output : [1, 2, 3, 4, 5]
    },
    {
        id : 2,
        input : [45, 98, 9452, 789, 435, 123, 243],
        output : [45, 98, 123, 243, 435, 789, 9452]
    },
    {
        id : 3,
        input : [984, 786, 123, -10, -3, 0, 10234],
        output : [-10, -3, 0, 123, 786, 984, 10234]
    },
    {
        id : 4,
        input : [345, 98, 865, 245, 9.8],
        output : [9.8, 98, 245, 345, 865]
    },
    {
        id : 5,
        input : "hello",
        output : 'Invalid input'
    },
    {
        id : 6,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 7,
        input : 123,
        output : 'Invalid input'
    },
    {
        id : 8,
        input : ["hi", "hello", "bye"],
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
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 13,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : " ",
        output : 'Invalid input'
    },
    {
        id : 15,
        input : [" ", " ", " "],
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output}) => {
    let result = AscendSort(input)
    let flag = ArrayUtility(result, output)
    console.log(flag)
})

//