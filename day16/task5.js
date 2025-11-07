function  minPath(arr){
    if(!Array.isArray(arr) || arr.length === 0) return 'Invalid input'
    let min = []
    for(let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i]) || arr[i].length !== i+1) return 'Invalid input'
        let temp = []
        for(let j = 0; j < arr[i].length; j++){
            if(typeof arr[i][j] != 'number') return 'Invalid input'
            temp.push(arr[i][j])
        }
        if(temp.length === 0) return 'Invalid input'
        min.push(Math.min(...temp))
    }
    let result = min.reduce((acc, cur) => acc+cur, 0)
    return(result)
}

let TestCase = [
    {
        id : 1,
        input : [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]],
        output : 11
    },
    {
        id : 2,
        input : [[1], [2, 3], [4, 5, 6],[7, 8, 9, 10]],
        output : 14
    },
    {
        id :3,
        input : [[1, 2, 3], [4, 5], [6]],
        output : "Invalid input"
    },
    {
        id : 4,
        input : [[5, 10, 2], [1, 3], [2] ],
        output : 'Invalid input'
    },
    {
        id : 5,
        input : [["hello"], ["hi"]],
        output : 'Invalid input'
    },
    {
        id : 6,
        input : [12, 34, 45],
        output : 'Invalid input'
    },
    {
        id : 7,
        input : ["hello", "hi"],
        output : 'Invalid input'
    },
    {
        id : 8,
        input : [{greet : "hello"}],
        output : 'Invalid input'
    },
    {
        id : 9,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 10,
        input : [[ ], [   ], [   ]],
        output : 'Invalid input'
    },
    {
        id : 11,
        input : "hello",
        output : 'Invalid input'
    },
    {
        id : 12,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 13,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 14,
        input : {greet : 'hello'},
        output : 'Invalid input'
    },
    {
        id : 15,
        input : null,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output, id}) => {
    let result = minPath(input)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id, result, output)
})