
function SumofDiviser(arr) {
    if((!Array.isArray(arr)) || arr.length === 0) return 'Invalid input'
    let sample = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 === 0) {
            sample.push(arr[i])
        }
    }
    let result = sample.reduce((acc, curr) => acc + curr, 0)
    return result
}

// console.log(SumofDiviser([10, 20, 30, 40, 50]))

const TestCase = [
    {
        id : 1,
        input : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        output : 18
    },
    {
        id : 2,
        input : [-30, -60, -24, -71],
        output : -114
    },
    {
        id : 3,
        input : [0],
        output : 0
    },
    {
        id : 4,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 5,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 6,
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 7,
        input : "string",
        output : 'Invalid input'
    },
    {
        id : 8,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 9,
        input : 956,
        output : 'Invalid input'
    },
    {
        id : 10,
        input : [23, 30, "ewqr"],
        output : 30
    },
    {
        id : 11,
        input : ["hello", 0, 6, 30, 32],
        output : 36
    },
    {
        id : 12,
        input : [0, 6, 30, 32, "hello"],
        output : 36
    },
    {
        id : 13,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : true,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : 4536.56,
        output : 'Invalid input'
    }
]
TestCase.forEach(({input, output}) => {
    let result = SumofDiviser(input)
    if(result === output) console.log("Passed")
    else console.log("Failed"); 
})

// 