function fact(n) {
    if(!Number.isInteger(n) || n < 0) return 'Invalid input'
    if(n === 0) return 1
    else return n * fact(n-1)
}

let TestCase = [
    {
        id : 1,
        input : 5,
        output : 120
    },
    {
        id : 2,
        input : 1,
        output : 1
    },
    {
        id : 3,
        input : 0,
        output : 1
    },
    {
        id : 4,
        input : -34,
        output : 'Invalid input'
    },
    {
        id: 5,
        input : "hello",
        output : 'Invalid input'
    },
    {
        id: 6,
        input : 324.45,
        output : 'Invalid input'
    },
    {
        id: 7,
        input: "",
        output : 'Invalid input'
    },
    {
        id: 8,
        input : [1, 2, 4],
        output : 'Invalid input'
    },
    {
        id : 9,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 10,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 11,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 12,
        input : {greet : 'hello'},
        output : 'Invalid input'
    },
    {
        id : 13,
        input : -34,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : 24.5,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : null,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output, id}) => {
    let result = fact(input)
    if(result === output) console.log("Passed", id)
    else{
        console.log("Failed")
        console.log("Expected", output)
        console.log("Got", result)
    }
})