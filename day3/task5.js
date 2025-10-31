
function totalSum(...arr) {
    let temp = [...arr]
    if(temp.length === 0 ) return 'Invalid input'
    for(let i = 0; i < temp.length; i++){
        if(typeof(temp[i]) !== "number") return 'Invalid input'
    }
    let result = temp.reduce((acc, curr) => acc + curr, 0)
    return result
}


// console.log(totalSum(1, 2, 3, 4))

const TestCase = [
    {
        id : 1,
        input : [1, 2, 3, 4],
        output : 10
    },
    {
        id : 2,
        input : [1, 2],
        output : 3
    },
    {
        id : 3,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 4,
        input : [-12, -34, -45],
        output : -91
    },
    {
        id : 5,
        input : [0, 0, 0],
        output : 0
    },
    {
        id : 6,
        input : "hello",
        output : 'Invalid input'
    },
    {
        id : 7,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 8,
        input : [34],
        output : 34
    },
    {
        id : 9,
        input : ["hi", "hello"],
        output : 'Invalid input'
    },
    {
        id : 10,
        input : [null],
        output : 'Invalid input'
    },
    {
        id : 11,
        input : [undefined],
        output : 'Invalid input'
    },
    {
        id : 12,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 13,
        input : [{greet: "hello"}],
        output : 'Invalid input'
    },
    {
        id : 14,
        input : [12*2, 3*3],
        output : 33
    },
    {
        id : 15,
        input : [12.23, 3.4, 6.12],
        output : 21.75
    }
]

TestCase.forEach(({input, output}) => {
    let result = totalSum(...input)
    if(result === output) console.log("Passed")
    else console.log("Failed")
})

// 