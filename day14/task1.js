
function RemoveFalsy(arr){
    if(!Array.isArray(arr) || arr.length === 0) return 'Invalid input'
    let Truthy = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            Truthy.push(arr[i])
        }
    }
    return Truthy
}

let TestCase = [
    {
        id : 1,
        input : [54, false, null, 9, 'HI', 0],
        output : [54, 9, 'HI']
    },
    {
        id : 2,
        input : [-0, undefined, 12, "hello", ""],
        output : [12, "hello"]
    },
    {
        id : 3,
        input : [NaN, 12, 452, 'hello'],
        output : [12, 452, 'hello']
    },
    {
        id : 4,
        input : [" ", " ", " "],
        output : [" ", " ", " "]
    },
    {
        id : 5,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 6,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 7,
        input : [{greet : 'hello'}],
        output :[{greet : 'hello'}]
    },
    {
        id : 8,
        input : [{}],
        output : [{}]
    },
    {
        id : 9,
        input : "hello",
        output : 'Invalid input'
    },
    {
        id : 10,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 11,
        input : [null, NaN, undefined, 0],
        output : []
    },
    {
        id : 12,
        input : [12, 34, 56, 67, 33],
        output : [12, 34, 56, 67, 33]
    },
    {
        id : 13,
        input : ['hi', "", undefined],
        output: ['hi']
    },
    {
        id : 14,
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : null,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output, id}) => {
    let result = RemoveFalsy(input)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed")
})