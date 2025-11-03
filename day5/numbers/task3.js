
function isValidNumber(value) {
    // if(value !== Infinity || value !== NaN ){
    //     console.log("Valid number")
    // }
    if(Number.isFinite(value)) {
        return("Valid number")
    }
    else return "Invalid number"
}

// console.log(isValidNumber(NaN))

const TestCase = [
    {
        id : 1,
        input : 23,
        output : 'Valid number'
    },
    {
        id : 2,
        input : 45,
        output : 'Valid number'
    },
    {
        id : 3,
        input : 0,
        output : 'Valid number'
    },
    {
        id : 4,
        input : -23,
        output : 'Valid number'
    },
    {
        id : 5,
        input : 54.65,
        output : 'Valid number'
    },
    {
        id : 6,
        input : undefined,
        output : 'Invalid number'
    },
    {
        id : 7,
        input : null,
        output : 'Invalid number'
    },
    {
        id : 8,
        input : NaN,
        output : 'Invalid number'
    },
    {
        id : 9,
        input : {},
        output : 'Invalid number'
    },
    {
        id : 10,
        input : {greet : "hello"},
        output : 'Invalid number'
    },
    {
        id : 11,
        input : [],
        output : 'Invalid number'
    },
    {
        id : 12,
        input : [1, 2, 3],
        output : 'Invalid number'
    },
    {
        id : 13,
        input : "hello",
        output : 'Invalid number'
    },
    {
        id : 14,
        input : " ",
        output : 'Invalid number'
    },
    {
        id : 15,
        input : "",
        output : 'Invalid number'
    }
]

TestCase.forEach(({input, output}) => {
    let result = isValidNumber(input)
    if(result === output) console.log("Passed")
    else console.log("Failed")
})